import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../shared/services/survey.service';
import { SurveyFilterService } from '../../shared/services/survey-filter.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-survey-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './survey-table.component.html',
  styles: ``
})
export class SurveyTableComponent implements OnInit{
  surveys: any[] = [];
  tableHeaders: string[] = [];
  
  constructor(
    private surveyService: SurveyService,
    private surveyFilterService: SurveyFilterService
  ) {}

  ngOnInit(): void {
    // Listen for filter updates
    this.surveyFilterService.filterCriteria$.subscribe((criteria) => {
      if (criteria) {
        this.fetchFilteredSurveys(criteria);
      }
    });
  }

  fetchFilteredSurveys(criteria: any) {
    this.surveyService.getFilteredSurveys(criteria).subscribe({
      next: (data) => {
        this.surveys = data;

        // Set dynamic headers based on the first survey data object
        if (data.length > 0) {
          this.tableHeaders = Object.keys(data[0]); // Get the keys (column names) dynamically
        }
      },
      error: (err) => {
        console.error('Error fetching filtered surveys', err);
      }
    });
  }
}
