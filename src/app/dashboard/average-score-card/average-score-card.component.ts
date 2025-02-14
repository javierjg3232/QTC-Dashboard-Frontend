import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-average-score-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './average-score-card.component.html',
  styles: ``,
})
export class AverageScoreCardComponent {
  @Input() scores: number[] = []; // Input array of survey scores

  // Compute average score
  get averageScore(): number {
    if (this.scores.length === 0) return 0;
    return this.scores.reduce((a, b) => a + b, 0) / this.scores.length;
  }
}
