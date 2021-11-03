import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import * as moment from 'moment';

import { LoggerService } from './logger.service';
import { BakeryFull, Product } from '../models/http/bakeryFull';
import { BakeryService } from './bakery.service';
import { OpeningHoursDay } from '../models/http/homeBranch';
import { CartService } from './cart.service';

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
  preOrderTime: any;
  private timeHourOffset: number;
  fullDay = 86400;
  orderTime: number;
  userTime: any;

  constructor(
    private logger: LoggerService,
    private bakeryServ: BakeryService,
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
  checkPreOrderTime(time) {
    if (time <= this.preOrderTime ) {
      return true;
    }
    if (time > this.preOrderTime ) {
      return false;
    }
  }

  datesAreOnSameDay(today, selected) {
    return today.getFullYear() === selected.getFullYear() &&
           today.getMonth() === selected.getMonth() &&
           today.getDate() === selected.getDate();
  }

  getProductAvailability(product: Product): boolean {
    if (product.sold_out_products.length > 0) {
      const soldOutDate = product.sold_out_products[0].sold_out_date;
      if (moment(this.date) > moment(soldOutDate)) {
        return true;
      }else {
        return false;
      }
    }
    this.specificTime = product.specific_time;
    this.preOrderTime = product.pre_order_time;
    if (product.quantity === 'unavailable') {
      return false;
    }
    // check availability by date
    if (this.date) {
      const currentTime =  moment();
      const startOfDay = moment().startOf('day');
      this.userTime = currentTime.diff(startOfDay, 'minutes') * 60;
      this.selectedDate = new Date(this.date);
      this.timeHourOffset = -this.selectedDate.getTimezoneOffset() * 60 ;
      // check pre order period and pre_order_time
      const minPreOrderDate = new Date();
      this.orderTime = (this.selectedDate.getTime() - Math.floor(Date.now() / 1000 / 60 / 60 / 24 ) * 24 * 60 * 60 * 1000 ) / 1000 + this.timeHourOffset;
      minPreOrderDate.setSeconds(product.pre_order_period);
      
      if (!product.pre_order_time || (product.pre_order_time && product.pre_order_time === 86400)) {
        if (minPreOrderDate > this.selectedDate ) {
          return false;
        }
      }else {
        const zeroStartTime = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate(), 0, 0, 0, 0);
        zeroStartTime.setSeconds(product.pre_order_time);
        if (this.datesAreOnSameDay(new Date(), this.selectedDate) && this.selectedDate > zeroStartTime) {
          return false;
        }
      }
      if (this.specificTime === 0) {
        if (this.orderTime < this.fullDay) {
          if (this.userTime > product.pre_order_time) {
            return false;
          }
          if (product.pre_order_time > this.fullDay) {
            return false;
          }
        }
        if (product.pre_order_time === this.fullDay) {
          if (minPreOrderDate > this.selectedDate ) {
            return false;
          }
        }
        if (this.orderTime > this.fullDay && this.orderTime < this.fullDay * 2 && product.pre_order_time > this.fullDay) {
          if (this.userTime > product.pre_order_time - this.fullDay) {
            return false;
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
  getDateFromPicker() {
    return this.date;
  }
  getOrderDateInSeconds() {
    const hourOffset = -new Date(this.date).getTimezoneOffset() * 60 ;
    return (new Date(this.date).getTime() - Math.floor(Date.now() / 1000 / 60 / 60 / 24 ) * 24 * 60 * 60 * 1000 ) / 1000 + hourOffset;
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

  getSpecialDateByDate(date: Date): boolean {
    const myDate = moment(date).format('DD-MM-YYYY');
    const findDay: any = this.bakery.branchDetails.opening_hours_new.specialDate.find((item: any) => item.date === myDate);
    // if (findDay !== undefined && !findDay.closed){
    //   return true;
    // }
    return findDay;
  }

  checkSelectedDate(date: Date): boolean {
    const specDate: any = this.getSpecialDateByDate(date);
    // // tslint:disable-next-line:max-line-length
    if (specDate !== undefined) {
      if (!specDate.closed){
        const openingH: any = [{start: specDate.start_am, end: specDate.end_am}, {start: specDate.start_pm, end: specDate.end_pm}];
        return openingH.some(item => date >= this.getDateByTime(date, 'start', item) &&
          date <= this.getDateByTime(date, 'end', item) && date > new Date());
      }
      return false;
    }

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
    let selDate: any;
    let specDate;
    for (let i = 0; i < 7; i++) {
      // tslint:disable-next-line:max-line-length
      specDate = this.getSpecialDateByDate(minColDateMom.toDate());

      if (specDate !== undefined && !specDate.closed){
        selDate = minColDateMom.toDate();
        break;
      }

      // tslint:disable-next-line:max-line-length
      if (((specDate !== undefined && !specDate.closed) || specDate === undefined ) && openingHoursArr.length !== 0 && (minColDateMom.toDate() <= this.getDateByTime(minColDateMom.toDate(), 'end', openingHoursArr[openingHoursArr.length - 1]))
      ) {
          break;
      } else {
        openingHoursArr = this.getOpeningHoursByDate(minColDateMom.add(1, 'day').startOf('day').toDate());
      }
    }
    if (specDate !== undefined && !specDate.closed){
      selDate.setHours(parseInt((specDate.start_am).split(':')[0], 10),
        parseInt((specDate.start_am).split(':')[1], 10));
      minColDate = selDate;
    } else if (this.checkSelectedDate(minColDateMom.toDate())) {
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
