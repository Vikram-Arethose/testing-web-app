import { Injectable } from '@angular/core';
import { PushNotifications,
  PushNotificationSchema,
  PushNotificationToken,
  PushNotificationActionPerformed,
  PushNotification,
  ActionPerformed,} from "@capacitor/push-notifications";  
import { LoggerService } from './logger.service';
import { HttpService } from './http.service';
import { NavigationExtras, Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { Plugins } from "protractor/built/plugins";
import { Platform } from '@ionic/angular';
import { Device } from '@capacitor/device';
import { App } from '@capacitor/app';

// const {App} = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(
    private logger: LoggerService,
    private httpServ: HttpService,
    private router: Router,
    private platform: Platform,

  ) {
    this.actionForPushTouch();
  }

  initPush() {
    if (Capacitor.platform !== 'web') {
      this.registerPush();
    }
  }

  registerPush() {
    if (! this.platform.is('capacitor')) return;
    if (! this.platform.is('ios')) return;

    PushNotifications.requestPermissions().then((permission) => {
      if (permission.receive) {
        PushNotifications.register();
        // this.createChannel();
      }
    });

    PushNotifications.addListener('registration', async (token: PushNotificationToken) => {
        const info = await Device.getInfo();
        this.logger.log('My token: ' + JSON.stringify(token));
        this.logger.log('info: ', info);
        this.httpServ.registerPushToken(token.value, info.model, info.platform, info.osVersion);
      }
    );

    PushNotifications.addListener(
      'pushNotificationReceived',
      async (notification: PushNotificationSchema) => {
        this.logger.log('Push received: ' + JSON.stringify(notification));
      }
    );
        
  }

  setResetPushBadgeCount() {
    PushNotifications.removeAllDeliveredNotifications();
    App.addListener('appStateChange', (state) => {
      if (state.isActive) {
        PushNotifications.removeAllDeliveredNotifications();
      }
    });
  }
  actionForPushTouch() {
    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      async (notification: ActionPerformed) => {
        let  orderId: any;
        const deviceInfo = await Device.getInfo();
        if (deviceInfo.platform === 'ios') {
          orderId = notification.notification.data.data.order_id;
        }else {
          orderId = notification.notification.data.order_id;
        }
        const navigationExtras: NavigationExtras = {
          state: {
            orderId
          }
        };
        this.router.navigate(['orders'], navigationExtras);
      }
    );
  }

}
