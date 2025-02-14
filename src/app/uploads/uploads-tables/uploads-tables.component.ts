import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SurveyService } from '../../shared/services/survey.service';

@Component({
  selector: 'app-uploads-tables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uploads-tables.component.html',
  styles: ``
})
export class UploadsTablesComponent {
  surveys: any[] = [];
  tableHeaders: string[] = [];

  constructor(private surveyService: SurveyService) {}

  ngOnInit(): void {
    this.fetchAllSurveys();
  }

  // Fetch all survey responses from backend
  fetchAllSurveys(): void {
    this.surveyService.getAllSurveysUploads().subscribe({
      next: (data) => {
        this.surveys = data;

        // Set dynamic headers based on the first survey data object
        if (data.length > 0) {
          this.tableHeaders = Object.keys(data[0]); // Get the keys (column names) dynamically
        }
      },
      error: (err) => {
        console.error('Error fetching survey uploads', err);
      }
    });
  }
  deleteFile(id: number) {
    if (confirm("Are you sure you want to delete this file?")) {
      this.surveyService.deleteFile(id).subscribe({
        next: () => {
          console.log(id);
          alert('File deleted successfully');
          // Refresh the list or update the UI
        },
        error: (err) => {
          console.log(id);
          console.error('Error deleting file:', err);
          alert('Failed to delete file');
        }
      });
    }
  }
}
