import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountHeaderComponent } from './account-header/account-header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    AccountHeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    AccountHeaderComponent
  ]
})
export class ComponentsModule { }
