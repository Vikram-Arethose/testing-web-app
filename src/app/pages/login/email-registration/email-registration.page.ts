import { Component, OnInit } from '@angular/core';
import { EmailRegister } from '../../../models/emailRegister';
import { LoggerService } from '../../../services/logger.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-registration',
  templateUrl: './email-registration.page.html',
  styleUrls: ['./email-registration.page.scss'],
})
export class EmailRegistrationPage implements OnInit {

  emailRegister: EmailRegister = new EmailRegister();
  isLogin: boolean;
  loginForm: FormGroup;
  step = 0;

  constructor(
    private logger: LoggerService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.isLogin = this.router.getCurrentNavigation().extras.state.isLogin;
      }
    });
  }

  ngOnInit() {
    if (this.isLogin) {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    }
  }

  nextStep() {
    this.step++;
  }

  register() {
    this.logger.log('emailRegister: ', this.emailRegister);
    this.router.navigate(['location-setting']);
  }

  login() {
    this.logger.log('this.loginForm', this.loginForm.value);
    this.router.navigate(['bakery-search']);
  }

}
