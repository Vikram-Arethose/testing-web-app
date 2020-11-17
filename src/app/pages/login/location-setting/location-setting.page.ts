import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';

import { MapsAPILoader } from '@agm/core';
import { LoggerService } from '../../../services/logger.service';
import { GeolocationService } from '../../../services/geolocation.service';
import { BranchNear } from '../../../models/http/branchesNear';
import { HttpService } from '../../../services/http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-location-setting',
  templateUrl: './location-setting.page.html',
  styleUrls: ['./location-setting.page.scss'],
})
export class LocationSettingPage implements OnInit {

  branchesNear$: Observable<BranchNear[]>;
  useCurrLocation = true;
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
    this.branchesNear$ = this.httpServ.getBranchesNear(this.latitude.toString(), this.longitude.toString());
    this.findAddress();
  }

  async onUseCurrLocation() {
    if (this.useCurrLocation) {
      return false;
    }
    await this.setCurrentLocation();
    this.useCurrLocation = !this.useCurrLocation;
    this.locationSearched = false;
    this.searchElementRef.nativeElement.value = '';
    this.branchesNear$ = this.httpServ.getBranchesNear(this.latitude.toString(), this.longitude.toString());
  }

  ionViewDidEnter() {

  }

  // Get Current Location Coordinates
  private async setCurrentLocation() {
    const coordinates = await this.geolocationServ.getCurrentPosition();
    this.latitude = coordinates.coords.latitude;
    this.longitude = coordinates.coords.longitude;
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
          this.branchesNear$ = this.httpServ.getBranchesNear(this.latitude.toString(), this.longitude.toString());
        });
      });
    });
  }

}
