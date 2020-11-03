import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-registration',
  templateUrl: './email-registration.page.html',
  styleUrls: ['./email-registration.page.scss'],
})
export class EmailRegistrationPage implements OnInit {
  counter = 0;
  email: string;
  name: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  counterIncrease() {
    this.counter++;
  }

}
