import { Component, OnInit } from '@angular/core';

import { PlatformService } from '../../../services/platform.service';
import { NavigationExtras, Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  android = this.platformService.android;
  otherOptOn = false;

  constructor(
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
    if (loginWith === 'ios') {
      this.loginService.openAppleSignIn();
    }
    if (isLogin) {
      const navigationExtras: NavigationExtras = {
        state: { isLogin }
      };
      // this.router.navigate(['email-registration'], navigationExtras);
    }
  }

  facebookSignIn() {
    this.loginService.facebookSignIn();
  }

  onContentTap() {
    if (this.otherOptOn) {
      this.otherOptOn = false;
    }
  }

}
