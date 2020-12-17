import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BakerySearchPageRoutingModule } from './bakery-search-routing.module';

import { BakerySearchPage } from './bakery-search.page';
import { TranslateModule } from '@ngx-translate/core';
import { BakeryItemComponent } from '../../components/bakery-item/bakery-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BakerySearchPageRoutingModule,
    TranslateModule
  ],
  declarations: [
    BakerySearchPage,
    BakeryItemComponent
  ]
})
export class BakerySearchPageModule {}
