import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppleRegistrationPageRoutingModule } from './apple-registration-routing.module';

import { AppleRegistrationPage } from './apple-registration.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppleRegistrationPageRoutingModule,
    TranslateModule
  ],
  declarations: [AppleRegistrationPage]
})
export class AppleRegistrationPageModule {}
