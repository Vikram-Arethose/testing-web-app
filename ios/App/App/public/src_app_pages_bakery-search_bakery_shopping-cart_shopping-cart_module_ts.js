(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_bakery-search_bakery_shopping-cart_shopping-cart_module_ts"],{

/***/ 11181:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/bakery-search/bakery/shopping-cart/shopping-cart-routing.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingCartPageRoutingModule": () => (/* binding */ ShoppingCartPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shopping_cart_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping-cart.page */ 9889);




const routes = [{
  path: '',
  component: _shopping_cart_page__WEBPACK_IMPORTED_MODULE_0__.ShoppingCartPage
}];
let ShoppingCartPageRoutingModule = class ShoppingCartPageRoutingModule {};
ShoppingCartPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ShoppingCartPageRoutingModule);


/***/ }),

/***/ 22161:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/bakery-search/bakery/shopping-cart/shopping-cart.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingCartPageModule": () => (/* binding */ ShoppingCartPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shopping_cart_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping-cart-routing.module */ 11181);
/* harmony import */ var _shopping_cart_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-cart.page */ 9889);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 33935);








let ShoppingCartPageModule = class ShoppingCartPageModule {};
ShoppingCartPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _shopping_cart_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShoppingCartPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
  declarations: [_shopping_cart_page__WEBPACK_IMPORTED_MODULE_1__.ShoppingCartPage]
})], ShoppingCartPageModule);


/***/ }),

/***/ 9889:
/*!********************************************************************************!*\
  !*** ./src/app/pages/bakery-search/bakery/shopping-cart/shopping-cart.page.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingCartPage": () => (/* binding */ ShoppingCartPage)
/* harmony export */ });
/* harmony import */ var C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _shopping_cart_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-cart.page.html?ngResource */ 32976);
/* harmony import */ var _shopping_cart_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-cart.page.scss?ngResource */ 65842);
/* harmony import */ var _shopping_cart_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopping_cart_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/date.service */ 82963);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/cart.service */ 90910);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _components_pick_up_date_pick_up_date_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/pick-up-date/pick-up-date.component */ 33814);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/logger.service */ 51273);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/alert.service */ 25970);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/http.service */ 6858);
/* harmony import */ var _services_bakery_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/bakery.service */ 24934);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/local-storage.service */ 18345);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/loading.service */ 4471);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../services/modal.service */ 71609);
/* harmony import */ var _services_sale_services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../services/sale.services */ 73030);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _services_address_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../services/address.service */ 39688);






















