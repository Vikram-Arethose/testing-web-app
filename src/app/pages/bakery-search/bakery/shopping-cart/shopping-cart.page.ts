import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DateService } from '../../../../services/date.service';
import { CartService } from '../../../../services/cart.service';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { PickUpDateComponent } from '../../../../components/pick-up-date/pick-up-date.component';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggerService } from '../../../../services/logger.service';
import { Product } from '../../../../models/http/bakeryFull';
import { AlertService } from '../../../../services/alert.service';
import { HttpService } from '../../../../services/http.service';
import { BranchDetailsForPayment } from '../../../../models/http/branchDetailsForPayment';
import { BakeryService } from '../../../../services/bakery.service';
import { ApiResponse } from '../../../../models/http/apiResponse';
import { LocalStorageService } from '../../../../services/local-storage.service';
import { LoadingService } from '../../../../services/loading.service';
import { TranslateService } from '@ngx-translate/core';
import { ModalService } from '../../../../services/modal.service';
import { SaleServices } from '../../../../services/sale.services';
import * as moment from 'moment';
import { AddressService } from '../../../../services/address.service';
import { Address } from '../../../../models/address.model';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  date: string;
  dateLocale: string;
  language: string;
  lastPaymentMethod: string;
  reorder = false;
  absentProducts: any;
  private branchDetails: BranchDetailsForPayment;
  checked;
  timer;
  toastIsShowing: boolean;
  reorderDisabled = false;
  bakeryDetails: any;
  isDelveryAvailable: boolean = false;
  defaultAddress:any = [];


  constructor(
    public cartService: CartService,
    public dateService: DateService,
    private alertServ: AlertService,
    private alertController: AlertController,
    private bakeryServ: BakeryService,
    private httpServ: HttpService,
    private loadingServ: LoadingService,
    private locStorageServ: LocalStorageService,
    private logger: LoggerService,
    private modalController: ModalController,
    private modalServ: ModalService,
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService,
    public saleServ: SaleServices,
    public toast: AlertService,
    private navController: NavController,
    private bakeryService: BakeryService,
    private addressService: AddressService,
    private loadingController: LoadingController
    
  ) {
    this.route.queryParamMap.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.branchDetails = this.router.getCurrentNavigation().extras.state.data;
      }
      if (this.router.getCurrentNavigation().extras.state.data?.reorder) {
        this.reorder = true;
      }else {
        this.reorder = false;
      }
    });
  }

  ngOnInit() {
    this.toastIsShowing = false;
        this.bakeryService.bakeryDetails$.subscribe(details => {
      this.bakeryDetails = details;
      if(this.bakeryDetails && this.bakeryDetails.delivery && this.bakeryDetails.delivery == 1) {
        this.isDelveryAvailable = true;
      }
    });
    this.dateLocale = this.locStorageServ.getDateLocale();
    this.lastPaymentMethod = this.branchDetails.lastUsedPayment;
    // this.date = localStorage.getItem('date');
    this.dateService.dateShared.subscribe((res: string) => {
      if (res && res !== this.date) {
        this.date = res;
        localStorage.setItem('date', res);
        if (this.reorder) {
          this.refreshDate();
        }
        this.validateProducts();
        }
    });
    this.absentProducts = this.cartService.getAbsentCart();

    this.bakeryServ.addresses$.subscribe(address => {
    this.defaultAddress = address
    console.log('from BS defaultAddress:', this.defaultAddress);
    });
    if(!this.defaultAddress){
      this.getAddress()
    }
  }
  validateBasketByDate(basket) {
    if (moment().isSameOrAfter(this.date, 'day')) {
      const filteredBasket = basket.filter( item => this.dateService.getProductAvailability(item));
      console.log('filteredBasket', filteredBasket);
      return filteredBasket;
    }else {
      return basket;
    }
  }
  showToast(showToast) {
    if (showToast) {
      this.toast.deletedProductToast(this.translate.instant('shoppingCart.deletedProduct'));
    }
  }
  ionViewWillEnter() {
    if (this.cartService.getCart().length === 0) {
      this.router.navigateByUrl('/bakery-search');
    }
  }

  async presentVerifyDateModal() {
    const modal = await this.modalController.create({
      component: PickUpDateComponent,
      cssClass: 'pick-up-date-modal',
      componentProps: {isVerify: true}
    });
    return await modal.present();
  }

  add(product: Product) {
    this.cartService.addProductToCart(product);
  }

  reduce(product: Product) {
    this.cartService.removeProductFromCart(product);
  }

  delete(i: number) {
    this.cartService.deleteCartProduct(i);
  }

  async presentAlertConfirm(cart: Product[]) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: '<strong>Individual products are not available at the selected time. Would you like to remove or adjust?</strong>',
      buttons: [
        {
          text: 'Adjust',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Remove',
          handler: () => {
            this.cartService.updateCart(cart.filter(product => product.isAvailable === true));
          }
        },
      ]
    });
    await alert.present();
  }

  checkCart() {
    const minOrderValue = this.branchDetails.minOrderValue;
    const cart = this.cartService.getCart();
    if (cart.length > 0 && this.cartService.getTotalPrice() >= Number.parseFloat(minOrderValue)) {
      if (cart.some(item => item.isAvailable !== false)) {
        return  true;
      } else {
        this.presentAlertConfirm(cart);
      }
    } else {
      this.alertServ.presentAlert(`${this.translate.instant('alert.minOrderCost')} ${minOrderValue} €!`);
    }
  }

  async getAddress(){
        const loading = await this.loadingController.create({
      message: 'fetching addresses...',
      spinner: 'circular'
    });
    await loading.present();
    this.httpServ.getAddressById().subscribe( res =>{
      if(res.apiStatus == true && res.apiCode == 200 && res.data) {
        console.log('Address API Response:', res);
        const addressData = res.data;
        this.logger.log('Address data:', addressData);
        this.defaultAddress = addressData.deliveryAddresses.find(addr => addr.is_default == true);
        // this.bakeryServ.updateAddresses(this.defaultAddress);

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
            //     isDefault: defaultAddress.is_default
            //   };
            // }
      }else{
        this.logger.log('Error fetching address:', res);
        this.defaultAddress = null;
      }
      console.log('From GET this.defaultAddress:', this.defaultAddress);
    })
    await loading.dismiss();
  }

  // getAddress1() {
  //   this.httpServ.getAddressById().subscribe({
  //     next: (response: ApiResponse) => {
  //       this.logger.log('Address API Response:', response);
        
  //       if (response.apiStatus === 'OK' && response.apiCode === 'SUCCESS' && response.data) {
  //         const addressData = response.data;
  //         this.logger.log('Address data:', addressData);
          
  //         if (addressData.deliveryAddresses && Array.isArray(addressData.deliveryAddresses)) {
  //           const defaultAddress = addressData.deliveryAddresses.find(addr => addr.is_default === 1);
  //           this.logger.log('Found default address:', defaultAddress);
            
  //           if (defaultAddress) {
  //             this.defaultAddress = {
  //               id: defaultAddress.id,
  //               fullName: defaultAddress.full_name,
  //               phoneNumber: defaultAddress.phone_number,
  //               email: defaultAddress.email,
  //               addressLine1: defaultAddress.address_line1,
  //               addressLine2: defaultAddress.address_line2,
  //               city: defaultAddress.city,
  //               state: defaultAddress.state,
  //               postalCode: defaultAddress.postal_code,
  //               country: defaultAddress.country,
  //               isDefault: true
  //             };
  //             this.logger.log('Set default address:', this.defaultAddress);
  //           }
  //         }
  //       }
  //     },
  //     error: (error) => {
  //       this.logger.log('Error fetching address:', error);
  //       this.defaultAddress = null;
  //     }
  //   });
  // }

  checkout() {
    if (this.checkCart()) {
      if (this.lastPaymentMethod) {
        this.loadingServ.presentLoading();
        this.httpServ.useLastPayment(this.bakeryServ.getDataForPayment(this.date)).subscribe((res: ApiResponse) => {
          this.loadingServ.dismiss();
          this.logger.log('useLastPayment res : ', res);
          if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS' && res?.iframe_url) {
            this.httpServ.handleIabResult(this.httpServ.getIab(res.iframe_url));
            this.cartService.clearCart();
            this.cartService.clearAbsentCart();
          } else if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS' && res.data?.order_id) {
            this.cartService.clearCart();
            this.cartService.clearAbsentCart();
            this.bakeryServ.openConfirmOrder(res.data?.order_id);
          }else {
            this.alertServ.presentAlert();
          }
        });
      } else {
        this.modalServ.presentPaymentMethodsModal();
      }
    }
  }

  chooseOtherPayment() {
    if (this.checkCart()) {
      this.modalServ.presentPaymentMethodsModal();
    }
  }

  redirectToMain() {
    this.cartService.clearCart();
    this.cartService.clearAbsentCart();
    this.router.navigate(['/bakery-search']);
  }
  cutToggler(e) {
    let checkedStatus = e.detail.checked;
    (checkedStatus === true) ? checkedStatus = 1 : checkedStatus = 0;
    const basket = this.cartService.getCart();
    const id = e.target.name;
    const index = basket.findIndex(item => item.id === +id);
    basket[index].sliced = checkedStatus;
    this.cartService.updateCart(basket);
  }
  refreshDate() {
    this.timer = setInterval(() => {
      this.date = this.dateService.getDateFromPicker();
    }, 200);
  }
  validateProducts() {
    const basket = this.cartService.getCart().map(item => this.dateService.mapProductInCartAvailability(item));
    const updatedBasket = basket.filter( item => this.dateService.getProductAvailability(item));
    if (basket.length !== updatedBasket.length) {
      this.toastIsShowing = true;
      this.showToast(this.toastIsShowing);
      this.toastIsShowing = false;
      // (this.reorder) ? this.reorderDisabled = true : this.reorderDisabled = false ;
    }
    // if (basket.length === updatedBasket.length) {
    //   this.reorderDisabled = false;
    // }
    // if (!this.reorder) {
    //   this.cartService.updateCart(updatedBasket);
    // }
    this.cartService.updateCart(updatedBasket);
    if (this.cartService.getCart().length === 0) {
      if (this.reorder){
        this.router.navigate(['orders']);
      }else {
        this.router.navigate(['bakery-search/bakery']);
      }
    }
  }
  ngOnDestroy() {
    // Clean up all subscriptions
    this.subscriptions.forEach(sub => sub?.unsubscribe());
    clearInterval(this.timer);
  }

  onAddressButtonBlur(event: FocusEvent) {
    // Remove focus when navigating away
    const target = event.target as HTMLElement;
    if (target) {
      target.blur();
    }
  }

  async navigateToAddresses(event: Event) {
    try {
      // Prevent default behavior and stop propagation
      event.preventDefault();
      event.stopPropagation();

      // Remove focus from the button
      const target = event.target as HTMLElement;
      if (target) {
        target.blur();
      }

      // First navigate using Router to set state
      await this.router.navigate(['/addresses'], {
        state: { from: 'shopping-cart' }
      });

      // Then handle the animation using NavController
      await this.navController.navigateForward('/addresses', {
        animated: true,
        animationDirection: 'forward'
      });
    } catch (error) {
      console.error('Navigation error:', error);
      // Simple fallback navigation
      this.router.navigate(['/addresses']);
    }
  }

  async goToBakery() {
    try {
      await this.navController.navigateBack('/bakery-search/bakery', {
        animated: true,
        animationDirection: 'back'
      });
    } catch (error) {
      console.error('Navigation error:', error);
      this.router.navigate(['/bakery-search/bakery']);
    }
  }
}
