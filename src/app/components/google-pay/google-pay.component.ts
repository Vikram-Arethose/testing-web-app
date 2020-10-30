import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google-pay',
  templateUrl: './google-pay.component.html',
  styleUrls: ['./google-pay.component.scss'],
})
export class GooglePayComponent implements OnInit {

  constructor(
    public cartService: CartService,
    private modalController: ModalController,
    private router: Router
  ) { }

  ngOnInit() {}

  async onPay() {
    await this.modalController.dismiss();
    await this.router.navigate(['orders']);
    this.cartService.cart.length = 0;
  }

}
