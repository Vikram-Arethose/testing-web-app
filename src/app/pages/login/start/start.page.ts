import { Component, OnInit } from '@angular/core';

import { PlatformService } from '../../../services/platform.service';
import { NavigationExtras, Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { AccountService } from '../../../services/account.service';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Market } from '@ionic-native/market/ngx';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  android = this.platformService.android;
  otherOptOn = false;
  version: string;
  constructor(
    private accountServ: AccountService,
    private platformService: PlatformService,
    private router: Router,
    private loginService: LoginService,
    public alertController: AlertController,
  ) {}
  ngOnInit() {
    this.version = localStorage.getItem('appVersion');
  }
  
  onOtherOpt($event) {
    $event.stopPropagation();
    this.otherOptOn = true;
  }

  loginWith(loginWith: string, isLogin?: boolean) {
    this.platformService.loginWith = loginWith;
    switch (loginWith) {
      case 'ios':
        this.loginService.openAppleSignIn();
        break;
      case 'google':
        this.loginService.googleLogin();
        break;
      case 'facebook':
        this.loginService.facebookSignIn();
        break;
    }
    if (isLogin) {
      const navigationExtras: NavigationExtras = {
        state: { isLogin }
      };
      this.router.navigate(['email-registration'], navigationExtras);
    }
  }

  onContentTap() {
    if (this.otherOptOn) {
      this.otherOptOn = false;
    }
  }

  guestLogin() {
    this.router.navigate(['/location-setting']);
    this.accountServ.changeGuest(true);
  }
  
}
