import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiResponse } from '../../../models/http/apiResponse';
import { HttpService } from '../../../services/http.service';
import { BakeryService } from '../../../services/bakery.service';
import { DateService } from '../../../services/date.service';
import { LoggerService } from '../../../services/logger.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-other-options',
  templateUrl: './other-options.component.html',
  styleUrls: ['./other-options.component.scss'],
})
export class OtherOptionsComponent implements OnInit {

  isLoading: boolean;

  constructor(
    private httpServ: HttpService,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  makePaypalPayment() {
    this.isLoading = true;
    this.httpServ.iabPayment('/payment/paypal').subscribe((res: boolean) => this.isLoading = false);
  }
}
