import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyFilterService {
  private filterCriteriaSubject = new BehaviorSubject<any>(null);
  filterCriteria$ = this.filterCriteriaSubject.asObservable();

  updateFilterCriteria(criteria: any) {
    this.filterCriteriaSubject.next(criteria);
  }

  isFiltered() {
    return this.filterCriteriaSubject.value !== null;
  }
}
