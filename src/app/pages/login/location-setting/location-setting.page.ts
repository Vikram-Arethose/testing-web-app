import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';

import { MapsAPILoader } from '@agm/core';
import { LoggerService } from '../../../services/logger.service';
import { GeolocationService } from '../../../services/geolocation.service';
import { BranchNear } from '../../../models/http/branchesNear';
import { HttpService } from '../../../services/http.service';
import { Observable } from 'rxjs';
import { Coordinates } from '../../../models/coordinates';
import { Location } from '../../../models/location';

@Component({
  selector: 'app-location-setting',
  templateUrl: './location-setting.page.html',
  styleUrls: ['./location-setting.page.scss'],
})
export class LocationSettingPage implements OnInit {

  branchesNear$: Observable<BranchNear[]>;
  useCurrLocation: boolean;
  locationSearched: boolean;
  location: string;
  lat: number;
  lng: number;
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
    this.geolocationServ.currLocation.subscribe((res: Location) => {
      this.lat = res.lat;
      this.lng = res.lng;
      this.logger.log('lat, lng', this.lat, this.lng);
    });
    if (await this.geolocationServ.getCurrentPosition()) {
      this.useCurrLocation = true;
    }
    this.getBranchesNear();
    this.findAddress();
  }

  async onUseCurrLocation() {
    if (this.useCurrLocation) {
      return false;
    }
    await this.geolocationServ.getCurrentPosition()
    if (this.lat && this.lng) {
      this.useCurrLocation = !this.useCurrLocation;
      this.searchElementRef.nativeElement.value = '';
      this.getBranchesNear();
      this.locationSearched = false;
    }
  }

  // // Get Current Location Coordinates
  // private async setCurrentLocation() {
  //   // TODO: need to fix
  //   const coordinates: any = await this.geolocationServ.getCurrentPosition();
  //   if (coordinates) {
  //     this.lat = coordinates.latitude;
  //     this.lng = coordinates.longitude;
  //     return true;
  //   }
  // }

  findAddress(){
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // some details
          this.useCurrLocation = false;
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          this.locationSearched = true;
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.getBranchesNear();
        });
      });
    });
  }

  getBranchesNear() {
    if (this.lng && this.lat) {
      this.branchesNear$ = this.httpServ.getBranchesNear(this.lat.toString(), this.lng.toString());
    }
  }

}
