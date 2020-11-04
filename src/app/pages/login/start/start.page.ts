import { Component, OnInit } from '@angular/core';

import { PlatformService } from '../../../services/platform.service';
import { NavigationExtras, Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit() {
  }

  onOtherOpt($event) {
    $event.stopPropagation();
    this.otherOptOn = true;
  }

  loginWith(loginWith: string, isLogin?: boolean) {
    this.platformService.loginWith = loginWith;
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

}
