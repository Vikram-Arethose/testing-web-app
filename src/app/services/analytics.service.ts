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

  logEvent(name: string, data?: any) {
    let dataStr;
    if (data) {
      debugger;
      dataStr = data.JSON.stringify(data);
    } else {
      dataStr = 'data';
    }
    FirebaseAnalytics.logEvent({
      name,
      params: {
        data: dataStr
      }
    });
  }

  logEventError() {
    FirebaseAnalytics.logEvent({
      name: 'Something went wrong'
    });
  }

  logout() {
    FirebaseAnalytics.logEvent({
      name: 'logout'
    });
  }

}
