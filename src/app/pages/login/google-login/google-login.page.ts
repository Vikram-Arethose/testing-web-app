import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../../../services/platform.service';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

import { LoggerService } from '../../../services/logger.service';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.page.html',
  styleUrls: ['./google-login.page.scss'],
})
export class GoogleLoginPage implements OnInit {
  android = this.platformService.android;
  continueBtnLabel: string;
  checkbox: boolean;
  isLogin: boolean;
  loginWith: string;
  myForm: FormGroup;


  constructor(
    private translate: TranslateService,
    private platformService: PlatformService,
    private formBuilder: FormBuilder,
    private logger: LoggerService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loginWith = this.platformService.loginWith;
    this.getBtnLabel();
    this.myForm = this.formBuilder.group({
      country: ['Germany'],
      checkbox1: [true, [Validators.requiredTrue]],
      checkbox2: [false, [Validators.requiredTrue]],
    });
    if (this.android) {
      this.myForm.patchValue({checkbox1: false});
    }
  }

  getBtnLabel() {
    switch (this.loginWith) {
      case 'google':
        this.continueBtnLabel = 'start.googleBtn';
        break;
      case 'ios':
        this.continueBtnLabel = 'googleLogin.createAccBtn';
        break;
      case 'email':
      case 'facebook':
        this.continueBtnLabel = 'general.continue';
        break;
    }
  }

   continue() {
     this.router.navigate(['location-setting']);
   }

  open(data: string, event) {
    const navigationExtras: NavigationExtras = {
      state: {
        data
      }
    };
    this.router.navigate([`${data}`], navigationExtras);
    event.stopPropagation();
  }

  toggleCheckbox() {
    this.checkbox = !this.checkbox;
  }

}
