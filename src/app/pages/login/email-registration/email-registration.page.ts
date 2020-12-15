import { Component, OnInit } from '@angular/core';
import { EmailRegister } from '../../../models/emailRegister';
import { LoggerService } from '../../../services/logger.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { LocalStorageService } from '../../../services/local-storage.service';
import { AuthResponse } from '../../../models/authResponse';
import { PushService } from '../../../services/push.service';

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
    private logger: LoggerService,
    private route: ActivatedRoute,
    private router: Router,
    private pushServ: PushService
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

  register() {
    this.logger.log('emailRegister: ', this.emailRegisterData);
    this.httpService.postData('/register', this.emailRegisterData).subscribe(
      (res: AuthResponse)  => {
      this.logger.log('server res: ', res);
      this.nextStep();
      localStorage.setItem('token', res.access_token);
      this.pushServ.initPush();
    },
      error => {
        this.step = 0;
        this.emailRegisterData = new EmailRegister();
      });

  }

  login() {
    this.logger.log('this.loginForm', this.loginForm.value);
    this.httpService.postData('/login', this.loginForm.value).subscribe(
      (res: AuthResponse) => {
        this.logger.log('server res: ', res);
        localStorage.setItem('token', res.access_token);
        this.router.navigate(['location-setting']);
        this.pushServ.initPush();
      },
      error => {
        this.loginForm.reset();
      });
  }

}
