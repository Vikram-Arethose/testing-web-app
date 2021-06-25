import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggerService } from '../../../services/logger.service';
import { OrderDetails } from '../../../models/http/orderDetails';
import { HttpService } from '../../../services/http.service';
import { GetOrdersRes } from '../../../models/http/getOrdersRes';
import { LocalStorageService } from '../../../services/local-storage.service';
import { DateService } from '../../../services/date.service';
import { ViewportScroller } from '@angular/common';
import { ModalService } from '../../../services/modal.service';
import { BakeryDetails, BakeryFull } from '../../../models/http/bakeryFull';
import { OpeningHours, OpeningHoursDay } from '../../../models/http/homeBranch';
import { BakeryService } from '../../../services/bakery.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  dateLocale: string;
  header: string;
  isSave: boolean;
  orderId: number;
  currentOrderId: any;
  ordersToShow: OrderDetails[] = [];
  segmentValue = 'current';
  isPush = true;
  private bakeryId: number;
  allWeek: boolean;
  bakeryAddress: string;
  bakeryDetails: BakeryDetails;
  bakeryInfoFull: string;
  bakeryInfoTrim: string;
  bakeryInfo: string;
  openingHours: [string, any][];
  private lastUsedPayment: string | undefined;

  private orders: GetOrdersRes;
  private timeZoneMinutesOffset: number = new Date().getTimezoneOffset();

  constructor(
    private dateServ: DateService,
    private httpServ: HttpService,
    private localStorServ: LocalStorageService,
    private logger: LoggerService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: ModalService,
    public bakeryServ: BakeryService,
    private  vps: ViewportScroller

  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state.orderId) {
        // this.isConfirm = this.router.getCurrentNavigation().extras.state.isConfirm;
        this.orderId = this.router.getCurrentNavigation().extras.state.orderId;
        this.isPush = false;
        this.logger.log('this.orderId in orders page: ', this.orderId);
      }
    });
  }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.dateLocale = this.localStorServ.getDateLocale();
    if (this.orderId) {
      this.httpServ.getOrderDetails(this.orderId).subscribe(res => {
        this.ordersToShow.push(res);
      });
    } else {
      this.getOrders();
    }
  }
  getOrders(event?) {
    this.httpServ.getOrders().subscribe((res: GetOrdersRes) => {
      this.orders = res;
      this.ordersToShow = this.orders[this.segmentValue];
      console.log('orders to show', this.ordersToShow);
      if (event) {
        event.target.complete();
      }
    });
  }

  doRefresh(event) {
    if (!this.orderId) {
      this.getOrders(event);
    }
  }

  getDate(date: string) {
    return this.dateServ.getIsoDateFromServerDate(date, this.timeZoneMinutesOffset);
  }

  segmentChanged(value: string) {
    this.segmentValue = value;
    this.ordersToShow = this.orders[value];
  }

  onSaveChange() {
    this.isSave = !this.isSave;
    if (this.isSave) {}
  }

  repeatOrder(order, bakeryId) {
    this.orderId = order;
    this.bakeryId = bakeryId;
    this.getBakeryData();
  }
  presentPickUpDateModal(isVerify?: boolean, repeatOrder?: boolean) {
    this.modalService.presentPickUpDateModal(false, true);
  }
  getBakeryData() {
    this.httpServ.getBranchDetail(this.bakeryId).subscribe((res: BakeryFull) => {
      this.bakeryServ.changeBakery(res);
      this.presentPickUpDateModal();
      this.allWeek = res.branchDetails.opening_hours_new.allWeek;
      this.bakeryDetails = res.branchDetails;
      this.bakeryAddress = `${res.branchDetails.street} ${res.branchDetails.number}, ${res.branchDetails.city}`;
      this.bakeryInfoFull = res.branchDetails.description;
      this.setOpeningHours(res.branchDetails.opening_hours_new);
      this.lastUsedPayment = res?.last_used_payment;
    });
  }

  setOpeningHours(openingHours: OpeningHours) {
    const openingHoursCopy = JSON.parse(JSON.stringify(openingHours.default));
    for (const day in openingHoursCopy) {
      if (openingHoursCopy.hasOwnProperty(day)) {
        if (openingHoursCopy[day]?.length === 3) {
          openingHoursCopy[day] = [];
        }
        openingHoursCopy[day] = openingHoursCopy[day].filter((item: OpeningHoursDay) => item.start && item.end);
      }
    }
    this.openingHours = Object.entries(openingHoursCopy);
  }
}
