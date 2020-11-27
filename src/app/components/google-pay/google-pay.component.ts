import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartService } from '../../services/cart.service';
import { NavigationExtras, Router } from '@angular/router';
import { DateService } from '../../services/date.service';

@Component({
  selector: 'app-google-pay',
  templateUrl: './google-pay.component.html',
  styleUrls: ['./google-pay.component.scss'],
})
export class GooglePayComponent implements OnInit {

  constructor(
    public cartService: CartService,
    private modalController: ModalController,
    private router: Router,
    private dateService: DateService
  ) { }

  ngOnInit() {}

  async onPay() {
    await this.modalController.dismiss();
    const navigationExtras: NavigationExtras = {
      state: {
        isConfirm: true
      }
    };
    await this.router.navigate(['orders'], navigationExtras);
    this.cartService.clearCart();
    this.dateService.changeDate('');
  }

}
