import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { IonicModule } from '@ionic/angular';
import { PickUpDateComponent } from './pick-up-date/pick-up-date.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MenuHeaderComponent,
    PickUpDateComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule,
    FormsModule
  ],
  exports: [
    MenuHeaderComponent,
    PickUpDateComponent,
  ]
})
export class ComponentsModule { }
