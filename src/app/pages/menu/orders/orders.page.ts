import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggerService } from '../../../services/logger.service';
import { OrderDetails } from '../../../models/http/orderDetails';
import { HttpService } from '../../../services/http.service';
import { GetOrdersRes } from '../../../models/http/getOrdersRes';
import { LocalStorageService } from '../../../services/local-storage.service';
import { DateService } from '../../../services/date.service';

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
  ordersToShow: OrderDetails[] = [];
  segmentValue = 'current';

  private orders: GetOrdersRes;
  private timeZoneMinutesOffset: number = new Date().getTimezoneOffset();

  constructor(
    private dateServ: DateService,
    private httpServ: HttpService,
    private localStorServ: LocalStorageService,
    private logger: LoggerService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        // this.isConfirm = this.router.getCurrentNavigation().extras.state.isConfirm;
        this.orderId = this.router.getCurrentNavigation().extras.state.orderId;
        this.logger.log('this.orderId in orders page: ', this.orderId);
      }
    });
  }

  ngOnInit() {
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
    if (this.isSave) {
    // TODO: make saving order
    }
  }

}
