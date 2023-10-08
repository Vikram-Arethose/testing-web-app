import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { DataForPayment } from '../../../models/http/dataForPayment';
import { LoggerService } from '../../../services/logger.service';
import { HttpService } from '../../../services/http.service';
import { DebitArgs } from '../../../models/http/payment/debitArgs';
import { ApiResponse } from '../../../models/http/apiResponse';
import { AlertService } from '../../../services/alert.service';
import { ModalController } from '@ionic/angular';
import { BakeryService } from '../../../services/bakery.service';
import { LoadingService } from '../../../services/loading.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-debit',
  templateUrl: './debit.component.html',
  styleUrls: ['./debit.component.scss'],
})
export class DebitComponent implements OnInit {

  @Input() dataForCreateStx: DataForPayment;
  form: UntypedFormGroup;

  constructor(
    public cartServ: CartService,
    private alertServ: AlertService,
    private bakeryServ: BakeryService,
    private fb: UntypedFormBuilder,
    private httpServ: HttpService,
    private loadingServ: LoadingService,
    private location: Location,
    private logger: LoggerService,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
   this.initDebitForm();
  }

  initDebitForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      street: ['', [Validators.required]],
      stNumber: ['', [Validators.required]],
      city: ['', [Validators.required]],
      postcode: ['', [Validators.required]],
      accountOwner: ['', [Validators.required]],
      iban: ['', [Validators.required]]
    });
  }

  buy() {
    this.loadingServ.presentLoading();
    const debitArgs: DebitArgs = this.dataForCreateStx;
    debitArgs.first_name = this.form.value.name;
    debitArgs.last_name = this.form.value.surname;
    debitArgs.street = this.form.value.street;
    debitArgs.st_number = this.form.value.stNumber;
    debitArgs.city = this.form.value.city;
    debitArgs.postal_code = this.form.value.postcode;
    debitArgs.account_owner = this.form.value.accountOwner;
    debitArgs.iban = this.form.value.iban;
    this.httpServ.debitPayment(debitArgs).subscribe((res: ApiResponse) => {
      this.loadingServ.dismiss();
      this.logger.log('http res: ', res);
      if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS' && res.data?.order_id) {
        this.bakeryServ.openConfirmOrder(res.data.order_id);
        this.cartServ.clearCart();
        this.modalController.dismiss();
      } else {
          this.alertServ.presentAlert();
      }
    });
  }

  back() {
    this.modalController.dismiss();
  }

}
