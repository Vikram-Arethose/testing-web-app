import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-registration',
  templateUrl: './email-registration.page.html',
  styleUrls: ['./email-registration.page.scss'],
})
export class EmailRegistrationPage implements OnInit {
  private counter = 0;
  private email: string;
  private name: string;
  private password: string;

  constructor() { }

  ngOnInit() {
  }

  counterIncrease() {
    this.counter++;
  }

}
