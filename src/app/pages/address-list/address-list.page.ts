import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, Platform } from '@ionic/angular';
import { AddressFormComponent } from '../../components/address-form/address-form.component';
import { AddressService } from '../../services/address.service';
import { Address } from '../../models/address.model';
import { Observable } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { LoggerService } from '../../services/logger.service';
import { LoadingController } from '@ionic/angular';
import { BakeryService } from '../../services/bakery.service';



@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.page.html',
  styleUrls: ['./address-list.page.scss']
})
export class AddressListPage implements OnInit {
  addresses: any = [];

  constructor(
    private modalController: ModalController,
    private addressService: AddressService,
    private platform: Platform,
    private navController: NavController,
    private httpServ: HttpService,
    private logger: LoggerService,
    private loadingController: LoadingController,
    private bakeryServ: BakeryService,


  ) {
    // this.addresses$ = this.addressService.getAddresses();

  }

  ngOnInit() {
    this.getAddress();
    // Subscribe to platform resume events
    // this.platform.resume.subscribe(() => {
    //   // Refresh data when app resumes
    //   this.addresses$ = this.addressService.getAddresses();
    // });
  }

  // ionViewWillEnter() {
  //   // Refresh data when view enters
  //   this.addresses$ = this.addressService.getAddresses();
  // }

  ionViewDidEnter() {
    // Ensure the page is visible
    const element = document.querySelector('app-address-list');
    if (element) {
      element.classList.remove('ion-page-hidden');
    }
  }

  goBack() {
    this.navController.back();
  }

 async getAddress() {
      const loading = await this.loadingController.create({
      message: 'fetching addresses...',
      spinner: 'circular'
    });
    await loading.present();
    this.httpServ.getAddressById().subscribe({
      next: async (res) => {
        if (res.apiStatus == true && res.apiCode == 200 && res.data) {
          this.addresses = res.data.deliveryAddresses;
          console.log('this.addresses:', this.addresses);
          let SelectedAddress = this.addresses.find(addr => addr.is_default === true);
          // if (SelectedAddress) {
          this.bakeryServ.updateAddresses(SelectedAddress);
        // }
        // this.logger.log('Address data:', addressData);
        // const defaultAddress = addressData.deliveryAddresses.find(addr => addr.is_default == true);
        // if (defaultAddress) {
        //   this.defaultAddress = {
        //     id: defaultAddress.id,
        //     fullName: defaultAddress.full_name,
        //     phoneNumber: defaultAddress.phone_number,
        //     email: defaultAddress.email,
        //     addressLine1: defaultAddress.address_line1,
        //     addressLine2: defaultAddress.address_line2,
        //     city: defaultAddress.city,
        //     state: defaultAddress.state,
        //     postalCode: defaultAddress.postal_code,
        //     country: defaultAddress.country,
        //     isDefault: true
        //   };
        // }
      } else {
        this.logger.log('Error fetching address:', res);
        this.addresses = [];
        this.bakeryServ.updateAddresses(null);
      }
      await loading.dismiss();
    }
    })
  }


  async openAddressForm(address?: Address) {
    const modal = await this.modalController.create({
      component: AddressFormComponent,
      componentProps: {
        address: address ? { ...address } : undefined
      }
    });

    await modal.present();

    const { data, role } = await modal.onWillDismiss();
    if (role === 'save' && data) {
      if (data.id) {
        // this.addressService.updateAddress(data);
        this.UpdateAddress(data)
      } else {
        // this.addressService.addAddress(data);
        this.createNewAddress(data);
      }
    }
  }

