import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'menu.inbox',
      url: '/inbox',
      src: './assets/icons/menu/mail-png.svg'
      // icon: 'mail'
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
      // icon: 'heart'
    },
    {
      title: 'menu.paymentMethods',
      url: '/payment-methods',
      src: './assets/icons/menu/credit-card-png.svg'
    },
    {
      title: 'menu.legal',
      url: '/legal',
      src: 'assets/icons/menu/check.svg'
    },
    {
      title: 'menu.support',
      url: '/folder/Trash',
      src: './assets/icons/menu/help-circle-png.svg'
    }
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  private myAccount: string;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private menu: MenuController,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.translate.setDefaultLang('en');
      this.translate.use('en');
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  toAccount() {
    this.router.navigate(['account']);
    this.menu.close();
  }
}
