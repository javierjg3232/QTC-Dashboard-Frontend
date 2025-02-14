import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { BarChartComponent } from "../bar-chart/bar-chart.component";
import { CsvUploadComponent } from "../csv-upload/csv-upload.component";
import { SurveyTableComponent } from "./survey-table/survey-table.component";

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [NavbarComponent, SurveyTableComponent],
  templateUrl: './tables.component.html',
  styles: ``
})
export class TablesComponent {

}
