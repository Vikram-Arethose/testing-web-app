import { Component, OnInit } from '@angular/core';
import { EmailRegister } from '../../../models/emailRegister';
import { LoggerService } from '../../../services/logger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-registration',
  templateUrl: './email-registration.page.html',
  styleUrls: ['./email-registration.page.scss'],
})
export class EmailRegistrationPage implements OnInit {
  step = 0;
  emailRegister: EmailRegister = new EmailRegister();

  constructor(
    private logger: LoggerService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  nextStep() {
    this.step++;
  }

  onContinue() {
    this.logger.log('emailRegister: ', this.emailRegister);
    this.router.navigate(['location-setting']);
  }

}
