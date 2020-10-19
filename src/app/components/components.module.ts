import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    MenuHeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    MenuHeaderComponent
  ]
})
export class ComponentsModule { }