  async createNewAddress(formData) {
    const loading = await this.loadingController.create({
      message: 'creating address...',
      spinner: 'circular'
    });
    await loading.present();
    let Payload = {
      "full_name": formData.fullName,
      "phone_number": formData.phoneNumber,
      "email": formData.email,
      "address_line_1": formData.addressLine1,
      "address_line_2": formData.addressLine2,
      "city": formData.city,
      "state": formData.state,
      "postal": formData.postalCode,
      "country": formData.country,
      "is_default": formData.isDefault
    }
    this.httpServ.CreateAddress(Payload).subscribe({
      next: async (res) => {
        if (res.apiStatus && res.apiCode === 200) {
          this.logger.log('Address updated successfully:', res.message);
          await this.getAddress();
          // this.addressService.setDefaultAddress(address.id!);
          // address.is_default = true;
        } else {
          this.logger.error('Error updating address:', res.message);
        }
        // Dismiss loader after operation completes
        await loading.dismiss();
      },
      error: async (err) => {
        this.logger.error('Error updating address:', err);
        // Dismiss loader if there's an error
        await loading.dismiss();
      }

    });
  }

  async UpdateAddress(address) {
    const loading = await this.loadingController.create({
      message: 'updating address...',
      spinner: 'circular'
    });
    await loading.present();

    let ID = address.id;
    let payload = {
      "full_name": address.fullName,
      "phone_number": address.phoneNumber,
      "email": address.email,
      "address_line_1": address.addressLine1,
      "address_line_2": address.addressLine2,
      "city": address.city,
      "state": address.state,
      "postal": address.postalCode,
      "country": address.country,
      "is_default": address.isDefault
    }

    this.httpServ.updateAdress(payload, ID).subscribe({
      next: async (res) => {
        if (res.apiStatus && res.apiCode === 200) {
          this.logger.log('Address updated successfully:', res.message);
          await this.getAddress();
          // this.addressService.setDefaultAddress(address.id!);
          // address.is_default = true;
        } else {
          this.logger.error('Error updating address:', res.message);
        }
        // Dismiss loader after operation completes
        await loading.dismiss();
      },
      error: async (err) => {
        this.logger.error('Error updating address:', err);
        // Dismiss loader if there's an error
        await loading.dismiss();
      }
    });
  }

  async setDefault(address) {
    // Create and present the loader
    const loading = await this.loadingController.create({
      message: 'Setting as default...',
      spinner: 'circular'
    });
    await loading.present();

    let ID = address.id;
    let payload = {
      "full_name": address.full_name,
      "phone_number": address.phone_number,
      "email": address.email,
      "address_line_1": address.address_line_1,
      "address_line_2": address.address_line_2,
      "city": address.city,
      "state": address.state,
      "postal": address.postal,
      "country": address.country,
      "is_default": true
    }

    this.httpServ.updateAdress(payload, ID).subscribe({
      next: async (res) => {
        if (res.apiStatus && res.apiCode === 200) {
          this.logger.log('Address updated successfully:', res.message);
          await this.getAddress();
          // this.addressService.setDefaultAddress(address.id!);
          // address.is_default = true;
        } else {
          this.logger.error('Error updating address:', res.message);
        }
        // Dismiss loader after operation completes
        await loading.dismiss();
      },
      error: async (err) => {
        this.logger.error('Error updating address:', err);
        // Dismiss loader if there's an error
        await loading.dismiss();
      }
    });
  }

  async deleteAddress(address: Address, event: Event) {
    const loading = await this.loadingController.create({
      message: 'deleting address...',
      spinner: 'circular'
    });
    await loading.present();
    if (address?.id) {
      this.httpServ.deleteAddress(address.id!).subscribe({
        next: async (res) => {
          if (res.apiStatus && res.apiCode === 200) {
            this.logger.log('Address deleted successfully:', res.message);
            await this.getAddress();
            // this.addressService.setDefaultAddress(address.id!);
            // address.is_default = true;
          } else {
            this.logger.error('Error deleted address:', res.message);
          }
          // Dismiss loader after operation completes
          await loading.dismiss();
        },
        error: async (err) => {
          this.logger.error('Error deleting address:', err);
          // Dismiss loader if there's an error
          await loading.dismiss();
        }
      });
    }
    // event.stopPropagation();
    // this.addressService.deleteAddress(address.id!);
  }
}
