import { Component, OnInit } from '@angular/core';
import { EmailRegister } from '../../../models/emailRegister';
import { LoggerService } from '../../../services/logger.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { AuthResponse } from '../../../models/authResponse';
import { LoginService } from '../../../services/login.service';
import { Location } from '@angular/common';
import { ApiResponse } from '../../../models/http/apiResponse';

@Component({
  selector: 'app-email-registration',
  templateUrl: './email-registration.page.html',
  styleUrls: ['./email-registration.page.scss'],
})
export class EmailRegistrationPage implements OnInit {

  emailRegisterData: EmailRegister = new EmailRegister();
  isLogin: boolean;
  loginForm: UntypedFormGroup;
  step = 0;

  constructor(
    private httpService: HttpService,
    private formBuilder: UntypedFormBuilder,
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
    // if (this.isLogin) {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      });
    // }
  }

  nextStep() {
    if (this.step === 0) {
      this.httpService.checkEmail(this.emailRegisterData.email).subscribe((res: boolean) => {
        if (res) {
          this.step = -1;
        } else {
          this.step++;
        }
      });
    } else {
      this.step++;
    }
  }

  openLogin() {
    this.step = null;
    this.isLogin = true;
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
    if (this.step > 0) {
      this.step--;
    } else if (this.step === 0 || this.isLogin) {
      this.location.back();
    } else if (this.step === -1) {
      this.step = 0;
      this.emailRegisterData = new EmailRegister();
    }
  }
  
  goToChangePassword() {
    this.router.navigate(['email-registration/change-password']);
  }
}
