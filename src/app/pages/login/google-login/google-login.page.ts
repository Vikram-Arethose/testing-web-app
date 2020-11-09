import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../../../services/platform.service';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoggerService } from '../../../services/logger.service';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';

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
    private router: Router
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
      case 'md':
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

   async continue() {
    if (this.loginWith === 'email') {
      this.router.navigate(['/email-registration']);
      return;
    } else if (this.loginWith === 'md') {
       const googleUser = await Plugins.GoogleAuth.signIn(null) as any;
       this.logger.log('my user: ', googleUser);
     }

    this.router.navigate(['/location-setting']);
   }

}
