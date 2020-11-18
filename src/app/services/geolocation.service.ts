import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Plugins } from '@capacitor/core';
import { AlertService } from './alert.service';
import { Coordinates } from '../models/coordinates';

import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';

const { Geolocation } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(
    private logger: LoggerService,
    private alertServ: AlertService,
    private nativeGeocoder: NativeGeocoder
  ) { }

  async getCurrentPosition(): Promise<Coordinates> {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      return coordinates.coords;
    } catch (error) {
        this.logger.warn('Geolocation.getCurrentPosition error: ', error);
        if (error.message) {
          this.alertServ.presentAlert(error.message + ' You can go to app settings and enable geolocation permission.');
        }
    }
  }

  async getAddress(lat: number, lng: number) {
    const options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    try {
      const result: NativeGeocoderResult[] = await this.nativeGeocoder.reverseGeocode(lat, lng, options);
      return `${result[0].thoroughfare} ${result[0].subThoroughfare}, ${result[0].postalCode} ${result[0].locality}`;
    } catch (error) {
      this.logger.warn('get address error: ', error);
    }
  }

}
