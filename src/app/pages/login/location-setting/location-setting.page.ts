import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';

import { MapsAPILoader } from '@agm/core';
import { LoggerService } from '../../../services/logger.service';
import { GeolocationService } from '../../../services/geolocation.service';
import { BranchNear } from '../../../models/http/branchesNear';
import { HttpService } from '../../../services/http.service';
import { Observable } from 'rxjs';
import { Coordinates } from '../../../models/coordinates';

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
    if (await this.setCurrentLocation()) {
      this.useCurrLocation = true;
    }
    this.getBranchesNear();
    this.findAddress();
  }

  async onUseCurrLocation() {
    if (this.useCurrLocation) {
      return false;
    }
    if (await this.setCurrentLocation()) {
      this.useCurrLocation = !this.useCurrLocation;
      this.searchElementRef.nativeElement.value = '';
      this.getBranchesNear();
      this.locationSearched = false;
    }
  }

  // Get Current Location Coordinates
  private async setCurrentLocation() {
    // TODO: need to fix
    const coordinates: any = await this.geolocationServ.getCurrentPosition();
    if (coordinates) {
      this.latitude = coordinates.latitude;
      this.longitude = coordinates.longitude;
      return true;
    }
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
          this.getBranchesNear();
        });
      });
    });
  }

  getBranchesNear() {
    if (this.longitude && this.latitude) {
      this.branchesNear$ = this.httpServ.getBranchesNear(this.latitude.toString(), this.longitude.toString());
    }
  }

}
