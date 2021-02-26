import { ElementRef, Injectable, NgZone } from '@angular/core';
import { LoggerService } from './logger.service';
import { Plugins } from '@capacitor/core';
import { AlertService } from './alert.service';
import { Coordinates } from '../models/coordinates';

import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { MapsAPILoader } from '@agm/core';
import { PermissionsRequestResult } from '@capacitor/core/dist/esm/definitions';
import { Location } from '../models/location';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { newArray } from '@angular/compiler/src/util';

const { Geolocation } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  private locationSource: BehaviorSubject<Location> = new BehaviorSubject<Location>(new Location());
  currLocation = this.locationSource.asObservable();

  constructor(
    private logger: LoggerService,
    private alertServ: AlertService,
    private nativeGeocoder: NativeGeocoder,
    private mapsApiLoader: MapsAPILoader,
    private ngZone: NgZone,
    private localStorageServ: LocalStorageService
  ) { }

  changeLocation(location: Location) {
    this.locationSource.next(location);

    let locationArr: Location[] = this.localStorageServ.get('locationArr');
    if (locationArr && locationArr.length > 0) {
      const suchLocIndexInLocArr: number = locationArr.findIndex(item => item.address === location.address);
      if (suchLocIndexInLocArr !== -1) {
        locationArr.splice(suchLocIndexInLocArr, 1);
      }
      locationArr.unshift(location);
      if (locationArr.length > 3) {
        locationArr.length = 3;
      }
    } else {
      locationArr = newArray(1, location);
    }
    this.localStorageServ.setArr([{key: 'locationArr', value: locationArr}]);
  }

  async getCurrentPosition() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      const lat = coordinates.coords.latitude;
      const lng = coordinates.coords.longitude;
      await this.getAddress(lat, lng);
      return true;
    } catch (error) {
        this.logger.warn('Geolocation.getCurrentPosition error: ', error);
        if (error.message) {
        }
    }
  }

  async getAddress(lat: number, lng: number) {
    const options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 1
    };

    try {
      const result: NativeGeocoderResult[] = await this.nativeGeocoder.reverseGeocode(lat, lng, options);
      this.logger.log('getAddress result: ', result);
      const address = `${result[0].thoroughfare} ${result[0].subThoroughfare}, ${result[0].postalCode} ${result[0].locality}`;
      this.changeLocation({lat, lng, address});
      return address;
    } catch (error) {
      this.logger.warn('get address error: ', error);
    }
  }

  findAddress(elementRef: ElementRef): Promise<void> {
    return new Promise(resolve => {
      this.mapsApiLoader.load().then(() => {
        const autocomplete = new google.maps.places.Autocomplete(elementRef.nativeElement);
        autocomplete.addListener('place_changed', () => {
          this.ngZone.run(() => {
            const place: google.maps.places.PlaceResult = autocomplete.getPlace();
            this.logger.log('find address: ', place);
            const address = place.formatted_address;
            const lat = place.geometry.location.lat();
            const lng = place.geometry.location.lng();
            resolve();
            this.changeLocation({lat, lng, address});
          });
        });
      });
    });
  }
}
