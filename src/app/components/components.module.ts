import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { IonicModule } from '@ionic/angular';
import { PickUpDateComponent } from './pick-up-date/pick-up-date.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { GooglePayComponent } from './google-pay/google-pay.component';
import { DebitComponent } from './payment-methods/debit/debit.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { BakeryItemComponent } from './bakery-item/bakery-item.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { LoginFirstComponent } from './login-first/login-first.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ConfirmCodeComponent } from './confirm-code/confirm-code.component';



@NgModule({
  declarations: [
    MenuHeaderComponent,
    PickUpDateComponent,
    ProductDetailsComponent,
    PaymentMethodsComponent,
    GooglePayComponent,
    DebitComponent,
    SpinnerComponent,
    BakeryItemComponent,
    ProductItemComponent,
    LoginFirstComponent,
    ChangePasswordComponent,
    ConfirmCodeComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MenuHeaderComponent,
    PickUpDateComponent,
    ProductDetailsComponent,
    PaymentMethodsComponent,
    GooglePayComponent,
    DebitComponent,
    SpinnerComponent,
    BakeryItemComponent,
    ProductItemComponent,
    LoginFirstComponent,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
