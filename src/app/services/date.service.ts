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
  specificTime: any;
  private timeHourOffset: number;
  fullDay = 86400;
  orderTime: number;
  preOrderTime: number;

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

  getDaysAvailability(product: Product): boolean {
    // check days availability
    const selectedDay = this.selectedDate.getDay();
    if (product.availability_new.some(item => item.day === this.weekDays[selectedDay])) {
      // check product available from to
      if (product?.period_available_from && product?.period_available_to) {
        this.availableFrom = this.getLocalFromServerDate(product.period_available_from);
        this.availableTo = this.getLocalFromServerDate(product.period_available_to);
        return this.selectedDate >= this.availableFrom && this.selectedDate <= this.availableTo;
      }
    } else {
      return false;
    }
  }
  checkSpecificTime(time) {
    if (time >= this.specificTime) {
      return true;
    }
    if (time < this.specificTime ) {
      return false;
    }
  }
  getProductAvailability(product: Product): boolean {
    this.specificTime = product.specific_time;
    if (product.quantity === 'unavailable') {
      return false;
    }
    // check availability by date
    if (this.date) {
      this.selectedDate = new Date(this.date);
      this.timeHourOffset = -this.selectedDate.getTimezoneOffset() * 60 ;
      // check pre order period and pre_order_time
      const minPreOrderDate = new Date();
      this.orderTime = (this.selectedDate.getTime() - Math.floor(Date.now() / 1000 / 60 / 60 / 24 ) * 24 * 60 * 60 * 1000 ) / 1000 + this.timeHourOffset;
      minPreOrderDate.setSeconds(product.pre_order_period);
      if (this.specificTime === 0) {
        
        if (product.pre_order_time > this.fullDay) {
          this.preOrderTime = product.pre_order_time - this.fullDay;
        }
        if (product.pre_order_time <= this.fullDay) {
          this.preOrderTime = product.pre_order_time;
        }
        if (this.orderTime > this.preOrderTime  ) {
          return false;
        }
        if (this.orderTime < this.preOrderTime ) {
          return true;
        }
        if (this.preOrderTime === this.fullDay) {
          if (minPreOrderDate > this.selectedDate ) {
            return false;
          }else {
            return true;
          }
        }
      }

      if (this.specificTime > 0) {
        if (this.orderTime < this.fullDay) {
          return this.checkSpecificTime(this.orderTime);
        }
        if (this.orderTime > this.fullDay) {
          const notTodayOrderTime = this.orderTime - this.fullDay * Math.trunc(this.orderTime / this.fullDay) ;
          return this.checkSpecificTime(notTodayOrderTime);
        }
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

  getOpeningHoursByDate(date: Date): OpeningHoursDay[] {
    const selectedDay = this.weekDaysFull[date.getDay()];
    let openHoursDayArr: OpeningHoursDay[] = this.bakery.branchDetails.opening_hours_new.default[selectedDay];
    if (openHoursDayArr.length === 3) {
      return [];
    }
    openHoursDayArr = openHoursDayArr.filter(item => item.start && item.end);
    return openHoursDayArr;
  }

  getDateByTime(date: Date, startOrEnd: string, openingHours: OpeningHoursDay): Date {
    const newDate = new Date(date);
    newDate.setHours(parseInt(openingHours[startOrEnd].split(':')[0], 10),
      parseInt(openingHours.start.split(':')[1], 10));
    return newDate;
  }

  checkAllWeek(): boolean {
    if (this.bakery.branchDetails.opening_hours_new.allWeek) {
      return true;
    }
  }

  checkSelectedDate(date: Date): boolean {
    if (this.checkAllWeek()) {
      return true;
    }
    const openingHoursArr: OpeningHoursDay[] = this.getOpeningHoursByDate(date);
    return openingHoursArr.some(item => date >= this.getDateByTime(date, 'start', item) &&
        date <= this.getDateByTime(date, 'end', item) && date > new Date());
  }

  getIsoDateFromServerDate(stringDate: string, timeZoneMinutesOffset: number): string {
    return moment(stringDate).add(-timeZoneMinutesOffset, 'minutes').format();
  }

  getLocalFromServerDate(serverDate: string): Date {
    return moment.utc(serverDate).local().toDate();
  }

  getDefaultMinOrderDate(): Date {
    const minColDateMom = moment().add(45 + 15 - moment().minutes() % 15, 'minutes').startOf('minute');
    let minColDate: Date;
    if (this.checkAllWeek()) {
      return minColDateMom.toDate();
    }
    let openingHoursArr: OpeningHoursDay[] = this.getOpeningHoursByDate(minColDateMom.toDate());
    for (let i = 0; i < 7; i++) {
      // tslint:disable-next-line:max-line-length
      if (openingHoursArr.length !== 0 && (minColDateMom.toDate() <=
        this.getDateByTime(minColDateMom.toDate(), 'end', openingHoursArr[openingHoursArr.length - 1]))) {
        break;
      } else {
        openingHoursArr = this.getOpeningHoursByDate(minColDateMom.add(1, 'day').startOf('day').toDate());
      }
    }
    if (this.checkSelectedDate(minColDateMom.toDate())) {
      minColDate = minColDateMom.toDate();
    } else {
      // tslint:disable-next-line:max-line-length
      const rightOpeningTimeIndex = openingHoursArr.findIndex(item => {
        return minColDateMom.toDate() < this.getDateByTime(minColDateMom.toDate(), 'start', item);
      });
      if (rightOpeningTimeIndex !== -1) {
        minColDate = this.getDateByTime(minColDateMom.toDate(), 'start', openingHoursArr[rightOpeningTimeIndex]);
      }
    }
    this.logger.log('minColDate: ', minColDate);
    return minColDate;
  }

}
