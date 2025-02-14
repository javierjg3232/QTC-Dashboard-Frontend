import { CommonModule } from '@angular/common';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { finalize } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-csv-upload',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './csv-upload.component.html',
  styles: ``
})
export class CsvUploadComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;

  selectedFile: File | null = null;
  uploading = false;
  progress = 0;
  message = '';
  isError = false;
  surveyCategory = ''; // Stores the selected survey category
  surveyDate: string = ''; // Stores the selected survey date

  constructor(private authService: AuthService) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file && file.type === 'text/csv') {
      this.selectedFile = file;
      this.message = '';
      this.isError = false;
    } else {
      this.selectedFile = null;
      this.message = 'Please select a valid CSV file';
      this.isError = true;
    }
  }

  uploadFile() {
    if (!this.selectedFile || !this.surveyCategory || !this.surveyDate) {
      this.message = "Please fill all fields and select a file.";
      this.isError = true;
      return;
    }
  
    this.uploading = true;
    this.progress = 0;
    this.message = '';
  
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('category', this.surveyCategory);
    formData.append('surveyDate', this.surveyDate.toString());
  
    this.authService.uploadcsv(formData).subscribe({
      next: (event: any) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event.type === HttpEventType.Response) {
          this.message = 'Upload successful!';
        }
      },
      error: (error) => {
        this.message = 'Upload failed: ' + error.message;
        this.isError = true;
      }
    });
  }
}

