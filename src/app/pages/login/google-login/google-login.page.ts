import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../../../services/platform.service';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoggerService } from '../../../services/logger.service';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.page.html',
  styleUrls: ['./google-login.page.scss'],
})
export class GoogleLoginPage implements OnInit {
  android = this.platformService.android;
  // btnRouterLink = '/location-setting';
  continueBtnLabel: string;
  isLogin: boolean;
  loginWith: string;
  myForm: FormGroup;


  constructor(
    private translate: TranslateService,
    private platformService: PlatformService,
    private formBuilder: FormBuilder,
    private logger: LoggerService,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.loginWith = this.platformService.loginWith;
    this.getBtnLabel();
    this.myForm = this.formBuilder.group({
      country: ['Germany'],
      checkbox1: [false, [Validators.required]],
      checkbox2: [false, [Validators.requiredTrue]],
    });
  }

  getBtnLabel() {
    switch (this.loginWith) {
      case 'google':
        this.continueBtnLabel = this.translate.instant('start.googleBtn');
        break;
      case 'ios':
        this.continueBtnLabel = this.translate.instant('googleLogin.createAccBtn');
        break;
      case 'email':
        this.continueBtnLabel = this.translate.instant('general.continue');
        break;
    }
  }

   continue() {
     this.router.navigate(['location-setting']);
   }

}