let ShoppingCartPage = class ShoppingCartPage {
  constructor(cartService, dateService, alertServ, alertController, bakeryServ, httpServ, loadingServ, locStorageServ, logger, modalController, modalServ, route, router, translate, saleServ, toast, navController, bakeryService, addressService, loadingController) {
    this.cartService = cartService;
    this.dateService = dateService;
    this.alertServ = alertServ;
    this.alertController = alertController;
    this.bakeryServ = bakeryServ;
    this.httpServ = httpServ;
    this.loadingServ = loadingServ;
    this.locStorageServ = locStorageServ;
    this.logger = logger;
    this.modalController = modalController;
    this.modalServ = modalServ;
    this.route = route;
    this.router = router;
    this.translate = translate;
    this.saleServ = saleServ;
    this.toast = toast;
    this.navController = navController;
    this.bakeryService = bakeryService;
    this.addressService = addressService;
    this.loadingController = loadingController;
    this.subscriptions = [];
    this.reorder = false;
    this.reorderDisabled = false;
    this.isDelveryAvailable = false;
    this.defaultAddress = [];
    this.route.queryParamMap.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.branchDetails = this.router.getCurrentNavigation().extras.state.data;
      }
      if (this.router.getCurrentNavigation().extras.state.data?.reorder) {
        this.reorder = true;
      } else {
        this.reorder = false;
      }
    });
  }
  ngOnInit() {
    this.toastIsShowing = false;
    this.bakeryService.bakeryDetails$.subscribe(details => {
      this.bakeryDetails = details;
      if (this.bakeryDetails && this.bakeryDetails.delivery && this.bakeryDetails.delivery == 1) {
        this.isDelveryAvailable = true;
      }
    });
    this.dateLocale = this.locStorageServ.getDateLocale();
    this.lastPaymentMethod = this.branchDetails.lastUsedPayment;
    // this.date = localStorage.getItem('date');
    this.dateService.dateShared.subscribe(res => {
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
      this.defaultAddress = address;
      console.log('from BS defaultAddress:', this.defaultAddress);
    });
    if (!this.defaultAddress) {
      this.getAddress();
    }
  }
  validateBasketByDate(basket) {
    if (moment__WEBPACK_IMPORTED_MODULE_14__().isSameOrAfter(this.date, 'day')) {
      const filteredBasket = basket.filter(item => this.dateService.getProductAvailability(item));
      console.log('filteredBasket', filteredBasket);
      return filteredBasket;
    } else {
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
  presentVerifyDateModal() {
    var _this = this;
    return (0,C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalController.create({
        component: _components_pick_up_date_pick_up_date_component__WEBPACK_IMPORTED_MODULE_5__.PickUpDateComponent,
        cssClass: 'pick-up-date-modal',
        componentProps: {
          isVerify: true
        }
      });
      return yield modal.present();
    })();
  }
  add(product) {
    this.cartService.addProductToCart(product);
  }
  reduce(product) {
    this.cartService.removeProductFromCart(product);
  }
  delete(i) {
    this.cartService.deleteCartProduct(i);
  }
  presentAlertConfirm(cart) {
    var _this2 = this;
    return (0,C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        header: 'Confirm!',
        message: '<strong>Individual products are not available at the selected time. Would you like to remove or adjust?</strong>',
        buttons: [{
          text: 'Adjust',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Remove',
          handler: () => {
            _this2.cartService.updateCart(cart.filter(product => product.isAvailable === true));
          }
        }]
      });
      yield alert.present();
    })();
  }
  checkCart() {
    const minOrderValue = this.branchDetails.minOrderValue;
    const cart = this.cartService.getCart();
    if (cart.length > 0 && this.cartService.getTotalPrice() >= Number.parseFloat(minOrderValue)) {
      if (cart.some(item => item.isAvailable !== false)) {
        return true;
      } else {
        this.presentAlertConfirm(cart);
      }
    } else {
      this.alertServ.presentAlert(`${this.translate.instant('alert.minOrderCost')} ${minOrderValue} €!`);
    }
  }
  getAddress() {
    var _this3 = this;
    return (0,C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this3.loadingController.create({
        message: 'fetching addresses...',
        spinner: 'circular'
      });
      yield loading.present();
      _this3.httpServ.getAddressById().subscribe(res => {
        if (res.apiStatus == true && res.apiCode == 200 && res.data) {
          console.log('Address API Response:', res);
          const addressData = res.data;
          _this3.logger.log('Address data:', addressData);
          _this3.defaultAddress = addressData.deliveryAddresses.find(addr => addr.is_default == true);
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
        } else {
          _this3.logger.log('Error fetching address:', res);
          _this3.defaultAddress = null;
        }
        console.log('From GET this.defaultAddress:', _this3.defaultAddress);
      });
      yield loading.dismiss();
    })();
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
        this.httpServ.useLastPayment(this.bakeryServ.getDataForPayment(this.date)).subscribe(res => {
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
          } else {
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
    checkedStatus === true ? checkedStatus = 1 : checkedStatus = 0;
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
    const updatedBasket = basket.filter(item => this.dateService.getProductAvailability(item));
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
      if (this.reorder) {
        this.router.navigate(['orders']);
      } else {
        this.router.navigate(['bakery-search/bakery']);
      }
    }
  }
  ngOnDestroy() {
    // Clean up all subscriptions
    this.subscriptions.forEach(sub => sub?.unsubscribe());
    clearInterval(this.timer);
  }
  onAddressButtonBlur(event) {
    // Remove focus when navigating away
    const target = event.target;
    if (target) {
      target.blur();
    }
  }
  navigateToAddresses(event) {
    var _this4 = this;
    return (0,C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Prevent default behavior and stop propagation
        event.preventDefault();
        event.stopPropagation();
        // Remove focus from the button
        const target = event.target;
        if (target) {
          target.blur();
        }
        // First navigate using Router to set state
        yield _this4.router.navigate(['/addresses'], {
          state: {
            from: 'shopping-cart'
          }
        });
        // Then handle the animation using NavController
        yield _this4.navController.navigateForward('/addresses', {
          animated: true,
          animationDirection: 'forward'
        });
      } catch (error) {
        console.error('Navigation error:', error);
        // Simple fallback navigation
        _this4.router.navigate(['/addresses']);
      }
    })();
  }
  goToBakery() {
    var _this5 = this;
    return (0,C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this5.navController.navigateBack('/bakery-search/bakery', {
          animated: true,
          animationDirection: 'back'
        });
      } catch (error) {
        console.error('Navigation error:', error);
        _this5.router.navigate(['/bakery-search/bakery']);
      }
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__.CartService
  }, {
    type: _services_date_service__WEBPACK_IMPORTED_MODULE_3__.DateService
  }, {
    type: _services_alert_service__WEBPACK_IMPORTED_MODULE_7__.AlertService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController
  }, {
    type: _services_bakery_service__WEBPACK_IMPORTED_MODULE_9__.BakeryService
  }, {
    type: _services_http_service__WEBPACK_IMPORTED_MODULE_8__.HttpService
  }, {
    type: _services_loading_service__WEBPACK_IMPORTED_MODULE_11__.LoadingService
  }, {
    type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_10__.LocalStorageService
  }, {
    type: _services_logger_service__WEBPACK_IMPORTED_MODULE_6__.LoggerService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController
  }, {
    type: _services_modal_service__WEBPACK_IMPORTED_MODULE_12__.ModalService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateService
  }, {
    type: _services_sale_services__WEBPACK_IMPORTED_MODULE_13__.SaleServices
  }, {
    type: _services_alert_service__WEBPACK_IMPORTED_MODULE_7__.AlertService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.NavController
  }, {
    type: _services_bakery_service__WEBPACK_IMPORTED_MODULE_9__.BakeryService
  }, {
    type: _services_address_service__WEBPACK_IMPORTED_MODULE_15__.AddressService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.LoadingController
  }];
};
ShoppingCartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.Component)({
  selector: 'app-shopping-cart',
  template: _shopping_cart_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_shopping_cart_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ShoppingCartPage);


/***/ }),

