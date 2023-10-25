import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationSettingPageRoutingModule } from './location-setting-routing.module';

import { LocationSettingPage } from './location-setting.page';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../../../components/components.module';
import { GoogleMapsModule} from '@angular/google-maps';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationSettingPageRoutingModule,
    TranslateModule,
    ComponentsModule,
    GoogleMapsModule,
  ],
  declarations: [LocationSettingPage]
})
export class LocationSettingPageModule {}
