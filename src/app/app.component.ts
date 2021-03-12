import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { LoggerService } from './services/logger.service';
import { AccountService } from './services/account.service';
import { PushService } from './services/push.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public appPages = [
    {
      title: 'menu.inbox',
      url: '/inbox',
      src: './assets/icons/menu/mail-png.svg'
    },
    {
      title: 'menu.orders',
      url: '/orders',
      src: './assets/icons/menu/shopping-cart-png.svg'
    },
    {
      title: 'menu.favorites',
      url: '/favorites',
      src: './assets/icons/bakery/heart-outline.svg'
    },
    {
      title: 'menu.paymentMethods',
      url: '/payment-methods',
      src: './assets/icons/menu/credit-card-png.svg'
    },
    {
      title: 'menu.legal',
      url: '/legal',
      src: 'assets/icons/menu/check.svg',
      forGuest: true
    },
    {
      title: 'menu.maps',
      url: '/location-setting',
      src: 'assets/icons/menu/location.svg',
      // icon: 'location',
      forGuest: true
    },
    {
      title: 'menu.support',
      // url: '/',
      src: './assets/icons/menu/help-circle-png.svg'
    },
  ];
  public guest: boolean;
  public selectedIndex = 0;

  constructor(
    public accountServ: AccountService,
    public loginServ: LoginService,
    private logger: LoggerService,
    private menu: MenuController,
    private platform: Platform,
    private pushServ: PushService,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.translate.setDefaultLang('de');
      this.useLanguage();
      this.openFirstPage();
      this.splashScreen.hide();
      this.pushServ.setResetPushBadgeCount();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    this.accountServ.sharedGuest$.subscribe(res => this.guest = res);
  }

  useLanguage() {
    const language = localStorage.getItem('language');
    if (language) {
      this.translate.use(language);
    }
  }

  toAccount() {
    if (!this.guest) {
      this.router.navigate(['account']);
      this.menu.close();
    }
  }

  openFirstPage() {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['bakery-search']);
    } else {
      this.router.navigate(['start']);
    }
  }
}
