import { Component, OnInit } from '@angular/core';
import { DateService } from '../../../../services/date.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {

  constructor(
    public dateService: DateService
  ) { }

  ngOnInit() {
  }

}
