import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { AverageScoreCardComponent } from './average-score-card/average-score-card.component';
import { GaugeChartComponent } from "./gauge-chart/gauge-chart.component";
import { BarChartComponent } from "../bar-chart/bar-chart.component";
import { CsvUploadComponent } from "../csv-upload/csv-upload.component";
import { SurveyService } from '../shared/services/survey.service';
import { SurveyFilterService } from '../shared/services/survey-filter.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NavbarComponent,
    AverageScoreCardComponent,
    GaugeChartComponent,
    BarChartComponent,
  ],
  templateUrl: './dashboard.component.html',
  styles: ``,
})
export class DashboardComponent {
  isDashboardFiltered() {
    return this.surveyFilterService.isFiltered();
  }

  constructor(
    private router: Router,
    private surveyService: SurveyService,
    private surveyFilterService: SurveyFilterService
  ) {}

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/signin');
  }
}
