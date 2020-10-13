import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BakerySearchPageRoutingModule } from './bakery-search-routing.module';

import { BakerySearchPage } from './bakery-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BakerySearchPageRoutingModule
  ],
  declarations: [BakerySearchPage]
})
export class BakerySearchPageModule {}
