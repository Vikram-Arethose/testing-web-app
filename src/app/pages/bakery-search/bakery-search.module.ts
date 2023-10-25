import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BakerySearchPageRoutingModule } from './bakery-search-routing.module';

import { BakerySearchPage } from './bakery-search.page';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../../components/components.module';
import { GoogleMapsModule } from '@angular/google-maps'
@NgModule({
  imports: [
    CommonModule,
    GoogleMapsModule,
    FormsModule,
    IonicModule,
    BakerySearchPageRoutingModule,
    TranslateModule,
    ComponentsModule,
  ],
  declarations: [
    BakerySearchPage,
  ]
})
export class BakerySearchPageModule {}
