import { Component, OnInit } from '@angular/core';

import { PlatformService } from '../../../services/platform.service';
import { NavigationExtras, Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  android = this.platformService.android;
  otherOptOn = false;

  constructor(
    private accountServ: AccountService,
    private platformService: PlatformService,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
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
    localStorage.setItem('guest', 'true');
    this.accountServ.changeGuest(true);
  }

}
