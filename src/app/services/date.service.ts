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

  getDaysAvailability(product: Product): boolean {
    // check days availability
    const selectedDay = this.selectedDate.getDay();
    if (product.availability.includes(this.weekDays[selectedDay])) {
      // check product available from to
      if (product?.period_available_from && product?.period_available_to) {
        this.availableFrom = this.getDateFromStr(product.period_available_from.split(' ')[0]);
        this.availableTo = this.getDateFromStr(product.period_available_to.split(' ')[0]);
        return this.selectedDate > this.availableFrom && this.selectedDate < this.availableTo;
      }
    } else {
      return false;
    }
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
      return this.getDaysAvailability(product);
    } else {
      return true;
    }
  }

  mapProductPrice(product: Product): Product {
    // check if there is special_price and if true change price for the product
    if (this.date && product.special_price) {
      if (product.special_price_from && product.special_price_to) {
        if (this.selectedDate > new Date(product.special_price_from) && this.selectedDate < new Date(product.special_price_to)) {
          product.isSpecialPrice = true;
        }
      } else {
        product.isSpecialPrice = true;
      }
    }
    return product;
  }

  mapProductInCartAvailability(product: Product) {
    this.selectedDate = new Date(this.date);
    if (this.getDaysAvailability(product)) {
      product.isAvailable = true;
    } else {
      product.isAvailable = false;
    }
    return product;
  }

  getOpeningHoursByDate(date: Date): OpeningHoursDay {
    const selectedDay = this.weekDaysFull[date.getDay()];
    const openHoursDay: OpeningHoursDay = this.bakery.branchDetails.opening_hours.default[selectedDay];
    if (openHoursDay.start && openHoursDay.end) {
      return openHoursDay;
    }
  }

  getDateByTime(date: Date, startOrEnd: string, openingHours: OpeningHoursDay): Date {
    const newDate = new Date(date);
    newDate.setHours(parseInt(openingHours[startOrEnd].split(':')[0], 10),
      parseInt(openingHours.start.split(':')[1], 10));
    return newDate;
  }

  checkSelectedDate(date: Date): boolean {
    const openingHours: OpeningHoursDay = this.getOpeningHoursByDate(date);
    if (openingHours) {
      return date >= this.getDateByTime(date, 'start', openingHours) &&
        date <= this.getDateByTime(date, 'end', openingHours) && date > new Date();
    }
    return false;
  }

  getIsoDateFromServerDate(stringDate: string, timeZoneMinutesOffset: number): string {
    return moment(stringDate).add(-timeZoneMinutesOffset, 'minutes').format();
  }

  getDefaultMinOrderDate() {
    const minColDateMom = moment().add(45 + 15 - moment().minutes() % 15, 'minutes').startOf('minute');
    let minColDate: Date;
    let openingHours = this.getOpeningHoursByDate(minColDateMom.toDate());
    while (1) {
      if (openingHours && (minColDateMom.toDate() <= this.getDateByTime(minColDateMom.toDate(), 'end', openingHours))) {
        break;
      } else {
        openingHours = this.getOpeningHoursByDate(minColDateMom.add(1, 'day').startOf('day').toDate());
      }
    }
    if (this.checkSelectedDate(minColDateMom.toDate())) {
      minColDate = minColDateMom.toDate();
    } else if (minColDateMom.toDate() < this.getDateByTime(minColDateMom.toDate(), 'start', openingHours)) {
      minColDate = this.getDateByTime(minColDateMom.toDate(), 'start', openingHours);
    }
    this.logger.log('minColDate: ', minColDate);
    return minColDate;
  }

}
