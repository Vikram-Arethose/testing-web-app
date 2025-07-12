import { Injectable } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Plugins } from '@capacitor/core';
import { FirebaseAnalytics } from '@capacitor-community/firebase-analytics';
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

  logEvent(name: string, data?: any) {
    // prepare data
    const params = {};
    if (data) {
      data = JSON.stringify(data).match(/.{1,100}/g);
      data.forEach((elem, index) => {
        params['data' + index] = elem;
      });
    }
    // logEvent
    FirebaseAnalytics.logEvent({
      name,
      params
    });
  }

}
