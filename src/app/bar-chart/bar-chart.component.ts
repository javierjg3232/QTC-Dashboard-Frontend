import { Component } from '@angular/core';
import { Chart, ChartType, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [],
  templateUrl: './bar-chart.component.html',
  styles: ``
})
export class BarChartComponent {
  public labels = [
    '0-10',
    '11-20',
    '21-30',
  ];
  public data = {
    labels: this.labels,
    datasets: [
      {
        label: 'Average Score Breakdown',
        data: [5, 9, 8],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
      },
    ],
  };
  public config = {
    type: 'bar' as ChartType,
    data: this.data,
  };
  chart!: Chart;
  ngOnInit(): void {
    this.chart = new Chart('BarChart', this.config);
  }
}
