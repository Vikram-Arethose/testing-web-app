import { Injectable } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';

import { filter } from 'rxjs/operators';

import { Plugins } from '@capacitor/core';
const { FirebaseAnalytics } = Plugins;

import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(
    private logger: LoggerService,
    private router: Router
  ) {
    this.router.events.pipe(
      filter((e: RouterEvent) => e instanceof NavigationEnd),
    ).subscribe((e: RouterEvent) => {
      console.log('route changed: ', e.url);
      this.setScreenName(e.url);
    });
  }

  setScreenName(screenName) {
    FirebaseAnalytics.setScreenName({
      screenName
    });
  }

  setUser(userId: string) {
    FirebaseAnalytics.setUserId({
      userId
    });
  }

  logEvent() {
    FirebaseAnalytics.logEvent({
      name: 'login',
      params: {
        method: 'facebook'
      }
    });
  }

}
