import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private baseURL = 'http://localhost:5007/api/survey';

  constructor(private http: HttpClient) {}

  // Method to fetch survey types from backend
  getSurveyTypes(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseURL}/survey-types`);
  }
  // Method to fetch filtered survey csv data from backend
  getFilteredSurveys(filterCriteria: any) {
    return this.http.post<any[]>(`${this.baseURL}/filter`, filterCriteria);
  }
  // Method to fetch survey uploads from backend
  getAllSurveysUploads(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/all-uploads`);
  }
  //Method to delete file from the backend server
  deleteFile(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/delete/${id}`);
  }
}
