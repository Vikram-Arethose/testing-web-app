import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationSettingPageRoutingModule } from './location-setting-routing.module';

import { LocationSettingPage } from './location-setting.page';
import { TranslateModule } from '@ngx-translate/core';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationSettingPageRoutingModule,
    TranslateModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_ynyzstxQIf-zeIivWRD-lL_WFpfdbug',
      libraries: ['places']
    })
  ],
  declarations: [LocationSettingPage]
})
export class LocationSettingPageModule {}
