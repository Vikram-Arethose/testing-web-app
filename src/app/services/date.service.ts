import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  date: string;

  constructor(
    private logger: LoggerService
  ) { }

  getDatePickerMin() {
    const timeRangeMin = 15;
    const today = new Date();
    const timeHourOffset = -(today.getTimezoneOffset() / 60);
    today.setHours(today.getHours() + timeHourOffset, today.getMinutes() + timeRangeMin);
    const datePickerMin = today.toISOString();
    this.logger.log('datePickerMin', datePickerMin);
    return datePickerMin;
  }

}
