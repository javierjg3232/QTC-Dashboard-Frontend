import { Component } from '@angular/core';
import { Chart, ChartType, registerables } from 'chart.js';

Chart.register(...registerables);
@Component({
  selector: 'app-gauge-chart',
  standalone: true,
  imports: [],
  templateUrl: './gauge-chart.component.html',
  styles: ``
})
export class GaugeChartComponent {
  public labels = [
    'My First Dataset',
    'My First Dataset',
    'My First Dataset',
    'My First Dataset',
    'My First Dataset',
    'My First Dataset',
  ];
  public data = {
    labels: this.labels,
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
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
    type: 'doughnut' as ChartType,
    data: this.data,
  };
  chart!: Chart;
  ngOnInit(): void {
    this.chart = new Chart('MyChart', this.config);
  } 
}
