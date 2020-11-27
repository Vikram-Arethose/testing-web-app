import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/http/bakeryFull';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  private date: string;
  private dateSource: BehaviorSubject<string> = new BehaviorSubject<string>('');
  dateShared: Observable<string> = this.dateSource.asObservable();

  constructor(
    private logger: LoggerService
  ) { }

  getDatePickerMin() {
    const timeRangeMin = 15;
    const today = new Date();
    const timeHourOffset = -(today.getTimezoneOffset() / 60);
    today.setHours(today.getHours() + timeHourOffset, today.getMinutes() + timeRangeMin);
    const datePickerMin = today.toISOString();
    return datePickerMin;
  }

  changeDate(date: string) {
    this.date = date;
    this.dateSource.next(date);
  }

  getProductAvailability(product: Product): boolean {
    const weekDays: string[] = ['sun', 'mo', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const availableFrom = new Date(product.period_available_from);
    const availableTo = new Date(product.period_available_to);
    if (this.date) {
      const selectedDate = new Date(this.date);
      const selectedDay: number = selectedDate.getDay();
      // check days availability
      if (product.availability.includes(weekDays[selectedDay])) {
        // check product available from to
        return selectedDate > availableFrom && selectedDate < availableTo;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

}
