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
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AlertController } from '@ionic/angular';
import { CheckVersion } from './services/checkVersion.service';


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
  ];
  public guest: boolean;
  public selectedIndex = 0;
  browser: any;
  userVersion: any;
  appLastVersion: any;
  versionResponse: any;

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
    private iab: InAppBrowser,
    public alertController: AlertController,
    public checkVersion: CheckVersion,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.translate.setDefaultLang('de');
      this.useLanguage();
      this.openFirstPage();
      // this.changePasswordCheck();
      this.splashScreen.hide();
      this.pushServ.setResetPushBadgeCount();
      // this.checkVersion.checkReleaseVersion();
      this.platform.resume.subscribe(() => {
        this.checkVersion.checkReleaseVersion();
        // this.changePasswordCheck();
        this.openFirstPage();
      });
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
    const redirectToEnterCode = localStorage.getItem('ConfirmStatusCode');
    if (redirectToEnterCode === 'true') {
      this.router.navigate(['start']);
      setTimeout(() => {
        this.router.navigate(['email-registration/confirm-code']);
      }, 200);
      // this.router.navigate(['email-registration/confirm-code']);
    }else {
      const token = localStorage.getItem('token');
      console.log(token);
      if (token) {
        this.router.navigate(['bakery-search']);
      } else {
        this.router.navigate(['start']);
      }
    }
  }
  openSupportPage(url) {
    this.browser = this.iab.create(url, '_blank');
  }
  // changePasswordCheck() {
  //   const redirectToEnterCode = localStorage.getItem('ConfirmStatusCode');
  //   if (redirectToEnterCode === 'true') {
  //     setTimeout(() => {
  //       this.router.navigate(['email-registration/confirm-code']);
  //     }, 1200);
  //   }
  // }
}
