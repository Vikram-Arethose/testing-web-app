import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../../../services/platform.service';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.page.html',
  styleUrls: ['./google-login.page.scss'],
})
export class GoogleLoginPage implements OnInit {
  android = this.platformService.android;

  constructor(
    private platformService: PlatformService
  ) { }

  ngOnInit() {
  }

}
