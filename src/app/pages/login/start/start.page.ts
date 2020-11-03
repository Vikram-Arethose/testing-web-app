import { Component, OnInit } from '@angular/core';

import { PlatformService } from '../../../services/platform.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  android = this.platformService.android;
  otherOptOn = false;

  constructor(
    private platformService: PlatformService
  ) { }

  ngOnInit() {
  }

  onOtherOpt($event) {
    $event.stopPropagation();
    this.otherOptOn = true;
  }

  loginWith(loginWith: string) {
    this.platformService.loginWith = loginWith;
  }

  onContentTap() {
    if (this.otherOptOn) {
      this.otherOptOn = false;
    }
  }

}
