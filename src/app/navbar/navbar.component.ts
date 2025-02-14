import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { SurveyService } from '../shared/services/survey.service';
import { SurveyFilterService } from '../shared/services/survey-filter.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent implements OnInit {
  surveyFilterForm!: FormGroup;
  surveyTypes: string[] = []; // Array to store survey types
  dateRanges = ['Last 7 days', 'Last 30 days', 'This year'];

  constructor(
    private router: Router, 
    private fb: FormBuilder, 
    private surveyService: SurveyService,
    private surveyFilterService: SurveyFilterService
  ) {}

  ngOnInit(): void {
    // Initialize the form group
    this.surveyFilterForm = this.fb.group({
      surveyType: ['', Validators.required],
      dateRange: ['', Validators.required]
    });

    // Fetch survey types from backend
    this.surveyService.getSurveyTypes().subscribe({
      next: (data) => {
        this.surveyTypes = data; // Assign the fetched data to the surveyTypes array
      },
      error: (err) => {
        console.error('Error fetching survey types', err);
      }
    });
  }

  onLogout(): void {
    // Remove the token from local storage and navigate to the signin page
    localStorage.removeItem('token');
    this.router.navigateByUrl('/signin');
  }

  applyFilter() {
    if (this.surveyFilterForm.valid) {
      const filterCriteria = this.surveyFilterForm.value;
      this.surveyFilterService.updateFilterCriteria(filterCriteria); // Pass filter criteria to the service
      console.log(filterCriteria);
    }
  }
}
