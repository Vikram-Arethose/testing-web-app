import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggerService } from '../../../services/logger.service';
import { OrderDetails } from '../../../models/http/orderDetails';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  dataToShow = 'current';
  header: string;
  // isConfirm: boolean;
  ordersToShow: OrderDetails[] = [];
  isSave: boolean;
  orderId: number;

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
    }
  }

  getDate(date: string) {
    return new Date(date);
  }

  segmentChanged(value: string) {
    this.dataToShow = value;
    console.log('Segment changed', value);
  }

  onSaveChange() {
    this.isSave = !this.isSave;
    if (this.isSave) {
    //  TODO: make saving order
    }
  }

}
