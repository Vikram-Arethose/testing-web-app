import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';

import { MapsAPILoader } from '@agm/core';
import { LoggerService } from '../../../services/logger.service';
import { GeolocationService } from '../../../services/geolocation.service';
import { BakeriesAround, BranchNear } from '../../../core/mocks/bakeries-around';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-location-setting',
  templateUrl: './location-setting.page.html',
  styleUrls: ['./location-setting.page.scss'],
})
export class LocationSettingPage implements OnInit {

  branchesNear: BranchNear[] = BakeriesAround;
  useCurrLocation: boolean;
  locationSearched: boolean;
  location: string;
  latitude: number;
  longitude: number;
  googleMapType = 'satellite';

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private logger: LoggerService,
    private geolocationServ: GeolocationService,
    private httpServ: HttpService
  ) { }

  async ngOnInit() {
    await this.setCurrentLocation();
    this.httpServ.getBranchesNear(this.latitude.toString(), this.longitude.toString());
    // this.setCurrentLocation();
    this.findAddress();
/*    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      // this.setCurrentLocation();
      // this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          // get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });*/
  }

  onUseCurrLocation() {
    this.setCurrentLocation();
    this.useCurrLocation = !this.useCurrLocation;
    this.locationSearched = false;
    this.searchElementRef.nativeElement.value = '';
  }

  ionViewDidEnter() {

  }

  // Get Current Location Coordinates
  private async setCurrentLocation() {
    const coordinates = await this.geolocationServ.getCurrentPosition();
    this.latitude = coordinates.coords.latitude;
    this.longitude = coordinates.coords.longitude;
    // if ('geolocation' in navigator) {
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     this.latitude = position.coords.latitude;
    //     this.longitude = position.coords.longitude;
    //     this.zoom = 8;
    //     // this.getAddress(this.latitude, this.longitude);
    //   });
    // }
  }

  findAddress(){
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // some details
          this.useCurrLocation = false;
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          this.locationSearched = true;
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          // this.address = place.formatted_address;
          // this.web_site = place.website;
          // this.name = place.name;
          // this.zip_code = place.address_components[place.address_components.length - 1].long_name;
          // // set latitude, longitude and zoom
          // this.latitude = place.geometry.location.lat();
          // this.longitude = place.geometry.location.lng();
          // this.zoom = 12;
        });
      });
    });
  }

  getBranchesNear() {
    // this.httpServ.
  }

}
