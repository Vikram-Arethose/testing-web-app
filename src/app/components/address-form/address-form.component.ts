import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Address } from '../../models/address.model';
import { HttpService } from '../../services/http.service';
import { LoggerService } from '../../services/logger.service';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
  @Input() address?: any;
  addressForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private httpServ: HttpService,
    private logger: LoggerService,
    private navCtrl: NavController
  ) {
    this.addressForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[\\+]?[0-9\\s\\-\\(\\)]{10,}$')]],      
      email: ['', [Validators.email]],
      addressLine1: ['', [Validators.required]],
      addressLine2: [''],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      country: ['', [Validators.required]],
      isDefault: [false]
    });
  }

  ngOnInit() {
    if (this.address) {
      this.addressForm.patchValue(
        {
          fullName: this.address.full_name,
          phoneNumber: this.address.phone_number,
          email: this.address.email || '',
          addressLine1: this.address.address_line_1,
          addressLine2: this.address.address_line_2 || '',
          city: this.address.city,
          state: this.address.state,
          postalCode: this.address.postal,
          country: this.address.country,
          isDefault: this.address.is_default || false
        }
      );
    }
  }

  onSubmit() {
    if (this.addressForm.valid) {
      const formData = this.addressForm.value;
      if (this.address?.id) {
        formData.id = this.address.id;
      }
      this.modalController.dismiss(formData, 'save');
    } else {
      this.addressForm.markAllAsTouched();
      // Show error message for invalid form
      this.presentErrorToast();
    }
  }

  onCancel() {
    this.modalController.dismiss(null, 'cancel');
  }

  // Form field getters for template access
  get fullName() { return this.addressForm.get('fullName'); }
  get phoneNumber() { return this.addressForm.get('phoneNumber'); }
  get email() { return this.addressForm.get('email'); }
  get addressLine1() { return this.addressForm.get('addressLine1'); }
  get addressLine2() { return this.addressForm.get('addressLine2'); }
  get city() { return this.addressForm.get('city'); }
  get state() { return this.addressForm.get('state'); }
  get postalCode() { return this.addressForm.get('postalCode'); }
  get country() { return this.addressForm.get('country'); }

  private async presentErrorToast() {
    const toast = document.createElement('ion-toast');
    toast.message = 'Please fill in all required fields correctly';
    toast.duration = 2000;
    toast.position = 'bottom';
    toast.color = 'danger';

    document.body.appendChild(toast);
    return toast.present();
  }
}
