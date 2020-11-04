import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailRegistrationPageRoutingModule } from './email-registration-routing.module';

import { EmailRegistrationPage } from './email-registration.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailRegistrationPageRoutingModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  declarations: [EmailRegistrationPage]
})
export class EmailRegistrationPageModule {}
