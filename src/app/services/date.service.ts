import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/http/bakeryFull';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  availableFrom: Date;
  availableTo: Date;
  weekDays: string[] = ['sun', 'mo', 'tue', 'wed', 'thu', 'fri', 'sat'];
  private date: string;
  private dateSource: BehaviorSubject<string> = new BehaviorSubject<string>('');
  dateShared: Observable<string> = this.dateSource.asObservable();
  private selectedDate: Date;

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
    this.availableFrom = new Date(product.period_available_from);
    this.availableTo = new Date(product.period_available_to);
    if (product.quantity === 'unavailable') {
      return false;
    }
    // check availability by date
    if (this.date) {
      this.selectedDate = new Date(this.date);
      const selectedDay = this.selectedDate.getDay();
      // check days availability
      if (product.availability.includes(this.weekDays[selectedDay])) {
        // check product available from to
        return this.selectedDate > this.availableFrom && this.selectedDate < this.availableTo;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  mapProductPrice(product: Product): Product {
    // check if there is special_price and if true change price for the product
    if (this.date && product.special_price) {
      if (product.special_price_from && product.special_price_to) {
        if (this.selectedDate > new Date(product.special_price_from) && this.selectedDate < new Date(product.special_price_to)) {
          product.price = product.special_price;
        }
      } else {
        product.price = product.special_price;
      }
    }
    return product;
  }

  mapProductInCartAvailability(product: Product) {
    if (product.quantity === 'unavailable') {
      product.isUnavailable = true;
    }
    // check availability by date
    if (this.date) {
      this.selectedDate = new Date(this.date);
      const selectedDay = this.selectedDate.getDay();
      // check days availability
      if (product.availability.includes(this.weekDays[selectedDay])) {
        // check product available from to
        return this.selectedDate > this.availableFrom && this.selectedDate < this.availableTo;
      } else {
        product.isUnavailable = true;
      }
    } else {
      product.isUnavailable = fa;
    }
    
  }

}
