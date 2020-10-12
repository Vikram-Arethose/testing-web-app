import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailRegistrationPageRoutingModule } from './email-registration-routing.module';

import { EmailRegistrationPage } from './email-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailRegistrationPageRoutingModule
  ],
  declarations: [EmailRegistrationPage]
})
export class EmailRegistrationPageModule {}
