import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-debit',
  templateUrl: './debit.component.html',
  styleUrls: ['./debit.component.scss'],
})
export class DebitComponent implements OnInit {

  debitForm: FormGroup;

  constructor(
    public cartServ: CartService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.debitForm = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      street: ['', [Validators.required]],
      postcode: ['', [Validators.required]],
      accountOwner: ['', [Validators.required]],
      iban: ['', [Validators.required]]
    });
  }

}
