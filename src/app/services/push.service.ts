import { Injectable } from '@angular/core';
import {
  PushNotifications,
  PushNotificationSchema,
  PushNotificationToken,
  PushNotificationActionPerformed,
  ActionPerformed,
} from '@capacitor/push-notifications';
import { LoggerService } from './logger.service';
import { HttpService } from './http.service';
import { NavigationExtras, Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { Device } from '@capacitor/device';
import { App } from '@capacitor/app';

@Injectable({
  providedIn: 'root',
})
export class PushService {
  constructor(
    private logger: LoggerService,
    private httpServ: HttpService,
    private router: Router,
    private platform: Platform
  ) {}
    private isNative = Capacitor.getPlatform() !== 'web';

  initPush() {
    // ✅ Only proceed if running on Capacitor and native platform (Android/iOS)
    if (!Capacitor.isNativePlatform && (Capacitor.getPlatform() === 'web' || !this.platform.is('capacitor'))) {
      this.logger.log('Push notifications skipped: Not running in native platform or not a Capacitor app.');
      return;
    }

    this.registerPush();
  }

  registerPush() {
    PushNotifications.requestPermissions().then((permission) => {
      if (permission.receive === 'granted') {
        PushNotifications.register();

        PushNotifications.addListener('registration', async (token: PushNotificationToken) => {
          const info = await Device.getInfo();
          this.logger.log('Push Token:', token.value);
          this.logger.log('Device Info:', info);
          this.httpServ.registerPushToken(token.value, info.model, info.platform, info.osVersion);
        });

        PushNotifications.addListener('registrationError', (error) => {
          this.logger.log('Push registration error:', error);
        });

        PushNotifications.addListener('pushNotificationReceived', (notification: PushNotificationSchema) => {
          this.logger.log('Notification received:', notification);
        });

        this.actionForPushTouch();
        this.setResetPushBadgeCount();
      } else {
        this.logger.log('Push permission not granted.');
      }
    }).catch((err) => {
      this.logger.log('Push permission request failed:', err);
    });
  }

 setResetPushBadgeCount() {
  if (!Capacitor.isNativePlatform()) {
    this.logger.log('Skipping badge count reset — not a native platform.');
    return;
  }

  PushNotifications.removeAllDeliveredNotifications();

  App.addListener('appStateChange', (state) => {
    if (state.isActive) {
      PushNotifications.removeAllDeliveredNotifications();
    }
  });
}


  private  actionForPushTouch() {
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
