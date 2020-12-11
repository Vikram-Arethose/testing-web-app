import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataForPayment } from '../../../models/http/dataForPayment';
import { LoggerService } from '../../../services/logger.service';
import { HttpService } from '../../../services/http.service';
import { DebitArgs } from '../../../models/http/payment/debitArgs';
import { ApiResponse } from '../../../models/http/apiResponse';
import { NavigationExtras, Router } from '@angular/router';
import { AlertService } from '../../../services/alert.service';
import { ModalController } from '@ionic/angular';
import { BakeryService } from '../../../services/bakery.service';

@Component({
  selector: 'app-debit',
  templateUrl: './debit.component.html',
  styleUrls: ['./debit.component.scss'],
})
export class DebitComponent implements OnInit {

  @Input() dataForCreateStx: DataForPayment;
  form: FormGroup;
  isLoading: boolean;

  constructor(
    public cartServ: CartService,
    private alertServ: AlertService,
    private bakeryServ: BakeryService,
    private fb: FormBuilder,
    private logger: LoggerService,
    private httpServ: HttpService,
    private router: Router,
    private modalController: ModalController
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
    this.isLoading = true;
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
      this.isLoading = false;
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

}
