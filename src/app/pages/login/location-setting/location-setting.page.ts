import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';

import { MapsAPILoader } from '@agm/core';
import { LoggerService } from '../../../services/logger.service';
import { GeolocationService } from '../../../services/geolocation.service';
import { BranchNear } from '../../../models/http/branchesNear';
import { HttpService } from '../../../services/http.service';
import { Observable } from 'rxjs';
import { Location } from '../../../models/location';

@Component({
  selector: 'app-location-setting',
  templateUrl: './location-setting.page.html',
  styleUrls: ['./location-setting.page.scss']
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
    private httpServ: HttpService,
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
    await this.geolocationServ.getCurrentPosition();
    if (this.lat && this.lng) {
      this.useCurrLocation = !this.useCurrLocation;
      this.getBranchesNear();
      this.resetSearchField();
    }
  }

  findAddress(){
    this.geolocationServ.findAddress(this.searchElementRef).then(() => {
      this.getBranchesNear();
      this.useCurrLocation = false;
      this.locationSearched = true;
    });
  }

  getBranchesNear() {
    if (this.lng && this.lat) {
      this.branchesNear$ = this.httpServ.getBranchesNear(this.lat.toString(), this.lng.toString());
    }
  }

  resetSearchField() {
    this.searchElementRef.nativeElement.value = '';
    this.locationSearched = false;
  }

  ionViewDidLeave() {
    this.resetSearchField();
  }

}
