import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggerService } from '../../../services/logger.service';
import { OrderDetails } from '../../../models/http/orderDetails';
import { HttpService } from '../../../services/http.service';
import { GetOrdersRes } from '../../../models/http/getOrdersRes';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  segmentValue = 'current';
  header: string;
  // isConfirm: boolean;
  ordersToShow: OrderDetails[] = [];
  isSave: boolean;
  orderId: number;
  private orders: GetOrdersRes;

  constructor(
    private httpServ: HttpService,
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
    this.getOrders(event);
  }

  getDate(date: string) {
    return new Date(date);
  }

  segmentChanged(value: string) {
    this.segmentValue = value;
    this.ordersToShow = this.orders[value];
    // this.dataToShow = value;
    // console.log('Segment changed', value);
  }

  onSaveChange() {
    this.isSave = !this.isSave;
    if (this.isSave) {
    //  TODO: make saving order
    }
  }

}
