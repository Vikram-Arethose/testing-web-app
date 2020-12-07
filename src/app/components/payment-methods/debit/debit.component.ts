import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-debit',
  templateUrl: './debit.component.html',
  styleUrls: ['./debit.component.scss'],
})
export class DebitComponent implements OnInit {

  constructor(
    public cartServ: CartService
  ) { }

  ngOnInit() {}

}