/***/ 65842:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/bakery-search/bakery/shopping-cart/shopping-cart.page.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".spinner {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.toolbar {\n  padding: 1vh 0;\n  --background: #F2F2F2;\n}\n.toolbar__button {\n  --icon-font-size: 35px;\n}\n.toolbar__title {\n  padding: 0 0 0 3vw;\n  font: normal normal 500 25px/30px Montserrat;\n  text-transform: capitalize;\n  color: #493735;\n}\n\n.shopping-cart {\n  font: normal normal 400 15px/19px Montserrat;\n  color: #493735;\n}\n\n.date {\n  padding: 1.11vh 4.5vw 3.56vh 6.67vw;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.date__title {\n  font: normal normal 400 20px/24px Montserrat;\n}\n.date__btn-icon {\n  font-size: 14px;\n}\n\n.product-list {\n  padding: 0 9.5vw 0;\n}\n.product-list .grid {\n  padding: 0;\n}\n.product-list .grid .item {\n  padding-bottom: 1.45vh;\n}\n.product-list .grid__row {\n  padding: 1vh 0;\n}\n.product-list .grid__row_total {\n  border-top: 1px solid #c3bebe;\n}\n.product-list .grid .controls {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0;\n}\n.product-list .grid .controls__remove-icon {\n  font-size: 21px;\n}\n.product-list .grid .controls__btn {\n  width: 30px;\n  height: 21px;\n  margin-left: 10px;\n  border: 1px solid #707070;\n  text-align: center;\n}\n.product-list .grid .controls__btn:nth-of-type(1) {\n  margin: 0;\n}\n.product-list .grid__col {\n  padding: 0;\n}\n.product-list .grid__col .product-count {\n  width: 5px;\n}\n.product-list .grid__col .notification {\n  color: red;\n  font-size: 12px;\n  font-style: italic;\n}\n.product-list .grid__col:last-child {\n  text-align: right;\n}\n.product-list .grid .product_crossed-out {\n  text-decoration: line-through;\n  -webkit-text-decoration-line: line-through;\n}\n\n.buttons-wrapper {\n  padding: 9.85vh 5.3vw;\n  text-align: center;\n}\n.buttons-wrapper__btn {\n  height: 10vh;\n  margin: 0 0 2.22vh;\n  --border-radius: 12px;\n  font: normal normal 600 18px/22px Montserrat;\n  text-transform: capitalize;\n}\n.buttons-wrapper__btn:first-child {\n  --background: #CBCBCB;\n}\n.buttons-wrapper__btn:last-child {\n  --background: #0E8DF1;\n}\n.buttons-wrapper .btn__label {\n  text-transform: none;\n  padding: 5px 0 0;\n  font: normal normal 400 12px/15px Montserrat;\n}\n.buttons-wrapper__link {\n  padding: 2vh 0 0;\n  display: inline-block;\n  text-decoration: underline;\n}\n\n.absent-product {\n  width: 100%;\n  height: 5vh;\n  color: gray;\n}\n.absent-product .info-message {\n  padding: 0;\n  text-align: center;\n}\n\n.line-through {\n  text-decoration: line-through;\n  color: gray;\n}\n\nion-item {\n  margin-right: 15vh;\n}\n\n.special_price {\n  color: #F44336;\n  font-weight: bold;\n}\n\n.toggler-block {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 50%;\n  min-width: 155px;\n}\n.toggler-block span {\n  margin-right: 1vh;\n}\n\n.delivery-address {\n  padding: 16px;\n  background: #ffffff;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.delivery-address .no-address {\n  text-align: center;\n  padding: 20px;\n}\n.delivery-address .no-address p {\n  margin-bottom: 12px;\n  color: #666;\n}\n.delivery-address .no-address ion-button {\n  --border-color: #0E8DF1;\n  --color: #0E8DF1;\n}\n.delivery-address .address-details-container {\n  margin: 12px 0;\n  padding: 8px 0;\n}\n.delivery-address .address-details-container .address-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 8px;\n}\n.delivery-address .address-details-container .address-header h2 {\n  margin: 0;\n  flex: 1;\n}\n.delivery-address .address-details-container .address-header .edit-address-btn {\n  margin: 0;\n  padding: 4px;\n  min-height: auto;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --padding-top: 4px;\n  --padding-bottom: 4px;\n}\n.delivery-address .address-details-container .address-details,\n.delivery-address .address-details-container .location-details,\n.delivery-address .address-details-container .contact-details,\n.delivery-address .address-details-container .country {\n  margin-bottom: 4px;\n}\n.delivery-address h2 {\n  margin: 0 0 8px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #493735;\n}\n.delivery-address p {\n  margin: 4px 0;\n  font-size: 14px;\n  color: #666;\n  line-height: 1.4;\n}\n.delivery-address .address-details, .delivery-address .location-details, .delivery-address .contact-details, .delivery-address .country {\n  margin-bottom: 4px;\n}\n.delivery-address ion-button {\n  margin-top: 8px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/bakery-search/bakery/shopping-cart/shopping-cart.page.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AACF;;AAEA;EACE,cAAA;EACA,qBAAA;AACF;AACE;EACE,sBAAA;AACJ;AAEE;EACE,kBAAA;EACA,4CAAA;EACA,0BAAA;EACA,cAAA;AAAJ;;AAIA;EACE,4CAAA;EACA,cAAA;AADF;;AAIA;EACE,mCAAA;EACA,aAAA;EACA,8BAAA;EACA,uBAAA;AADF;AAGE;EACE,4CAAA;AADJ;AAQE;EACE,eAAA;AANJ;;AAUA;EACE,kBAAA;AAPF;AASE;EACE,UAAA;AAPJ;AASI;EACE,sBAAA;AAPN;AAUI;EACE,cAAA;AARN;AASM;EACE,6BAAA;AAPR;AAWI;EACE,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,UAAA;AATN;AAUM;EACE,eAAA;AARR;AAUM;EACE,WAAA;EACA,YAAA;EACA,iBAAA;EACA,yBAAA;EACA,kBAAA;AARR;AASQ;EACE,SAAA;AAPV;AAYI;EACE,UAAA;AAVN;AAWM;EACE,UAAA;AATR;AAWM;EACE,UAAA;EACA,eAAA;EACA,kBAAA;AATR;AAWM;EACE,iBAAA;AATR;AAYI;EACE,6BAAA;EACA,0CAAA;AAVN;;AAeA;EACE,qBAAA;EACA,kBAAA;AAZF;AAaE;EACE,YAAA;EACA,kBAAA;EACA,qBAAA;EACA,4CAAA;EACA,0BAAA;AAXJ;AAYI;EACE,qBAAA;AAVN;AAYI;EACE,qBAAA;AAVN;AAcI;EACE,oBAAA;EACA,gBAAA;EACA,4CAAA;AAZN;AAeE;EACE,gBAAA;EACA,qBAAA;EACA,0BAAA;AAbJ;;AAgBA;EACE,WAAA;EACA,WAAA;EACA,WAAA;AAbF;AAcE;EACE,UAAA;EACA,kBAAA;AAZJ;;AAeA;EACE,6BAAA;EACA,WAAA;AAZF;;AAcA;EACE,kBAAA;AAXF;;AAcA;EACE,cAAA;EACA,iBAAA;AAXF;;AAcA;EACE,aAAA;EACA,2BAAA;EACA,mBAAA;EACA,UAAA;EACA,gBAAA;AAXF;AAYE;EACE,iBAAA;AAVJ;;AAaA;EACE,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;EACA,wCAAA;AAVF;AAYE;EACE,kBAAA;EACA,aAAA;AAVJ;AAYI;EACE,mBAAA;EACA,WAAA;AAVN;AAaI;EACE,uBAAA;EACA,gBAAA;AAXN;AAeE;EACE,cAAA;EACA,cAAA;AAbJ;AAeI;EACE,aAAA;EACA,8BAAA;EACA,uBAAA;EACA,kBAAA;AAbN;AAeM;EACE,SAAA;EACA,OAAA;AAbR;AAgBM;EACE,SAAA;EACA,YAAA;EACA,gBAAA;EACA,oBAAA;EACA,kBAAA;EACA,kBAAA;EACA,qBAAA;AAdR;AAkBI;;;;EAIE,kBAAA;AAhBN;AAoBE;EACE,eAAA;EACA,eAAA;EACA,gBAAA;EACA,cAAA;AAlBJ;AAqBE;EACE,aAAA;EACA,eAAA;EACA,WAAA;EACA,gBAAA;AAnBJ;AAsBE;EACE,kBAAA;AApBJ;AAuBE;EACE,eAAA;AArBJ","sourcesContent":[".spinner {\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.toolbar {\r\n  padding: 1vh 0;\r\n  --background: #F2F2F2;\r\n\r\n  &__button {\r\n    --icon-font-size: 35px;\r\n  }\r\n\r\n  &__title {\r\n    padding: 0 0 0 3vw;\r\n    font: normal normal 500 25px/30px Montserrat;\r\n    text-transform: capitalize;\r\n    color: #493735;\r\n  }\r\n}\r\n\r\n.shopping-cart {\r\n  font: normal normal 400 15px/19px Montserrat;\r\n  color: #493735;\r\n}\r\n\r\n.date {\r\n  padding: 1.11vh 4.5vw 3.56vh 6.67vw;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n\r\n  &__title {\r\n    font: normal normal 400 20px/24px Montserrat;\r\n\r\n    &_purple {\r\n      //color: #FF68B4;\r\n    }\r\n  }\r\n\r\n  &__btn-icon {\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n.product-list {\r\n  padding: 0 9.5vw 0;\r\n\r\n  .grid {\r\n    padding: 0;\r\n\r\n    .item {\r\n      padding-bottom: 1.45vh;\r\n    }\r\n\r\n    &__row {\r\n      padding: 1vh 0;\r\n      &_total {\r\n        border-top: 1px solid #c3bebe;\r\n      }\r\n    }\r\n\r\n    .controls {\r\n      display: flex;\r\n      justify-content: flex-end;\r\n      align-items: center;\r\n      padding: 0;\r\n      &__remove-icon {\r\n        font-size: 21px;\r\n      }\r\n      &__btn {\r\n        width:30px;\r\n        height: 21px;\r\n        margin-left: 10px;\r\n        border: 1px solid #707070;\r\n        text-align: center;\r\n        &:nth-of-type(1) {\r\n          margin: 0;\r\n        }\r\n      }\r\n    }\r\n\r\n    &__col {\r\n      padding: 0;\r\n      .product-count {\r\n        width: 5px;\r\n      }\r\n      .notification {\r\n        color: red;\r\n        font-size: 12px;\r\n        font-style: italic;\r\n      }\r\n      &:last-child {\r\n        text-align: right;\r\n      }\r\n    }\r\n    .product_crossed-out {\r\n      text-decoration: line-through;\r\n      -webkit-text-decoration-line: line-through;\r\n    }\r\n  }\r\n}\r\n\r\n.buttons-wrapper {\r\n  padding: 9.85vh 5.3vw;\r\n  text-align: center;\r\n  &__btn {\r\n    height: 10vh;\r\n    margin: 0 0 2.22vh;\r\n    --border-radius: 12px;\r\n    font: normal normal 600 18px/22px Montserrat;\r\n    text-transform: capitalize;\r\n    &:first-child {\r\n      --background: #CBCBCB;\r\n    }\r\n    &:last-child {\r\n      --background: #0E8DF1;\r\n    }\r\n  }\r\n  .btn {\r\n    &__label {\r\n      text-transform: none;\r\n      padding: 5px 0 0;\r\n      font: normal normal 400 12px/15px Montserrat;\r\n    }\r\n  }\r\n  &__link {\r\n    padding: 2vh 0 0;\r\n    display: inline-block;\r\n    text-decoration: underline;\r\n  }\r\n}\r\n.absent-product {\r\n  width: 100%;\r\n  height: 5vh;\r\n  color: gray;\r\n  .info-message {\r\n    padding: 0;\r\n    text-align: center;\r\n  }\r\n}\r\n.line-through {\r\n  text-decoration: line-through;\r\n  color: gray;\r\n}\r\nion-item {\r\n  margin-right: 15vh;\r\n}\r\n\r\n.special_price {\r\n  color: #F44336;\r\n  font-weight: bold;\r\n  //margin-right: 1vh;\r\n}\r\n.toggler-block {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  width: 50%;\r\n  min-width: 155px;\r\n  span {\r\n    margin-right: 1vh;\r\n  }\r\n}\r\n.delivery-address {\r\n  padding: 16px;\r\n  background: #ffffff;\r\n  border-radius: 8px;\r\n  margin-bottom: 16px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n\r\n  .no-address {\r\n    text-align: center;\r\n    padding: 20px;\r\n\r\n    p {\r\n      margin-bottom: 12px;\r\n      color: #666;\r\n    }\r\n\r\n    ion-button {\r\n      --border-color: #0E8DF1;\r\n      --color: #0E8DF1;\r\n    }\r\n  }\r\n\r\n  .address-details-container {\r\n    margin: 12px 0;\r\n    padding: 8px 0;\r\n\r\n    .address-header {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      align-items: flex-start;\r\n      margin-bottom: 8px;\r\n\r\n      h2 {\r\n        margin: 0;\r\n        flex: 1;\r\n      }\r\n\r\n      .edit-address-btn {\r\n        margin: 0;\r\n        padding: 4px;\r\n        min-height: auto;\r\n        --padding-start: 4px;\r\n        --padding-end: 4px;\r\n        --padding-top: 4px;\r\n        --padding-bottom: 4px;\r\n      }\r\n    }\r\n\r\n    .address-details,\r\n    .location-details,\r\n    .contact-details,\r\n    .country {\r\n      margin-bottom: 4px;\r\n    }\r\n  }\r\n\r\n  h2 {\r\n    margin: 0 0 8px;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    color: #493735;\r\n  }\r\n\r\n  p {\r\n    margin: 4px 0;\r\n    font-size: 14px;\r\n    color: #666;\r\n    line-height: 1.4;\r\n  }\r\n\r\n  .address-details, .location-details, .contact-details, .country {\r\n    margin-bottom: 4px;\r\n  }\r\n\r\n  ion-button {\r\n    margin-top: 8px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 32976:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/bakery-search/bakery/shopping-cart/shopping-cart.page.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <div *ngIf=\"reorder === false; else reorderBlock\">\r\n    <ion-toolbar mode=\"ios\" class=\"toolbar\">\r\n      <ion-buttons slot=\"start\" >\r\n        <ion-back-button  class=\"toolbar__button\"\r\n                          [icon]=\"'close-outline'\" mode=\"md\" defaultHref=\"/bakery-search/bakery\"></ion-back-button>\r\n      </ion-buttons>\r\n\r\n      <h1 class=\"toolbar__title ion-text-left\">{{ 'shoppingCart.header' | translate }}</h1>\r\n    </ion-toolbar>\r\n  </div>\r\n  <ng-template #reorderBlock>\r\n    <ion-toolbar mode=\"ios\" class=\"toolbar\">\r\n      <ion-buttons slot=\"start\" >\r\n        <ion-back-button  class=\"toolbar__button\"\r\n                          [icon]=\"'close-outline'\" mode=\"md\"  (click)=\"redirectToMain()\"></ion-back-button>\r\n      </ion-buttons>\r\n      <h1 class=\"toolbar__title ion-text-left\">{{ 'shoppingCart.header' | translate }}</h1>\r\n    </ion-toolbar>\r\n  </ng-template>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"shopping-cart\">\r\n    <div class=\"date\" *ngIf=\"!isDelveryAvailable\">\r\n      <h2 class=\"date__title\">{{ 'shoppingCart.pickUp' | translate }}:\r\n        <span class=\"date__title_purple\">\r\n          {{ date | date:'EEEE, d.M.yyyy,  H:mm': '' : dateLocale}}\r\n          {{ 'orders.hrs' | translate }}</span></h2>\r\n      <ion-button fill=\"none\" size=\"small\" (click)=\"presentVerifyDateModal()\">\r\n        <ion-icon class=\"date__btn-icon\" src=\"../../../../../assets/icons/shopping-cart/pen.svg\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n    <div class=\"delivery-address\" *ngIf=\"isDelveryAvailable\">\r\n      <div *ngIf=\"!defaultAddress\" class=\"no-address\">\r\n        <p>{{ 'shoppingCart.noDeliveryAddress' | translate }}</p>\r\n        <ion-button fill=\"outline\" size=\"small\" (click)=\"navigateToAddresses($event)\" (blur)=\"onAddressButtonBlur($event)\">\r\n          {{ 'shoppingCart.addAddress' | translate }}\r\n        </ion-button>\r\n      </div>\r\n      <div *ngIf=\"defaultAddress\" class=\"address-details-container\">\r\n        <div class=\"address-header\">\r\n          <h2>{{ defaultAddress?.full_name }}</h2>\r\n          <ion-button fill=\"none\" size=\"small\" (click)=\"navigateToAddresses($event)\" (blur)=\"onAddressButtonBlur($event)\" class=\"edit-address-btn\">\r\n            <ion-icon class=\"date__btn-icon\" src=\"../../../../../assets/icons/shopping-cart/pen.svg\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n        <p class=\"address-details\">\r\n          {{ defaultAddress?.address_line_1 }}\r\n          <span *ngIf=\"defaultAddress?.address_line_2\">, {{ defaultAddress?.address_line_2 }}</span>\r\n        </p>\r\n        <p class=\"location-details\">\r\n          {{ defaultAddress?.city }}{{ defaultAddress?.state ? ', ' + defaultAddress?.state : '' }}{{ defaultAddress?.postal ? ', ' + defaultAddress?.postal : '' }}\r\n        </p>\r\n        <p *ngIf=\"defaultAddress?.country\" class=\"country\">{{ defaultAddress?.country }}</p>\r\n        <p class=\"contact-details\">\r\n          {{ defaultAddress?.phone_number }}\r\n          <span *ngIf=\"defaultAddress?.email\">, {{ defaultAddress?.email }}</span>\r\n        </p>\r\n        <!-- Debug info -->\r\n      </div>\r\n    </div>\r\n    <div class=\"product-list\">\r\n      <ion-grid class=\"grid\">\r\n        <div class=\"item\" *ngFor=\"let product of cartService.getCart(), let i = index\">\r\n          <ion-row class=\"grid__row\">\r\n            <ion-col class=\"grid__col\" size=\"1\">{{i + 1}}</ion-col>\r\n            <ion-col class=\"grid__col\" size=\"7\">\r\n              <p><span class=\"product-count\">{{product.count}}</span> x {{product.name}} </p>\r\n<!--              <p class=\"notification\" *ngIf=\"!product.isAvailable\">Product not available</p>-->\r\n            </ion-col>\r\n            <ion-col class=\"grid__col \"\r\n                     *ngIf=\"product.special_price === product.price\">\r\n              <span [class.product_crossed-out]=\"saleServ.checkSale(date, product)\">\r\n              {{product.old_price | currency:'EUR':'symbol'}}\r\n              </span>\r\n            </ion-col>\r\n            <ion-col class=\"grid__col\"\r\n                     *ngIf=\"product.special_price !== product.price\">\r\n              <span [class.product_crossed-out]=\"saleServ.checkSale(date, product)\">\r\n                {{product.price | currency:'EUR':'symbol'}}\r\n              </span>\r\n\r\n            </ion-col>\r\n            <ion-col class=\"grid__col special_price\" *ngIf=\"saleServ.checkSale(date, product)\">{{product.special_price | currency:'EUR':'symbol'}}</ion-col>\r\n\r\n          </ion-row>\r\n          <ion-row class=\"grid__row controls\">\r\n            <div class=\"toggler-block\" *ngIf=\"product?.sliced === 0 || product?.sliced === 1 \">\r\n              <span >{{'sliced.cut' | translate}}</span>\r\n              <ion-toggle slot=\"start\" name=\"{{product.id}}\" color=\"secondary\" checked=\"{{!!product?.sliced}}\" (ionChange)=\"cutToggler($event)\"></ion-toggle>\r\n            </div>\r\n            <ion-button fill=\"none\" size=\"small\" (click)=\"delete(i)\">\r\n              <ion-icon class=\"controls__remove-icon\"\r\n                        src=\"../../../../../assets/icons/shopping-cart/trash.svg\"></ion-icon>\r\n            </ion-button>\r\n            <div class=\"controls__btn\" (click)=\"reduce(product)\">-</div>\r\n            <div class=\"controls__btn\" (click)=\"add(product)\">+</div>\r\n          </ion-row>\r\n\r\n        </div>\r\n\r\n        <div class=\"absent-product\"  *ngIf=\"reorder\">\r\n          <ion-row class=\"grid__row\" *ngFor=\"let item of cartService.getAbsentCart(), let i = index\" >\r\n            <ion-col class=\"grid__col\" size=\"1\">{{i + 1}}</ion-col>\r\n            <ion-col class=\"grid__col line-through\" size=\"4\">{{item[i].product_name}}</ion-col>\r\n            <ion-col class=\"info-message\"><span>{{ 'orders.notAvailable' | translate }}</span></ion-col>\r\n          </ion-row>\r\n        </div>\r\n        <ion-row class=\"grid__row grid__row_total\">\r\n          <ion-col class=\"grid__col\" size=\"1\"></ion-col>\r\n          <ion-col class=\"grid__col\" size=\"6\">{{ 'orders.total' | translate }}</ion-col>\r\n          <ion-col class=\"grid__col\">\r\n            {{cartService.getTotalPrice() | currency:'EUR':'symbol'}}</ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n\r\n    <div class=\"buttons-wrapper\">\r\n      <ion-button class=\"buttons-wrapper__btn\" expand=\"block\"\r\n                  (click)=\"goToBakery()\"\r\n                  *ngIf=\"!reorder\"\r\n                  >{{ 'shoppingCart.addMore' | translate }}</ion-button>\r\n      <ion-button class=\"buttons-wrapper__btn btn\" color=\"primary\" expand=\"block\" (click)=\"checkout()\" >\r\n        <div>\r\n          <p>{{ 'shoppingCart.checkout' | translate }}\r\n          ({{cartService.getTotalPrice() | currency:'EUR':'symbol'}})</p>\r\n          <p class=\"btn__label\" *ngIf=\"lastPaymentMethod\">{{ 'shoppingCart.lastPaymentMethod' | translate }}\r\n            {{lastPaymentMethod}}</p>\r\n        </div>\r\n      </ion-button>\r\n      <a class=\"buttons-wrapper__link\" (click)=\"chooseOtherPayment()\" *ngIf=\"lastPaymentMethod\">\r\n        {{ 'shoppingCart.chooseOtherPayment' | translate }}</a>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_bakery-search_bakery_shopping-cart_shopping-cart_module_ts.js.map