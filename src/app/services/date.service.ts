import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import * as moment from 'moment';

import { LoggerService } from './logger.service';
import { BakeryFull, Product } from '../models/http/bakeryFull';
import { BakeryService } from './bakery.service';
import { OpeningHoursDay } from '../models/http/homeBranch';

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

  getDateFromStr(dateStr?: string) {
    let date: Date;
    if (dateStr) {
      date = new Date(dateStr);
    } else {
      date = new Date();
    }
    return new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  }

  getProductAvailability(product: Product): boolean {
    if (product.quantity === 'unavailable') {
      return false;
    }
    // check availability by date
    if (this.date) {
      this.selectedDate = new Date(this.date);
      // check pre order period
      const minPreOrderDate = new Date();
      minPreOrderDate.setSeconds(product.pre_order_period);
      if (minPreOrderDate > this.selectedDate ) {
        return false;
      }
      // check days availability
      const selectedDay = this.selectedDate.getDay();
      if (product.availability.includes(this.weekDays[selectedDay])) {
        // check product available from to
        this.availableFrom = this.getDateFromStr(product.period_available_from.split(' ')[0]);
        this.availableTo = this.getDateFromStr(product.period_available_to.split(' ')[0]);
        return this.selectedDate > this.availableFrom && this.selectedDate < this.availableTo;
      }
      else {
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

  getIsoDateFromDateStr(stringDate: string): string {
    return moment(stringDate).format();
  }

}
