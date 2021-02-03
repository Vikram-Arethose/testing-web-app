import { Component, OnInit } from '@angular/core';
import { EmailRegister } from '../../../models/emailRegister';
import { LoggerService } from '../../../services/logger.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { AuthResponse } from '../../../models/authResponse';
import { LoginService } from '../../../services/login.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-email-registration',
  templateUrl: './email-registration.page.html',
  styleUrls: ['./email-registration.page.scss'],
})
export class EmailRegistrationPage implements OnInit {

  emailRegisterData: EmailRegister = new EmailRegister();
  isLogin: boolean;
  loginForm: FormGroup;
  step = 0;

  constructor(
    private httpService: HttpService,
    private formBuilder: FormBuilder,
    private location: Location,
    private logger: LoggerService,
    private loginServ: LoginService,
    private route: ActivatedRoute,
    private router: Router,
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
        password: ['', [Validators.required, Validators.minLength(8)]]
      });
    }
  }

  nextStep() {
    this.step++;
  }

  login() {
    this.logger.log('this.loginForm', this.loginForm.value);
    this.httpService.postData('/login', this.loginForm.value).subscribe(
      (res: AuthResponse) => {
        this.loginServ.handleRegisterRes(res);
        this.router.navigate(['location-setting']);
      },
      error => {
        this.loginForm.reset();
      });
  }

  register() {
    this.logger.log('emailRegister: ', this.emailRegisterData);
    this.httpService.postData('/register', this.emailRegisterData).subscribe(
      (res: AuthResponse) => {
        this.nextStep();
        this.loginServ.handleRegisterRes(res);
      },
      error => {
        this.step = 0;
        this.emailRegisterData = new EmailRegister();
      });
  }

  back() {
    if (this.step !== 0) {
      this.step--;
    } else {
      this.location.back();
    }
  }

}
