import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { BakeryFull, Product } from '../models/http/bakeryFull';
import { BakeryService } from './bakery.service';
import { OpeningHours, OpeningHoursDay } from '../models/http/homeBranch';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  availableFrom: Date;
  availableTo: Date;
  weekDays: string[] = ['sun', 'mo', 'tue', 'wed', 'thu', 'fri', 'sat'];
  weekDaysFull: string[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  private bakery: BakeryFull;
  private date: string;
  private selectedDate: Date;
  private dateSource: BehaviorSubject<string> = new BehaviorSubject<string>('');
  dateShared: Observable<string> = this.dateSource.asObservable();

  constructor(
    private logger: LoggerService,
    private bakeryServ: BakeryService
  ) {
    this.bakeryServ.bakery.subscribe((res: BakeryFull) => {
      this.bakery = res;
    });
  }

  getDatePickerMin() {
    const today = new Date();
    return today.toISOString();
  }

  getDatePickerMax(): string {
    const today = new Date();
    const currMonth = today.getMonth();
    today.setMonth(currMonth + 1);
    return today.toISOString();
  }

  changeDate(date: string) {
    this.logger.log('date: ', date);
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
    // check availability by date
    this.selectedDate = new Date(this.date);
    const selectedDay = this.selectedDate.getDay();
    // check days availability
    if (product.availability.includes(this.weekDays[selectedDay])) {
      // check product available from to
      if (this.selectedDate > this.availableFrom && this.selectedDate < this.availableTo) {
        product.isAvailable = true;
        return product;
      }
    }
    product.isAvailable = false;
    return product;
  }

  checkSelectedDate(date: Date): boolean {
    const today = new Date();
    const selectedDate = date;
    this.logger.log('selectedDate', selectedDate);
    const selectedDay = this.weekDaysFull[selectedDate.getDay()];
    const openHoursDay: OpeningHoursDay = this.bakery.branchDetails.opening_hours.default[selectedDay];
    if (openHoursDay.start && openHoursDay.end) {
      return selectedDate >= getDateByTime('start') && selectedDate <= getDateByTime('end');
    }
    return false;

    function getDateByTime(startOrEnd: string): Date {
      const newDate = new Date(date);
      newDate.setHours(parseInt(openHoursDay[startOrEnd].split(':')[0], 10),
        parseInt(openHoursDay.start.split(':')[1], 10));
      return newDate;
    }
  }

}
