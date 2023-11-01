import { ElementRef, Injectable, NgZone, ViewChild } from '@angular/core';
import { LoggerService } from './logger.service';
import { Plugins } from '@capacitor/core';
import { AlertService } from './alert.service';
import { Coordinates } from '../models/coordinates';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { Location } from '../models/location';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

const { Geolocation } = Plugins;

@Injectable({
  providedIn: 'root'
})  
export class GeolocationService {

  title = 'angular-google-map-search';

  @ViewChild('search')
  public searchElementRef!: ElementRef;
  zoom = 12;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDefaultUI: true,
    fullscreenControl: true,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    // maxZoom:this.maxZoom,
    // minZoom:this.minZoom,
  };
  latitude!: any;
  longitude!: any;


  private locationSource: BehaviorSubject<Location> = new BehaviorSubject<Location>(new Location());
  currLocation = this.locationSource.asObservable();
  defaultLocation: Location = {
    lat: 51.165691,
    lng: 10.451526,
    address: 'Deutschland'
  };

  constructor(
    private logger: LoggerService,
    private alertServ: AlertService,
    private nativeGeocoder: NativeGeocoder,
    private ngZone: NgZone,
    private localStorageServ: LocalStorageService,
  ) { }
  
  ngOnInit() {
    this.getCurrentPosition();
  }

  // ngAfterViewInit(): void {
  //   // Binding autocomplete to search input control
  //   let autocomplete = new google.maps.places.Autocomplete(
  //     this.searchElementRef.nativeElement
  //   );
  //   // Align search box to center
  //   this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(
  //     this.searchElementRef.nativeElement
  //   );
  //   autocomplete.addListener('place_changed', () => {
  //     this.ngZone.run(() => {
  //       //get the place result
  //       let place: google.maps.places.PlaceResult = autocomplete.getPlace();

  //       //verify result
  //       if (place.geometry === undefined || place.geometry === null) {
  //         return;
  //       }

  //       console.log({ place }, place.geometry.location?.lat());

  //       //set latitude, longitude and zoom
  //       this.latitude = place.geometry.location?.lat();
  //       this.longitude = place.geometry.location?.lng();
  //       this.center = {
  //         lat: this.latitude,
  //         lng: this.longitude,
  //       };
  //     });
  //   });
  // }

  changeLocation(location?: Location) {
    if (!location) {
      location = this.defaultLocation;
    }
    this.locationSource.next(location);
    // save to local storage
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
      locationArr = new Array<Location>( location);
    }
    this.localStorageServ.setArr([{key: 'locationArr', value: locationArr}]);
  }

  async getCurrentPosition() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      const lat = coordinates.coords.latitude;
      const lng = coordinates.coords.longitude;
      console.log(coordinates);
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

  async findAddress(elementRef: ElementRef): Promise<void> {
    return new Promise(resolve => {
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
      // });
    });
  }

}
