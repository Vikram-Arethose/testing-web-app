(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_components_module_ts"],{

/***/ 35703:
/*!*****************************************************************!*\
  !*** ./src/app/components/bakery-item/bakery-item.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BakeryItemComponent": () => (/* binding */ BakeryItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _bakery_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bakery-item.component.html?ngResource */ 56811);
/* harmony import */ var _bakery_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bakery-item.component.scss?ngResource */ 28144);
/* harmony import */ var _bakery_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bakery_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_bakery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bakery.service */ 24934);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ 6858);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/account.service */ 89876);
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/logger.service */ 51273);









let BakeryItemComponent = class BakeryItemComponent {
  get openUntil() {
    let todayOpeningHours = this.bakery.openingHours?.default[this.today];
    if (Array.isArray(todayOpeningHours) && todayOpeningHours.length !== 3) {
      todayOpeningHours = todayOpeningHours.filter(item => item.start && item.end);
      if (todayOpeningHours.length > 0) {
        return todayOpeningHours[todayOpeningHours.length - 1]?.end;
      }
    }
  }
  constructor(accountServ, bakeryServ, httpServ, logger, router) {
    this.accountServ = accountServ;
    this.bakeryServ = bakeryServ;
    this.httpServ = httpServ;
    this.logger = logger;
    this.router = router;
    this.favouriteClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.iconHeartOutline = '../../../assets/icons/bakery/heart-outline.svg';
    this.iconHeartFilled = '../../../assets/icons/bakery/heart-filled.svg';
    this.$guest = this.accountServ.sharedGuest$;
  }
  ngOnInit() {
    this.setToday();
    this.allWeek = this.bakery.openingHours.allWeek;
  }
  onFavorite(bakeryId, $event) {
    this.httpServ.removeAddToFavorites(bakeryId).subscribe(res => {
      this.favouriteClicked.emit();
    });
    $event.stopPropagation();
  }
  setToday() {
    const date = new Date();
    const day = date.getDay();
    const weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    this.today = weekDays[day];
  }
  openBakery(bakeryId) {
    const navigationExtras = {
      state: {
        bakeryId
      }
    };
    this.router.navigate(['/bakery-search/bakery'], navigationExtras);
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService
  }, {
    type: _services_bakery_service__WEBPACK_IMPORTED_MODULE_2__.BakeryService
  }, {
    type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService
  }, {
    type: _services_logger_service__WEBPACK_IMPORTED_MODULE_5__.LoggerService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }];
  static #_2 = this.propDecorators = {
    bakery: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    today: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    favouriteClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
    }]
  };
};
BakeryItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-bakery-item',
  template: _bakery_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_bakery_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], BakeryItemComponent);


/***/ }),

/***/ 45642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-header/menu-header.component */ 68894);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _pick_up_date_pick_up_date_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pick-up-date/pick-up-date.component */ 33814);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-details/product-details.component */ 16525);
/* harmony import */ var _payment_methods_payment_methods_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-methods/payment-methods.component */ 39611);
/* harmony import */ var _google_pay_google_pay_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./google-pay/google-pay.component */ 95163);
/* harmony import */ var _payment_methods_debit_debit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-methods/debit/debit.component */ 58909);
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spinner/spinner.component */ 94132);
/* harmony import */ var _bakery_item_bakery_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bakery-item/bakery-item.component */ 35703);
/* harmony import */ var _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-item/product-item.component */ 35118);
/* harmony import */ var _login_first_login_first_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login-first/login-first.component */ 44507);
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./change-password/change-password.component */ 91274);
/* harmony import */ var _sliced_modal_sliced_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sliced-modal/sliced-modal.component */ 39434);
















// @ts-ignore

// @ts-ignore

let ComponentsModule = class ComponentsModule {};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
  declarations: [_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_0__.MenuHeaderComponent, _pick_up_date_pick_up_date_component__WEBPACK_IMPORTED_MODULE_1__.PickUpDateComponent, _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__.ProductDetailsComponent, _payment_methods_payment_methods_component__WEBPACK_IMPORTED_MODULE_3__.PaymentMethodsComponent, _google_pay_google_pay_component__WEBPACK_IMPORTED_MODULE_4__.GooglePayComponent, _payment_methods_debit_debit_component__WEBPACK_IMPORTED_MODULE_5__.DebitComponent, _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__.SpinnerComponent, _bakery_item_bakery_item_component__WEBPACK_IMPORTED_MODULE_7__.BakeryItemComponent, _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_8__.ProductItemComponent, _login_first_login_first_component__WEBPACK_IMPORTED_MODULE_9__.LoginFirstComponent, _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__.ChangePasswordComponent, _sliced_modal_sliced_modal_component__WEBPACK_IMPORTED_MODULE_11__.SlicedModalComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule],
  exports: [_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_0__.MenuHeaderComponent, _pick_up_date_pick_up_date_component__WEBPACK_IMPORTED_MODULE_1__.PickUpDateComponent, _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__.ProductDetailsComponent, _payment_methods_payment_methods_component__WEBPACK_IMPORTED_MODULE_3__.PaymentMethodsComponent, _google_pay_google_pay_component__WEBPACK_IMPORTED_MODULE_4__.GooglePayComponent, _payment_methods_debit_debit_component__WEBPACK_IMPORTED_MODULE_5__.DebitComponent, _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__.SpinnerComponent, _bakery_item_bakery_item_component__WEBPACK_IMPORTED_MODULE_7__.BakeryItemComponent, _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_8__.ProductItemComponent, _login_first_login_first_component__WEBPACK_IMPORTED_MODULE_9__.LoginFirstComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule]
})], ComponentsModule);


/***/ }),

/***/ 95163:
/*!***************************************************************!*\
  !*** ./src/app/components/google-pay/google-pay.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GooglePayComponent": () => (/* binding */ GooglePayComponent)
/* harmony export */ });
/* harmony import */ var D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _google_pay_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-pay.component.html?ngResource */ 66921);
/* harmony import */ var _google_pay_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./google-pay.component.scss?ngResource */ 9400);
/* harmony import */ var _google_pay_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_google_pay_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cart.service */ 90910);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/date.service */ 82963);









let GooglePayComponent = class GooglePayComponent {
  constructor(cartService, modalController, router, dateService) {
    this.cartService = cartService;
    this.modalController = modalController;
    this.router = router;
    this.dateService = dateService;
  }
  ngOnInit() {}
  onPay() {
    var _this = this;
    return (0,D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.modalController.dismiss();
      const navigationExtras = {
        state: {
          isConfirm: true
        }
      };
      yield _this.router.navigate(['orders'], navigationExtras);
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }, {
    type: _services_date_service__WEBPACK_IMPORTED_MODULE_4__.DateService
  }];
};
GooglePayComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-google-pay',
  template: _google_pay_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_google_pay_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], GooglePayComponent);


/***/ }),

/***/ 44507:
/*!*****************************************************************!*\
  !*** ./src/app/components/login-first/login-first.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginFirstComponent": () => (/* binding */ LoginFirstComponent)
/* harmony export */ });
/* harmony import */ var D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _login_first_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-first.component.html?ngResource */ 47195);
/* harmony import */ var _login_first_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-first.component.scss?ngResource */ 21939);
/* harmony import */ var _login_first_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_login_first_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login.service */ 54120);







let LoginFirstComponent = class LoginFirstComponent {
  constructor(modalCtrl, loginServ) {
    this.modalCtrl = modalCtrl;
    this.loginServ = loginServ;
  }
  ngOnInit() {}
  close() {
    this.modalCtrl.dismiss();
  }
  toLogin() {
    var _this = this;
    return (0,D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.loginServ.logout();
      _this.close();
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
  }, {
    type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService
  }];
};
LoginFirstComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-login-first',
  template: _login_first_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_login_first_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], LoginFirstComponent);


/***/ }),

/***/ 68894:
/*!*****************************************************************!*\
  !*** ./src/app/components/menu-header/menu-header.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuHeaderComponent": () => (/* binding */ MenuHeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _menu_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-header.component.html?ngResource */ 73978);
/* harmony import */ var _menu_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-header.component.scss?ngResource */ 21283);
/* harmony import */ var _menu_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menu_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let MenuHeaderComponent = class MenuHeaderComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
  static #_2 = this.propDecorators = {
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  };
};
MenuHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-menu-header',
  template: _menu_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_menu_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], MenuHeaderComponent);


/***/ }),

/***/ 58909:
/*!*********************************************************************!*\
  !*** ./src/app/components/payment-methods/debit/debit.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DebitComponent": () => (/* binding */ DebitComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _debit_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debit.component.html?ngResource */ 83267);
/* harmony import */ var _debit_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debit.component.scss?ngResource */ 23287);
/* harmony import */ var _debit_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_debit_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/cart.service */ 90910);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/logger.service */ 51273);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/http.service */ 6858);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/alert.service */ 25970);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_bakery_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/bakery.service */ 24934);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/loading.service */ 4471);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);













let DebitComponent = class DebitComponent {
  constructor(cartServ, alertServ, bakeryServ, fb, httpServ, loadingServ, location, logger, modalController) {
    this.cartServ = cartServ;
    this.alertServ = alertServ;
    this.bakeryServ = bakeryServ;
    this.fb = fb;
    this.httpServ = httpServ;
    this.loadingServ = loadingServ;
    this.location = location;
    this.logger = logger;
    this.modalController = modalController;
  }
  ngOnInit() {
    this.initDebitForm();
  }
  initDebitForm() {
    this.form = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      surname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      street: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      stNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      postcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      accountOwner: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      iban: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
    });
  }
  buy() {
    this.loadingServ.presentLoading();
    const debitArgs = this.dataForCreateStx;
    debitArgs.first_name = this.form.value.name;
    debitArgs.last_name = this.form.value.surname;
    debitArgs.street = this.form.value.street;
    debitArgs.st_number = this.form.value.stNumber;
    debitArgs.city = this.form.value.city;
    debitArgs.postal_code = this.form.value.postcode;
    debitArgs.account_owner = this.form.value.accountOwner;
    debitArgs.iban = this.form.value.iban;
    this.httpServ.debitPayment(debitArgs).subscribe(res => {
      this.loadingServ.dismiss();
      this.logger.log('http res: ', res);
      if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS' && res.data?.order_id) {
        this.bakeryServ.openConfirmOrder(res.data.order_id);
        this.cartServ.clearCart();
        this.modalController.dismiss();
      } else {
        this.alertServ.presentAlert();
      }
    });
  }
  back() {
    this.modalController.dismiss();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService
  }, {
    type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: _services_bakery_service__WEBPACK_IMPORTED_MODULE_6__.BakeryService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder
  }, {
    type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__.HttpService
  }, {
    type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.Location
  }, {
    type: _services_logger_service__WEBPACK_IMPORTED_MODULE_3__.LoggerService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
  }];
  static #_2 = this.propDecorators = {
    dataForCreateStx: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }]
  };
};
DebitComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-debit',
  template: _debit_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_debit_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DebitComponent);


/***/ }),

/***/ 39611:
/*!*************************************************************************!*\
  !*** ./src/app/components/payment-methods/payment-methods.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentMethodsComponent": () => (/* binding */ PaymentMethodsComponent)
/* harmony export */ });
/* harmony import */ var D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _payment_methods_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-methods.component.html?ngResource */ 75118);
/* harmony import */ var _payment_methods_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment-methods.component.scss?ngResource */ 82948);
/* harmony import */ var _payment_methods_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_payment_methods_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _google_pay_google_pay_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../google-pay/google-pay.component */ 95163);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/http.service */ 6858);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/alert.service */ 25970);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/cart.service */ 90910);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/date.service */ 82963);
/* harmony import */ var _services_bakery_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/bakery.service */ 24934);
/* harmony import */ var _debit_debit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./debit/debit.component */ 58909);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 49048);














let PaymentMethodsComponent = class PaymentMethodsComponent {
  constructor(alertServ, bakeryServ, cartServ, dateServ, httpServ, iab, modalController, platform) {
    this.alertServ = alertServ;
    this.bakeryServ = bakeryServ;
    this.cartServ = cartServ;
    this.dateServ = dateServ;
    this.httpServ = httpServ;
    this.iab = iab;
    this.modalController = modalController;
    this.platform = platform;
    this.isAndroid = this.platform.is('android');
  }
  ngOnInit() {
    const val = this.cartServ.getPaymentSettings();
    console.log('*******', val);
    this.visiblePayPal = val.payment_paypal;
    this.minAmount = val.min_amount_paypal;
    console.log('this.visiblePayPal', this.visiblePayPal);
    this.bakeryServ.bakery.subscribe(res => this.bakery = res);
    this.dateServ.dateShared.subscribe(res => this.date = res);
  }
  onGooglePay() {
    var _this = this;
    return (0,D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.modalController.dismiss();
      const modal = yield _this.modalController.create({
        component: _google_pay_google_pay_component__WEBPACK_IMPORTED_MODULE_3__.GooglePayComponent,
        cssClass: 'google-pay-modal'
      });
      return yield modal.present();
    })();
  }
  closeModal() {
    this.modalController.dismiss();
  }
  makePaymentBy(paymentType) {
    switch (paymentType) {
      case 'credit':
        this.createSmartTransaction();
        break;
      case 'debit':
        this.presentDebitModal();
        break;
      case 'sofort':
        this.makeIabPayment('/payment/sofort');
        break;
      case 'paypal':
        if (this.checkTotalValue()) {
          return false;
        } else {
          this.makeIabPayment('/payment/paypal');
        }
        break;
    }
  }
  createSmartTransaction() {
    console.log('GET DATA FOR PAYMENT', this.bakeryServ.getDataForPayment(this.date));
    this.httpServ.createSmartTransaction(this.bakeryServ.getDataForPayment(this.date)).subscribe(res => {
      if (res) {
        this.creditCartPayment(res);
      }
    });
  }
  creditCartPayment(createStxRes) {
    const browser = this.httpServ.openCreditCardPayment(createStxRes.stx_id, createStxRes.user_id);
    this.httpServ.handleIabResult(browser);
  }
  makeIabPayment(url) {
    this.httpServ.iabPayment(url);
  }
  presentDebitModal() {
    var _this2 = this;
    return (0,D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.modalController.dismiss();
      const modal = yield _this2.modalController.create({
        component: _debit_debit_component__WEBPACK_IMPORTED_MODULE_9__.DebitComponent,
        componentProps: {
          dataForCreateStx: _this2.bakeryServ.getDataForPayment(_this2.date)
        }
      });
      return yield modal.present();
    })();
  }
  checkTotalValue() {
    return this.cartServ.getTotalPrice() > this.minAmount ? false : true;
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: _services_bakery_service__WEBPACK_IMPORTED_MODULE_8__.BakeryService
  }, {
    type: _services_cart_service__WEBPACK_IMPORTED_MODULE_6__.CartService
  }, {
    type: _services_date_service__WEBPACK_IMPORTED_MODULE_7__.DateService
  }, {
    type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__.HttpService
  }, {
    type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__.InAppBrowser
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform
  }];
};
PaymentMethodsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-payment-methods',
  template: _payment_methods_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_payment_methods_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], PaymentMethodsComponent);


/***/ }),

/***/ 33814:
/*!*******************************************************************!*\
  !*** ./src/app/components/pick-up-date/pick-up-date.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PickUpDateComponent": () => (/* binding */ PickUpDateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _pick_up_date_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pick-up-date.component.html?ngResource */ 23252);
/* harmony import */ var _pick_up_date_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pick-up-date.component.scss?ngResource */ 77366);
/* harmony import */ var _pick_up_date_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pick_up_date_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/date.service */ 82963);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/logger.service */ 51273);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/alert.service */ 25970);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/cart.service */ 90910);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_services_bakery_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/bakery.service */ 24934);













let PickUpDateComponent = class PickUpDateComponent {
  constructor(dateService, bakeryService, alertServ, logger, modalController, router, translate, cartServ) {
    this.dateService = dateService;
    this.bakeryService = bakeryService;
    this.alertServ = alertServ;
    this.logger = logger;
    this.modalController = modalController;
    this.router = router;
    this.translate = translate;
    this.cartServ = cartServ;
    this.isDelveryAvailable = false;
    this.cancel = this.translate.instant('dateChoose.cancel');
    this.done = this.translate.instant('dateChoose.done');
    this.today = new Date().toISOString();
  }
  ngOnInit() {
    this.bakeryService.bakeryDetails$.subscribe(details => {
      this.bakeryDetails = details;
      if (this.bakeryDetails && this.bakeryDetails.delivery && this.bakeryDetails.delivery == 1) this.isDelveryAvailable = true;
      console.log('bakeryDetails: ', this.bakeryDetails);
    });
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(9, 0, 0, 0);
    this.time = tomorrow.toISOString();
    this.tomorrow = tomorrow.toISOString();
    this.convertDate(this.date);
    this.onTomorrow();
    this.setActiveBtn();
    this.dateService.dateShared.subscribe(res => {
      if (res) {
        this.date = this.time = res;
        this.date = this.time = this.dateService.getDefaultMinOrderDate().toISOString();
        this.setActiveBtn(res);
        this.getPickersRanges();
      }
      this.dateGlobal = res;
    });
  }
  convertDate(date) {
    const language = localStorage.getItem('language');
    if (language === 'de') {
      this.currentDay = moment__WEBPACK_IMPORTED_MODULE_6__(date).locale('de').format('dddd, DD MMMM YY');
    }
    if (language === 'en') {
      this.currentDay = moment__WEBPACK_IMPORTED_MODULE_6__(date).locale('en').format('dddd, DD MMMM YY');
    } else {
      this.currentDay = moment__WEBPACK_IMPORTED_MODULE_6__(date).locale('de').format('dddd, DD MMMM YY');
    }
  }
  setActiveBtn(date) {
    if (!date) {
      date = this.date;
    }
    const receivedDate = date.split('T')[0];
    if (receivedDate === this.today.split('T')[0]) {
      this.activeBtn = 'today';
    } else if (receivedDate === this.tomorrow.split('T')[0]) {
      this.activeBtn = 'tomorrow';
    } else {
      this.activeBtn = null;
    }
  }
  onDelivery() {
    this.activeBtnDelTake = 'delivery';
  }
  onTakeaway() {
    this.activeBtnDelTake = 'takeaway';
  }
  onToday() {
    this.date = this.today;
    this.convertDate(this.date);
    this.setActiveBtn();
    this.getPickersRanges();
  }
  onTomorrow() {
    this.date = this.tomorrow;
    this.convertDate(this.date);
    this.setActiveBtn();
    this.getPickersRanges();
  }
  onCalendarChange(value) {
    this.date = value;
    this.convertDate(this.date);
    this.setActiveBtn();
    this.getPickersRanges();
  }
  onTimeChange($event) {
    this.time = $event.target.value;
  }
  onConfirm() {
    this.date = this.date.split('T')[0];
    this.time = this.time.split('T')[1];
    const dateForCheck = new Date(this.date + 'T' + this.time);
    if (this.dateService.checkSelectedDate(dateForCheck)) {
      this.dateService.changeDate(this.date + 'T' + this.time);
      this.closeModal();
    } else {
      this.activeBtn = null;
      this.alertServ.presentAlert(this.translate.instant('alert.bakeryNotWorkAtThisTime'));
      if (this.isVerify) {
        this.dateService.dateShared.subscribe(res => {
          this.date = this.time = res;
          this.setActiveBtn();
        });
      } else {
        this.dateService.changeDate(this.dateService.getDefaultMinOrderDate().toISOString());
      }
    }
    this.compareDate(this.date);
  }
  redirectToPay() {
    this.onConfirm();
    const navigationExtras = {
      state: {
        data: {
          branchId: this.reorderData.bakeryId,
          minOrderValue: 1,
          lastUsedPayment: this.reorderData.lastUsedPayment,
          reorder: true
        }
      }
    };
    this.router.navigate(['bakery-search/bakery/shopping-cart'], navigationExtras);
  }
  closeModal() {
    if (!this.dateGlobal) {
      this.router.navigate(['bakery-search']);
    }
    this.modalController.dismiss();
  }
  returnToBakeryList() {
    if (!this.isVerify) {
      this.router.navigate(['bakery-search']);
    }
    this.modalController.dismiss();
  }
  setTimePickerMin() {
    let timeRangeMin;
    const selectedDate = new Date(this.date || this.today);
    this.date === this.today ? timeRangeMin = 15 : timeRangeMin = 0;
    const minutes = selectedDate.getMinutes();
    this.timeHourOffset = -(selectedDate.getTimezoneOffset() / 60);
    if (minutes > 30 && minutes < 45) {
      selectedDate.setMinutes(45);
    }
    selectedDate.setHours(selectedDate.getHours() + this.timeHourOffset, selectedDate.getMinutes() + timeRangeMin);
    if (this.date && this.date.split('T')[0] !== this.today.split('T')[0]) {
      selectedDate.setHours(this.timeHourOffset, 0, 0, 0);
    }
    this.timePickerMin = selectedDate.toISOString();
    this.logger.log('timePicker: ', this.timePickerMin);
  }
  getPickersRanges() {
    this.datePickerMin = this.dateService.getDatePickerMin();
    this.datePickerMax = this.dateService.getDatePickerMax();
    this.setTimePickerMin();
  }
  compareDate(date) {
    this.cartServ.setActualDate(date);
    this.cartServ.getTotalPrice();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_date_service__WEBPACK_IMPORTED_MODULE_2__.DateService
  }, {
    type: src_app_services_bakery_service__WEBPACK_IMPORTED_MODULE_7__.BakeryService
  }, {
    type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
  }, {
    type: _services_logger_service__WEBPACK_IMPORTED_MODULE_3__.LoggerService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService
  }, {
    type: _services_cart_service__WEBPACK_IMPORTED_MODULE_5__.CartService
  }];
  static #_2 = this.propDecorators = {
    isVerify: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    repeatOrder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }],
    reorderData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
    }]
  };
};
PickUpDateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-pick-up-date',
  template: _pick_up_date_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_pick_up_date_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PickUpDateComponent);


/***/ }),

/***/ 16525:
/*!*************************************************************************!*\
  !*** ./src/app/components/product-details/product-details.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailsComponent": () => (/* binding */ ProductDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _product_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-details.component.html?ngResource */ 57913);
/* harmony import */ var _product_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-details.component.scss?ngResource */ 21142);
/* harmony import */ var _product_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_product_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/logger.service */ 51273);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var src_app_services_bakery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/bakery.service */ 24934);








let ProductDetailsComponent = class ProductDetailsComponent {
  get availability() {
    let bakeryDetails;
    let isDelveryAvailable;
    this.bakeryService.bakeryDetails$.subscribe(details => {
      bakeryDetails = details;
      if (bakeryDetails && bakeryDetails.delivery && bakeryDetails.delivery == 1) isDelveryAvailable = true;
      console.log('bakeryDetails: ', bakeryDetails);
    });
    let takeAwayOrDeliveryAvailability = isDelveryAvailable ? this.product?.deliver_availability : this.product?.availability_new;
    if (takeAwayOrDeliveryAvailability?.length === 7) {
      return this.translate.instant('productDetails.availableEveryDay');
    } else {
      if (takeAwayOrDeliveryAvailability == null || takeAwayOrDeliveryAvailability?.length === 0) {
        return this.translate.instant('productDetails.notAvailable');
      } else {
        const availableDaysLabels = takeAwayOrDeliveryAvailability?.map(item => item.label);
        return this.translate.instant('productDetails.only') + ' ' + availableDaysLabels?.join(', ');
      }
    }
  }
  constructor(modalController, logger, translate, bakeryService) {
    this.modalController = modalController;
    this.logger = logger;
    this.translate = translate;
    this.bakeryService = bakeryService;
  }
  ngOnInit() {}
  closeModal() {
    this.modalController.dismiss();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
  }, {
    type: _services_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService
  }, {
    type: src_app_services_bakery_service__WEBPACK_IMPORTED_MODULE_3__.BakeryService
  }];
  static #_2 = this.propDecorators = {
    product: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }]
  };
};
ProductDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-product-details',
  template: _product_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_product_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ProductDetailsComponent);


/***/ }),

/***/ 35118:
/*!*******************************************************************!*\
  !*** ./src/app/components/product-item/product-item.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductItemComponent": () => (/* binding */ ProductItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _product_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-item.component.html?ngResource */ 35927);
/* harmony import */ var _product_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-item.component.scss?ngResource */ 9115);
/* harmony import */ var _product_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_product_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ 90910);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/modal.service */ 71609);
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/logger.service */ 51273);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/account.service */ 89876);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _services_sale_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/sale.services */ 73030);










let ProductItemComponent = class ProductItemComponent {
  constructor(accountServ, cartServ, logger, modalServ, saleServ) {
    this.accountServ = accountServ;
    this.cartServ = cartServ;
    this.logger = logger;
    this.modalServ = modalServ;
    this.saleServ = saleServ;
    this.dateSource = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject('');
    this.dateFromDatePicker = this.dateSource.asObservable();
  }
  ngOnInit() {
    this.accountServ.sharedGuest$.subscribe(res => this.guest = res);
  }
  getProductCount(id) {
    return this.cartServ.getProductCount(id);
  }
  removeProductFromCart() {
    this.cartServ.removeProductFromCart(this.product);
  }
  addProductToCart() {
    this.cartServ.setActualDate(this.date);
    if (this.guest) {
      this.modalServ.presentLoginFirstModal();
    } else {
      if (this.product.product_category_id === 2) {
        const checkBasketCount = this.cartServ.getCart().findIndex(item => item.id === this.product.id);
        if (checkBasketCount === -1) {
          this.modalServ.presentSlicedModal(this.product);
        } else {
          this.cartServ.addProductToCart(this.product);
        }
      } else {
        this.cartServ.addProductToCart(this.product);
      }
    }
  }
  presentPickUpDateModal() {
    this.modalServ.presentPickUpDateModal();
  }
  presentProductDetailsModal() {
    this.modalServ.presentProductDetailsModal(this.product);
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_account_service__WEBPACK_IMPORTED_MODULE_5__.AccountService
  }, {
    type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService
  }, {
    type: _services_logger_service__WEBPACK_IMPORTED_MODULE_4__.LoggerService
  }, {
    type: _services_modal_service__WEBPACK_IMPORTED_MODULE_3__.ModalService
  }, {
    type: _services_sale_services__WEBPACK_IMPORTED_MODULE_6__.SaleServices
  }];
  static #_2 = this.propDecorators = {
    date: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }],
    product: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }]
  };
};
ProductItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-product-item',
  template: _product_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_product_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ProductItemComponent);


/***/ }),

/***/ 39434:
/*!*******************************************************************!*\
  !*** ./src/app/components/sliced-modal/sliced-modal.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlicedModalComponent": () => (/* binding */ SlicedModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _sliced_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sliced-modal.component.html?ngResource */ 44018);
/* harmony import */ var _sliced_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sliced-modal.component.scss?ngResource */ 62174);
/* harmony import */ var _sliced_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sliced_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/modal.service */ 71609);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cart.service */ 90910);






let SlicedModalComponent = class SlicedModalComponent {
  constructor(modalServ, cartService) {
    this.modalServ = modalServ;
    this.cartService = cartService;
  }
  ngOnInit() {}
  getAnswer(answer) {
    this.cartService.getModalAnswer(answer, this.product);
    this.modalServ.closeModal();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService
  }, {
    type: _services_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService
  }];
  static #_2 = this.propDecorators = {
    product: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }]
  };
};
SlicedModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-sliced-modal',
  template: _sliced_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_sliced_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SlicedModalComponent);


/***/ }),

/***/ 94132:
/*!*********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _spinner_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spinner.component.html?ngResource */ 69467);
/* harmony import */ var _spinner_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner.component.scss?ngResource */ 14001);
/* harmony import */ var _spinner_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_spinner_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let SpinnerComponent = class SpinnerComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
  static #_2 = this.propDecorators = {
    isLoading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  };
};
SpinnerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-spinner',
  template: _spinner_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_spinner_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SpinnerComponent);


/***/ }),

/***/ 71609:
/*!*******************************************!*\
  !*** ./src/app/services/modal.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalService": () => (/* binding */ ModalService)
/* harmony export */ });
/* harmony import */ var D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _components_pick_up_date_pick_up_date_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/pick-up-date/pick-up-date.component */ 33814);
/* harmony import */ var _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/product-details/product-details.component */ 16525);
/* harmony import */ var _components_login_first_login_first_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/login-first/login-first.component */ 44507);
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger.service */ 51273);
/* harmony import */ var _date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date.service */ 82963);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_payment_methods_payment_methods_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/payment-methods/payment-methods.component */ 39611);
/* harmony import */ var _components_sliced_modal_sliced_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/sliced-modal/sliced-modal.component */ 39434);












let ModalService = class ModalService {
  constructor(dateServ, modalController, loggerServ, router) {
    this.dateServ = dateServ;
    this.modalController = modalController;
    this.loggerServ = loggerServ;
    this.router = router;
    this.dateServ.dateShared.subscribe(res => this.date = res);
  }
  presentPickUpDateModal(isVerify, repeatOrder, reorderData) {
    var _this = this;
    return (0,D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalController.create({
        component: _components_pick_up_date_pick_up_date_component__WEBPACK_IMPORTED_MODULE_1__.PickUpDateComponent,
        cssClass: 'pick-up-date-modal',
        componentProps: {
          isVerify,
          repeatOrder,
          reorderData
        }
      });
      modal.onDidDismiss().then(res => {
        if (!_this.date) {
          _this.router.navigate(['bakery-search']);
        }
      });
      return yield modal.present();
    })();
  }
  presentProductDetailsModal(product) {
    var _this2 = this;
    return (0,D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalController.create({
        component: _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__.ProductDetailsComponent,
        cssClass: 'product-details-modal',
        componentProps: {
          product
        }
      });
      return yield modal.present();
    })();
  }
  presentLoginFirstModal() {
    var _this3 = this;
    return (0,D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalController.create({
        component: _components_login_first_login_first_component__WEBPACK_IMPORTED_MODULE_3__.LoginFirstComponent,
        cssClass: 'login-first-modal'
      });
      return yield modal.present();
    })();
  }
  presentPaymentMethodsModal() {
    var _this4 = this;
    return (0,D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this4.modalController.create({
        component: _components_payment_methods_payment_methods_component__WEBPACK_IMPORTED_MODULE_6__.PaymentMethodsComponent,
        cssClass: 'payment-methods-modal'
      });
      return yield modal.present();
    })();
  }
  presentSlicedModal(product) {
    var _this5 = this;
    return (0,D_VIKRAM_ionic_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this5.modalController.create({
        component: _components_sliced_modal_sliced_modal_component__WEBPACK_IMPORTED_MODULE_7__.SlicedModalComponent,
        cssClass: 'sliced-modal',
        showBackdrop: true,
        componentProps: {
          product
        }
      });
      return yield modal.present();
    })();
  }
  closeModal() {
    this.modalController.dismiss();
  }
  static #_ = this.ctorParameters = () => [{
    type: _date_service__WEBPACK_IMPORTED_MODULE_5__.DateService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
  }, {
    type: _logger_service__WEBPACK_IMPORTED_MODULE_4__.LoggerService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
  }];
};
ModalService = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
  providedIn: 'root'
})], ModalService);


/***/ }),

/***/ 28144:
/*!******************************************************************************!*\
  !*** ./src/app/components/bakery-item/bakery-item.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".bakery {\n  height: 102px;\n  display: flex;\n  border: 1px solid #D9D9D9;\n  border-radius: 5px;\n  color: #493735;\n}\n.bakery .col:nth-of-type(2) {\n  width: 140px;\n  padding: 0 5px 5px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.bakery .col:last-child {\n  align-self: flex-end;\n}\n.bakery__img {\n  width: 125px;\n  height: 76px;\n  object-fit: cover;\n  margin-right: 10px;\n}\n.bakery__stars {\n  margin: 5px 0;\n  width: 81px;\n}\n.bakery__title {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  padding: 10px 0 0;\n  font: normal normal 600 12px/15px Montserrat;\n}\n.bakery__text {\n  font: normal normal 400 8px/10px Montserrat;\n}\n.bakery__icons-row {\n  height: 20px;\n  margin: 0 8px 10px;\n  font-size: 19px;\n}\n.bakery__icons-row .icon {\n  padding: 0 10px 0 0;\n}\n.bakery .icon-like {\n  font-size: 25px;\n  padding: 0 5px 5px 0;\n}", "",{"version":3,"sources":["webpack://./src/app/components/bakery-item/bakery-item.component.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,aAAA;EACA,yBAAA;EACA,kBAAA;EACA,cAAA;AACF;AACI;EACE,YAAA;EACA,oBAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;AACN;AACI;EACE,oBAAA;AACN;AAEE;EACE,YAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;AAAJ;AAGE;EACE,aAAA;EACA,WAAA;AADJ;AAGE;EACE,oBAAA;EACA,qBAAA;EACA,4BAAA;EACA,gBAAA;EACA,iBAAA;EACA,4CAAA;AADJ;AAGE;EACE,2CAAA;AADJ;AAIE;EACE,YAAA;EACA,kBAAA;EACA,eAAA;AAFJ;AAGI;EACE,mBAAA;AADN;AAIE;EACE,eAAA;EACA,oBAAA;AAFJ","sourcesContent":[".bakery {\r\n  height: 102px;\r\n  display: flex;\r\n  border: 1px solid #D9D9D9;\r\n  border-radius: 5px;\r\n  color: #493735;\r\n  .col{\r\n    &:nth-of-type(2) {\r\n      width: 140px;\r\n      padding: 0 5px 5px 0;\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: space-between;\r\n    }\r\n    &:last-child {\r\n      align-self: flex-end;\r\n    }\r\n  }\r\n  &__img {\r\n    width: 125px;\r\n    height: 76px;\r\n    object-fit: cover;\r\n    margin-right: 10px;\r\n\r\n  }\r\n  &__stars {\r\n    margin: 5px 0;\r\n    width: 81px;\r\n  }\r\n  &__title {\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 2;\r\n    -webkit-box-orient: vertical;\r\n    overflow: hidden;\r\n    padding: 10px 0 0;\r\n    font: normal normal 600 12px/15px Montserrat;\r\n  }\r\n  &__text {\r\n    font: normal normal 400 8px/10px Montserrat;\r\n  }\r\n\r\n  &__icons-row {\r\n    height: 20px;\r\n    margin: 0 8px 10px;\r\n    font-size: 19px;\r\n    .icon {\r\n      padding: 0 10px 0 0;\r\n    }\r\n  }\r\n  .icon-like {\r\n    font-size: 25px;\r\n    padding: 0 5px 5px 0;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9400:
/*!****************************************************************************!*\
  !*** ./src/app/components/google-pay/google-pay.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container {\n  width: 100%;\n  border-top: 1px solid #707070;\n  color: #493735;\n}\n\n.payment {\n  height: 102px;\n  display: flex;\n  align-items: center;\n}\n.payment__img-container {\n  width: 85px;\n  margin: 5px 0 0 8vw;\n  text-align: center;\n}\n\n.personal-data .item {\n  display: flex;\n  align-items: center;\n  border-top: 1px solid #CBCBCB;\n}\n.personal-data .item:last-child {\n  border-bottom: 1px solid #CBCBCB;\n}\n.personal-data .item__icon {\n  margin: 3vh 8vw 3vh 14.4vw;\n  font-size: 35px;\n}\n.personal-data .item__text {\n  font: normal normal 500 16px/19px Montserrat;\n}\n\n.data-protection {\n  padding: 1.85vh 22.5vw 5.3vh 8.5vw;\n  font: normal normal 500 14px/18px Montserrat;\n}\n\n.pay {\n  margin: 0 0 14vh;\n  display: flex;\n  align-items: center;\n}\n.pay__total {\n  padding: 0 14.67vw 0 10.67vw;\n}\n.pay__btn {\n  width: 49.33vw;\n  height: 6.16vh;\n  --border-radius: 18px;\n  --background: #0E8DF1;\n  font: normal normal 600 18px/22px Montserrat;\n}", "",{"version":3,"sources":["webpack://./src/app/components/google-pay/google-pay.component.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,6BAAA;EACA,cAAA;AACF;;AAEA;EACE,aAAA;EACA,aAAA;EACA,mBAAA;AACF;AACE;EACE,WAAA;EACA,mBAAA;EACA,kBAAA;AACJ;;AAIE;EACE,aAAA;EACA,mBAAA;EACA,6BAAA;AADJ;AAEI;EACE,gCAAA;AAAN;AAEI;EACE,0BAAA;EACA,eAAA;AAAN;AAEI;EACE,4CAAA;AAAN;;AAKA;EACE,kCAAA;EACA,4CAAA;AAFF;;AAKA;EACE,gBAAA;EACA,aAAA;EACA,mBAAA;AAFF;AAGE;EACE,4BAAA;AADJ;AAGE;EACE,cAAA;EACA,cAAA;EACA,qBAAA;EACA,qBAAA;EACA,4CAAA;AADJ","sourcesContent":[".container {\r\n  width: 100%;\r\n  border-top: 1px solid #707070;\r\n  color: #493735;\r\n}\r\n\r\n.payment {\r\n  height: 102px;\r\n  display: flex;\r\n  align-items: center;\r\n\r\n  &__img-container {\r\n    width: 85px;\r\n    margin: 5px 0 0 8vw;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n.personal-data {\r\n  .item {\r\n    display: flex;\r\n    align-items: center;\r\n    border-top: 1px solid #CBCBCB;\r\n    &:last-child {\r\n      border-bottom: 1px solid #CBCBCB;\r\n    }\r\n    &__icon {\r\n      margin: 3vh 8vw 3vh 14.4vw;\r\n      font-size: 35px;\r\n    }\r\n    &__text {\r\n      font: normal normal 500 16px/19px Montserrat;\r\n    }\r\n  }\r\n}\r\n\r\n.data-protection {\r\n  padding: 1.85vh 22.5vw 5.3vh 8.5vw;\r\n  font: normal normal 500 14px/18px Montserrat;\r\n}\r\n\r\n.pay {\r\n  margin: 0 0 14vh;\r\n  display: flex;\r\n  align-items: center;\r\n  &__total {\r\n    padding: 0 14.67vw 0 10.67vw;\r\n  }\r\n  &__btn {\r\n    width: 49.33vw;\r\n    height: 6.16vh;\r\n    --border-radius: 18px;\r\n    --background: #0E8DF1;\r\n    font: normal normal 600 18px/22px Montserrat;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 21939:
/*!******************************************************************************!*\
  !*** ./src/app/components/login-first/login-first.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0 auto;\n  width: 80vw;\n}\n\n.close-btn {\n  position: absolute;\n  top: 2vh;\n  right: 0;\n  --padding-start: 0;\n  font-size: 21px;\n  color: #555;\n}\n\n.title {\n  padding: 0 30px 3vh;\n  font: 20px/24px Montserrat;\n  text-align: center;\n  color: #707070;\n}\n\n.main-btn {\n  --border-radius: 36px;\n  --border-color: #707070;\n  text-transform: uppercase;\n  color: #493735;\n}", "",{"version":3,"sources":["webpack://./src/app/components/login-first/login-first.component.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,cAAA;EACA,WAAA;AACF;;AAEA;EACE,kBAAA;EACA,QAAA;EACA,QAAA;EACA,kBAAA;EACA,eAAA;EACA,WAAA;AACF;;AAEA;EACE,mBAAA;EACA,0BAAA;EACA,kBAAA;EACA,cAAA;AACF;;AAEA;EACE,qBAAA;EACA,uBAAA;EACA,yBAAA;EACA,cAAA;AACF","sourcesContent":[".container {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  margin: 0 auto;\r\n  width: 80vw;\r\n}\r\n\r\n.close-btn {\r\n  position: absolute;\r\n  top: 2vh;\r\n  right: 0;\r\n  --padding-start: 0;\r\n  font-size: 21px;\r\n  color: #555;\r\n}\r\n\r\n.title {\r\n  padding: 0 30px 3vh;\r\n  font: 20px/24px Montserrat;\r\n  text-align: center;\r\n  color: #707070;\r\n}\r\n\r\n.main-btn {\r\n  --border-radius: 36px;\r\n  --border-color: #707070;\r\n  text-transform: uppercase;\r\n  color: #493735;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 21283:
/*!******************************************************************************!*\
  !*** ./src/app/components/menu-header/menu-header.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".toolbar {\n  padding: 1vh 0;\n  --background: #FEDE00;\n}\n.toolbar__button {\n  --icon-font-size: 25px;\n}\n.toolbar__title {\n  padding: 0 0 0 3vw;\n  font: normal normal 500 6.67vw/3.69vh Montserrat;\n  text-transform: capitalize;\n  color: #493735;\n}", "",{"version":3,"sources":["webpack://./src/app/components/menu-header/menu-header.component.scss"],"names":[],"mappings":"AAAA;EACE,cAAA;EACA,qBAAA;AACF;AAAE;EACE,sBAAA;AAEJ;AAAE;EACE,kBAAA;EACA,gDAAA;EACA,0BAAA;EACA,cAAA;AAEJ","sourcesContent":[".toolbar {\r\n  padding: 1vh 0;\r\n  --background: #FEDE00;\r\n  &__button {\r\n    --icon-font-size: 25px;\r\n  }\r\n  &__title {\r\n    padding: 0 0 0 3vw;\r\n    font: normal normal 500 6.67vw/3.69vh Montserrat;\r\n    text-transform: capitalize;\r\n    color: #493735;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 23287:
/*!**********************************************************************************!*\
  !*** ./src/app/components/payment-methods/debit/debit.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".top {\n  width: 100%;\n  height: 30px;\n  background: #FEDE00;\n}\n\n.arrow {\n  font-size: 9vw;\n  color: #FEDE00;\n}\n\n.container {\n  height: 100%;\n  padding: 4vh 7vw;\n  overflow: auto;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.header__title {\n  padding: 0 0 20px;\n  font-size: large;\n}\n\n.form .row {\n  display: flex;\n}\n.form__item {\n  margin: 0 0 2vh;\n  --padding-start: 0;\n}\n.form__item_big {\n  width: 70vw;\n  margin-right: 5vw;\n}\n.form__item_small {\n  width: 25vw;\n}\n.form .item__input {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  font-size: large;\n}\n.form__btn {\n  height: 60px;\n  margin-top: 10vh;\n  --background: #c0c0c0;\n  --border-radius: 10vw;\n  font-weight: 600;\n  font-size: 14px;\n}", "",{"version":3,"sources":["webpack://./src/app/components/payment-methods/debit/debit.component.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,YAAA;EACA,mBAAA;AACF;;AAEA;EACE,cAAA;EACA,cAAA;AACF;;AAEA;EACE,YAAA;EACA,gBAAA;EACA,cAAA;AACF;;AAEA;EACE,aAAA;EACA,8BAAA;EACA,qBAAA;AACF;AAAE;EACE,iBAAA;EACA,gBAAA;AAEJ;;AAGE;EACE,aAAA;AAAJ;AAGE;EACE,eAAA;EACA,kBAAA;AADJ;AAEI;EACE,WAAA;EACA,iBAAA;AAAN;AAEI;EACE,WAAA;AAAN;AAMI;EACE,gBAAA;EACA,mBAAA;EACA,gBAAA;AAJN;AAQE;EACE,YAAA;EACA,gBAAA;EACA,qBAAA;EACA,qBAAA;EACA,gBAAA;EACA,eAAA;AANJ","sourcesContent":[".top {\r\n  width: 100%;\r\n  height: 30px;\r\n  background: #FEDE00;\r\n}\r\n\r\n.arrow {\r\n  font-size: 9vw;\r\n  color: #FEDE00;\r\n}\r\n\r\n.container {\r\n  height: 100%;\r\n  padding: 4vh 7vw;\r\n  overflow: auto;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-end;\r\n  &__title {\r\n    padding: 0 0 20px;\r\n    font-size: large;\r\n  }\r\n}\r\n\r\n.form {\r\n  .row {\r\n    display: flex;\r\n  }\r\n\r\n  &__item {\r\n    margin: 0 0 2vh;\r\n    --padding-start: 0;\r\n    &_big {\r\n      width: 70vw;\r\n      margin-right: 5vw;\r\n    }\r\n    &_small {\r\n      width: 25vw;\r\n    }\r\n  }\r\n\r\n  .item {\r\n    &__label {}\r\n    &__input {\r\n      --padding-top: 0;\r\n      --padding-bottom: 0;\r\n      font-size: large;\r\n    }\r\n  }\r\n\r\n  &__btn {\r\n    height: 60px;\r\n    margin-top: 10vh;\r\n    --background: #c0c0c0;\r\n    --border-radius: 10vw;\r\n    font-weight: 600;\r\n    font-size: 14px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 82948:
/*!**************************************************************************************!*\
  !*** ./src/app/components/payment-methods/payment-methods.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".close-btn {\n  --background: #F9F9F9;\n  position: absolute;\n  top: 1.72vh;\n  right: 0;\n}\n.close-btn__icon {\n  display: block;\n  font-size: 10vw;\n}\n\n.container {\n  width: 100%;\n  height: 100%;\n  padding: 1.72vh 7.73vw;\n  overflow-y: auto;\n  background: #F9F9F9;\n  color: #493735;\n}\n\n.title {\n  padding: 0 0 2.46vh;\n  font: normal normal 500 5.33vw/7vh Montserrat;\n}\n\n.payments__item {\n  display: flex;\n  align-items: center;\n}\n.payments .item__icon {\n  font-size: 17.33vw;\n}\n.payments .item__label {\n  padding: 0 0 0 16vw;\n  font-weight: 500;\n  font-size: 4vw;\n}\n\n.link-wrapper {\n  margin-top: 1vh;\n  display: flex;\n  justify-content: center;\n}\n.link-wrapper .link {\n  color: #0E8DF1;\n  text-decoration: underline;\n}\n\n.low_sum {\n  color: red;\n  margin: 0px 2vw;\n  font-size: 2.5vw;\n}", "",{"version":3,"sources":["webpack://./src/app/components/payment-methods/payment-methods.component.scss"],"names":[],"mappings":"AAAA;EACE,qBAAA;EACA,kBAAA;EACA,WAAA;EACA,QAAA;AACF;AAAE;EACE,cAAA;EACA,eAAA;AAEJ;;AAEA;EACE,WAAA;EACA,YAAA;EACA,sBAAA;EACA,gBAAA;EACA,mBAAA;EACA,cAAA;AACF;;AAEA;EACE,mBAAA;EACA,6CAAA;AACF;;AAGE;EACE,aAAA;EACA,mBAAA;AAAJ;AAII;EACE,kBAAA;AAFN;AAII;EACE,mBAAA;EACA,gBAAA;EACA,cAAA;AAFN;;AAQA;EACE,eAAA;EACA,aAAA;EACA,uBAAA;AALF;AAOE;EACE,cAAA;EACA,0BAAA;AALJ;;AAQA;EACE,UAAA;EACA,eAAA;EACA,gBAAA;AALF","sourcesContent":[".close-btn {\r\n  --background: #F9F9F9;\r\n  position: absolute;\r\n  top: 1.72vh;\r\n  right: 0;\r\n  &__icon {\r\n    display: block;\r\n    font-size: 10vw;\r\n  }\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 1.72vh 7.73vw;\r\n  overflow-y: auto;\r\n  background: #F9F9F9;\r\n  color: #493735;\r\n}\r\n\r\n.title {\r\n  padding: 0 0 2.46vh;\r\n  font: normal normal 500 5.33vw/7vh Montserrat;\r\n}\r\n\r\n.payments {\r\n  &__item {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  .item {\r\n    &__icon {\r\n      font-size: 17.33vw;\r\n    }\r\n    &__label {\r\n      padding: 0 0 0 16vw;\r\n      font-weight: 500;\r\n      font-size: 4vw;\r\n    }\r\n  }\r\n\r\n}\r\n\r\n.link-wrapper {\r\n  margin-top: 1vh;\r\n  display: flex;\r\n  justify-content: center;\r\n\r\n  .link {\r\n    color: #0E8DF1;\r\n    text-decoration: underline;\r\n  }\r\n}\r\n.low_sum {\r\n  color: red;\r\n  margin: 0px 2vw;\r\n  font-size: 2.5vw;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 77366:
/*!********************************************************************************!*\
  !*** ./src/app/components/pick-up-date/pick-up-date.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host {\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n}\n\nion-modal {\n  --width: 100% !important;\n}\n\n.container {\n  width: 360px;\n  margin: var(--ion-safe-area-top) auto 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  color: #493735;\n}\n.container span {\n  font-weight: 500;\n  margin: 1vh 0;\n}\n.container .btn-wrapper {\n  position: relative;\n}\n.container .close-btn {\n  margin: 2vh -5vw 0;\n  align-self: flex-end;\n}\n.container .title-main {\n  padding: 4.5vh 0 5.4vh;\n  font: normal normal 600 7vw/8vw Montserrat;\n  letter-spacing: 0.45px;\n}\n@media (max-device-height: 600px) {\n  .container .title-main {\n    padding: 0 0 3.4vh;\n  }\n}\n.container .title-date {\n  padding: 0 0 1.91vh;\n  font: normal normal 600 20px/24px Montserrat;\n}\n.container .title-date:last-of-type {\n  padding: 4.93vh 0 1.91vh;\n}\n.container .label {\n  padding: 0 0 1.23vh;\n  font: normal normal 400 18px/22px Montserrat;\n}\n.container .row {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  margin: 0 0 18.5px;\n}\n.container .btn {\n  height: 56px;\n  display: block;\n  --border-radius: 5px;\n  text-transform: capitalize;\n}\n.container .btn-outline {\n  margin: 0 6px 0 0;\n  --border-color: #9AA8B5;\n  font: normal normal 400 20px/24px Montserrat;\n  color: #493735;\n}\n.container .btn-outline_active {\n  --background: #0E8DF1;\n  color: #fff;\n}\n.container .calendar-icon {\n  font-size: 27px;\n}\n.container .time-item {\n  width: 100%;\n  padding: 0 30px;\n  margin: 0 0 7.39vh;\n  --background: #0E8DF1;\n  color: #fff;\n  --border-color: #9AA8B5;\n  --border-width: 1px;\n  --border-radius: 5px;\n  font: normal normal 400 20px/24px Montserrat;\n  --inner-padding-bottom: 6px;\n  --inner-padding-top: 6px;\n  --inner-padding-end: 0;\n  --padding-start: 0;\n}\n@media (max-device-height: 500px) {\n  .container .time-item {\n    margin: 0 0 4vh;\n  }\n}\n.container .center {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  width: 100%;\n}\n.container ion-datetime-Time {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  padding-left: 25%;\n}\n.container .datetimeDate {\n  width: 100%;\n  max-width: 320px;\n  margin: 0 auto;\n  box-sizing: border-box;\n  text-align: center;\n}\n.container .btn-filled {\n  width: 200px;\n  --border-radius: 3.2vw;\n  --background: #FEDE00;\n  font: normal normal 600 20px/24px Montserrat;\n}\n.container .verify {\n  --background: #3CCA88;\n  --border-radius: 5px;\n  text-transform: uppercase;\n}\n.container .date {\n  display: none;\n}\n.container .calendar-center-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n}", "",{"version":3,"sources":["webpack://./src/app/components/pick-up-date/pick-up-date.component.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,YAAA;EACA,gBAAA;AACF;;AAEA;EACE,wBAAA;AACF;;AACA;EACE,YAAA;EACA,uCAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,cAAA;AAEF;AADE;EACE,gBAAA;EACA,aAAA;AAGJ;AAAE;EACE,kBAAA;AAEJ;AACE;EACE,kBAAA;EACA,oBAAA;AACJ;AAEE;EACE,sBAAA;EACA,0CAAA;EACA,sBAAA;AAAJ;AACI;EAJF;IAKI,kBAAA;EAEJ;AACF;AAAE;EACE,mBAAA;EACA,4CAAA;AAEJ;AADI;EACE,wBAAA;AAGN;AAAE;EACE,mBAAA;EACA,4CAAA;AAEJ;AACE;EACE,WAAA;EACA,aAAA;EACA,6BAAA;EACA,kBAAA;AACJ;AAGE;EACE,YAAA;EACA,cAAA;EACA,oBAAA;EACA,0BAAA;AADJ;AAGE;EACE,iBAAA;EACA,uBAAA;EACA,4CAAA;EACA,cAAA;AADJ;AAEI;EACE,qBAAA;EACA,WAAA;AAAN;AAGE;EACE,eAAA;AADJ;AAIE;EACE,WAAA;EACA,eAAA;EACA,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,uBAAA;EACA,mBAAA;EACA,oBAAA;EACA,4CAAA;EACA,2BAAA;EACA,wBAAA;EACA,sBAAA;EACA,kBAAA;AAFJ;AAGI;EAdF;IAeI,eAAA;EAAJ;AACF;AAGE;EACE,aAAA;EACA,uBAAA;EACA,qBAAA;EACA,mBAAA;EACA,WAAA;AADJ;AAGE;EACE,aAAA;EACA,uBAAA;EACA,qBAAA;EACA,mBAAA;EACA,iBAAA;AADJ;AAIA;EACE,WAAA;EACA,gBAAA;EACA,cAAA;EACA,sBAAA;EACA,kBAAA;AAFF;AAOE;EACE,YAAA;EACA,sBAAA;EACA,qBAAA;EACA,4CAAA;AALJ;AAOE;EACE,qBAAA;EACA,oBAAA;EACA,yBAAA;AALJ;AAQE;EACE,aAAA;AANJ;AAQA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;AANF","sourcesContent":[":host {\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\nion-modal {\r\n  --width: 100% !important;\r\n}\r\n.container {\r\n  width: 360px;\r\n  margin: var(--ion-safe-area-top) auto 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: center;\r\n  color: #493735;\r\n  span {\r\n    font-weight: 500;\r\n    margin: 1vh 0;\r\n  }\r\n\r\n  .btn-wrapper {\r\n    position: relative;\r\n  }\r\n\r\n  .close-btn {\r\n    margin: 2vh -5vw 0;\r\n    align-self: flex-end;\r\n  }\r\n\r\n  .title-main {\r\n    padding: 4.5vh 0 5.4vh;\r\n    font: normal normal 600 7vw/8vw Montserrat;\r\n    letter-spacing: 0.45px;\r\n    @media (max-device-height: 600px) {\r\n      padding: 0 0 3.4vh;\r\n    }\r\n  }\r\n  .title-date {\r\n    padding: 0 0 1.91vh;\r\n    font: normal normal 600 20px/24px Montserrat;\r\n    &:last-of-type {\r\n      padding: 4.93vh 0 1.91vh;\r\n    }\r\n  }\r\n  .label {\r\n    padding: 0 0 1.23vh;\r\n    font: normal normal 400 18px/22px Montserrat;\r\n  }\r\n\r\n  .row {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    margin: 0 0 18.5px;\r\n  }\r\n\r\n\r\n  .btn {\r\n    height: 56px;\r\n    display: block;\r\n    --border-radius: 5px;\r\n    text-transform: capitalize;\r\n  }\r\n  .btn-outline {\r\n    margin: 0 6px 0 0;\r\n    --border-color: #9AA8B5;\r\n    font: normal normal 400 20px/24px Montserrat;\r\n    color: #493735;\r\n    &_active {\r\n      --background: #0E8DF1;\r\n      color: #fff;\r\n    }\r\n  }\r\n  .calendar-icon {\r\n    font-size: 27px;\r\n  }\r\n\r\n  .time-item {\r\n    width: 100%;\r\n    padding: 0 30px;\r\n    margin:  0 0 7.39vh;\r\n    --background: #0E8DF1;\r\n    color: #fff;\r\n    --border-color: #9AA8B5;\r\n    --border-width: 1px;\r\n    --border-radius: 5px;\r\n    font: normal normal 400 20px/24px Montserrat;\r\n    --inner-padding-bottom: 6px;\r\n    --inner-padding-top: 6px;\r\n    --inner-padding-end: 0;\r\n    --padding-start: 0;\r\n    @media (max-device-height: 500px) {\r\n      margin:  0 0 4vh;\r\n    }\r\n  }\r\n\r\n  .center {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n  }\r\n  ion-datetime-Time{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n    align-items: center;\r\n    padding-left: 25%;\r\n\r\n  }\r\n.datetimeDate {\r\n  width: 100%;\r\n  max-width: 320px; // Adjust for better mobile view\r\n  margin: 0 auto; // Center horizontally\r\n  box-sizing: border-box;\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n  .btn-filled {\r\n    width: 200px;\r\n    --border-radius: 3.2vw;\r\n    --background: #FEDE00;\r\n    font: normal normal 600 20px/24px Montserrat;\r\n  }\r\n  .verify {\r\n    --background: #3CCA88;\r\n    --border-radius: 5px;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n  .date {\r\n    display: none;\r\n  }\r\n.calendar-center-wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0; // Remove extra space\r\n}\r\n\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 21142:
/*!**************************************************************************************!*\
  !*** ./src/app/components/product-details/product-details.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container {\n  width: 100%;\n  height: 100%;\n  border: 1px solid #CBCBCB;\n  overflow-y: auto;\n  color: #493735;\n}\n\n.close-btn {\n  position: absolute;\n  top: 5px;\n  right: 0;\n  --padding-start: 0;\n  font-size: 14px;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.header__img {\n  width: 60vw;\n  height: 55vw;\n  margin: 20px 0;\n  border-radius: 5px;\n  object-fit: cover;\n}\n.header__name {\n  text-align: center;\n  font: normal normal 500 20px/24px Montserrat;\n}\n.header__available {\n  padding: 10px 0;\n  font: normal normal 400 14px/18px Montserrat;\n}\n\n.product {\n  padding: 30px 17px 17px;\n}\n.product__header {\n  display: flex;\n  margin: 0 0 26px;\n}\n.product__img {\n  width: 76px;\n  height: 52px;\n  object-fit: cover;\n}\n.product__label {\n  padding: 12px 0 0 39px;\n  font: normal normal 400 12px/15px Montserrat;\n  color: inherit;\n}\n.product .details {\n  font: normal normal 500 12px/15px Montserrat;\n  color: #000000;\n}\n.product .details__title {\n  font: normal normal 500 18px/22px Montserrat;\n}\n.product .details__subtitle {\n  font: normal normal 600 12px/15px Montserrat;\n  padding: 8px 0;\n}\n.product .details__list {\n  margin: 0 0 15px;\n}\n.product .details__text {\n  width: 64vw;\n}", "",{"version":3,"sources":["webpack://./src/app/components/product-details/product-details.component.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,cAAA;AACF;;AAEA;EACE,kBAAA;EACA,QAAA;EACA,QAAA;EACA,kBAAA;EACA,eAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;AACF;AAAE;EACE,WAAA;EACA,YAAA;EACA,cAAA;EACA,kBAAA;EACA,iBAAA;AAEJ;AAAE;EACE,kBAAA;EACA,4CAAA;AAEJ;AAAE;EACE,eAAA;EACA,4CAAA;AAEJ;;AAEA;EACE,uBAAA;AACF;AAAE;EACE,aAAA;EACA,gBAAA;AAEJ;AAAE;EACE,WAAA;EACA,YAAA;EACA,iBAAA;AAEJ;AAAE;EACE,sBAAA;EACA,4CAAA;EACA,cAAA;AAEJ;AACE;EACE,4CAAA;EACA,cAAA;AACJ;AAAI;EACE,4CAAA;AAEN;AAAI;EACE,4CAAA;EACA,cAAA;AAEN;AAAI;EACE,gBAAA;AAEN;AAKI;EACE,WAAA;AAHN","sourcesContent":[".container {\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 1px solid #CBCBCB;\r\n  overflow-y: auto;\r\n  color: #493735;\r\n}\r\n\r\n.close-btn {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 0;\r\n  --padding-start: 0;\r\n  font-size: 14px;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  &__img {\r\n    width: 60vw;\r\n    height: 55vw;\r\n    margin: 20px 0;\r\n    border-radius: 5px;\r\n    object-fit: cover;\r\n  }\r\n  &__name {\r\n    text-align: center;\r\n    font: normal normal 500 20px/24px Montserrat;\r\n  }\r\n  &__available {\r\n    padding: 10px 0;\r\n    font: normal normal 400 14px/18px Montserrat;\r\n  }\r\n}\r\n\r\n.product {\r\n  padding: 30px 17px 17px;\r\n  &__header {\r\n    display: flex;\r\n    margin: 0 0 26px;\r\n  }\r\n  &__img {\r\n    width: 76px;\r\n    height: 52px;\r\n    object-fit: cover;\r\n  }\r\n  &__label {\r\n    padding: 12px 0 0 39px;\r\n    font: normal normal 400 12px/15px Montserrat;\r\n    color: inherit;\r\n  }\r\n\r\n  .details {\r\n    font: normal normal 500 12px/15px Montserrat;\r\n    color: #000000;\r\n    &__title {\r\n      font: normal normal 500 18px/22px Montserrat;\r\n    }\r\n    &__subtitle {\r\n      font: normal normal 600 12px/15px Montserrat;\r\n      padding: 8px 0;\r\n    }\r\n    &__list{\r\n      margin: 0 0 15px;\r\n    }\r\n\r\n    .list {\r\n      &__item {}\r\n    }\r\n\r\n    &__text {\r\n      width: 64vw;\r\n    }\r\n  }\r\n\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9115:
/*!********************************************************************************!*\
  !*** ./src/app/components/product-item/product-item.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".product {\n  width: 90vw;\n  height: 95px;\n  margin: 0 0 1.23vh;\n  display: flex;\n  border: 1px solid #D9D9D9;\n  border-radius: 5px;\n  font: normal normal 400 12px/15px Montserrat;\n  color: #493735;\n}\n.product .col-left {\n  position: relative;\n}\n.product .col-left .quantity {\n  position: absolute;\n  bottom: 1vh;\n  left: 1vh;\n  padding: 0.5vh;\n  background-color: yellow;\n  border-radius: 0.5vh;\n  z-index: 5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.4vh;\n}\n.product .col-left .discount-img {\n  width: 35px;\n  height: 35px;\n  position: absolute;\n  right: 0;\n  background: transparent;\n}\n.product .col-center {\n  width: 100%;\n  padding: 4px 20px 7px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.product .col-center .row {\n  display: flex;\n  justify-content: space-between;\n}\n.product__name {\n  font: normal normal 500 14px/18px Montserrat;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.product__img {\n  width: 26.67vw;\n  height: 100%;\n  object-fit: cover;\n}\n.product__img::part(image) {\n  border-radius: 4px 0 0 4px;\n}\n.product__img-corner {\n  position: absolute;\n}\n.product__img-corner_bio {\n  top: 0;\n  left: 0;\n}\n.product__img-corner_new {\n  left: 5px;\n  bottom: 10px;\n}\n.product .details {\n  margin: 0;\n  --padding-start: 0;\n  font: italic normal 300 12px/15px Montserrat;\n  text-transform: capitalize;\n  color: #493735;\n}\n.product__price {\n  padding: 2px 0 0;\n  text-align: right;\n}\n.product__price_crossed-out {\n  text-decoration: line-through;\n}\n.product__special-price {\n  color: #F44336;\n}\n.product .count {\n  align-self: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  width: 134px;\n  min-width: 134px;\n  max-width: 134px;\n  margin-right: 8px;\n  height: 95px;\n}\n.product .count__btn {\n  width: 47px;\n  height: 30px;\n  font: normal normal 300 25px/30px Montserrat;\n  color: inherit;\n  --background: #F9F9F9;\n  --border-radius: 5px;\n  margin: 0;\n}\n.product .count__value {\n  width: 40px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n}\n.product .count__message {\n  font-size: 12px;\n  color: #666;\n  text-align: center;\n  padding: 0px;\n  width: 100%;\n  max-width: 100%;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  white-space: normal;\n  line-height: 1.3;\n  box-sizing: border-box;\n  margin: 0;\n  height: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}", "",{"version":3,"sources":["webpack://./src/app/components/product-item/product-item.component.scss"],"names":[],"mappings":"AAEA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,yBAAA;EACA,kBAAA;EACA,4CAAA;EACA,cAVU;AASZ;AAGE;EACE,kBAAA;AADJ;AAEI;EACE,kBAAA;EACA,WAAA;EACA,SAAA;EACA,cAAA;EACA,wBAAA;EACA,oBAAA;EACA,UAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;AAAN;AAEI;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,QAAA;EACA,uBAAA;AAAN;AAIE;EACE,WAAA;EACA,qBAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;AAFJ;AAGI;EACE,aAAA;EACA,8BAAA;AADN;AAKE;EACE,4CAAA;EACA,oBAAA;EACA,qBAAA;EACA,aAAA;EACA,4BAAA;EACA,gBAAA;AAHJ;AAME;EACE,cAAA;EACA,YAAA;EACA,iBAAA;AAJJ;AAKI;EACE,0BAAA;AAHN;AAOE;EACE,kBAAA;AALJ;AAOI;EACE,MAAA;EACA,OAAA;AALN;AAQI;EACE,SAAA;EACA,YAAA;AANN;AAWE;EACE,SAAA;EACA,kBAAA;EACA,4CAAA;EACA,0BAAA;EACA,cAtFQ;AA6EZ;AAYE;EACE,gBAAA;EACA,iBAAA;AAVJ;AAWI;EACE,6BAAA;AATN;AAYE;EACE,cAAA;AAVJ;AAaE;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,YAAA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,YAAA;AAXJ;AAaI;EACE,WAAA;EACA,YAAA;EACA,4CAAA;EACA,cAAA;EACA,qBAAA;EACA,oBAAA;EACA,SAAA;AAXN;AAcI;EACE,WAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;AAZN;AAeI;EACE,eAAA;EACA,WAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,yBAAA;EACA,mBAAA;EACA,gBAAA;EACA,sBAAA;EACA,SAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAbN","sourcesContent":["$darkBrown: #493735;\r\n\r\n.product {\r\n  width: 90vw;\r\n  height: 95px;\r\n  margin: 0 0 1.23vh;\r\n  display: flex;\r\n  border: 1px solid #D9D9D9;\r\n  border-radius: 5px;\r\n  font: normal normal 400 12px/15px Montserrat;\r\n  color: $darkBrown;\r\n\r\n  .col-left {\r\n    position: relative;\r\n    .quantity {\r\n      position: absolute;\r\n      bottom: 1vh;\r\n      left: 1vh;\r\n      padding: .5vh;\r\n      background-color: yellow;\r\n      border-radius: 0.5vh;\r\n      z-index: 5;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      font-size: 1.4vh;\r\n    }\r\n    .discount-img {\r\n      width: 35px;\r\n      height: 35px;\r\n      position: absolute;\r\n      right: 0;\r\n      background: transparent;\r\n    }\r\n  }\r\n\r\n  .col-center {\r\n    width: 100%;\r\n    padding: 4px 20px 7px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    .row {\r\n      display: flex;\r\n      justify-content: space-between;\r\n    }\r\n  }\r\n\r\n  &__name {\r\n    font: normal normal 500 14px/18px Montserrat;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 1;\r\n    line-clamp: 1;\r\n    -webkit-box-orient: vertical;\r\n    overflow: hidden;\r\n  }\r\n\r\n  &__img {\r\n    width: 26.67vw;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    &::part(image) {\r\n      border-radius: 4px 0 0 4px;\r\n    }\r\n  }\r\n\r\n  &__img-corner {\r\n    position: absolute;\r\n\r\n    &_bio {\r\n      top: 0;\r\n      left: 0;\r\n    }\r\n\r\n    &_new {\r\n      left: 5px;\r\n      bottom: 10px;\r\n    }\r\n  }\r\n\r\n\r\n  .details {\r\n    margin: 0;\r\n    --padding-start: 0;\r\n    font: italic normal 300 12px/15px Montserrat;\r\n    text-transform: capitalize;\r\n    color: $darkBrown;\r\n  }\r\n\r\n  &__price {\r\n    padding: 2px 0 0;\r\n    text-align: right;\r\n    &_crossed-out {\r\n      text-decoration: line-through;\r\n    }\r\n  }\r\n  &__special-price {\r\n    color: #F44336;\r\n  }\r\n\r\n  .count {\r\n    align-self: center;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    width: 134px;\r\n    min-width: 134px;\r\n    max-width: 134px;\r\n    margin-right: 8px;\r\n    height: 95px;\r\n\r\n    &__btn {\r\n      width: 47px;\r\n      height: 30px;\r\n      font: normal normal 300 25px/30px Montserrat;\r\n      color: inherit;\r\n      --background: #F9F9F9;\r\n      --border-radius: 5px;\r\n      margin: 0;\r\n    }\r\n\r\n    &__value {\r\n      width: 40px;\r\n      height: 30px;\r\n      line-height: 30px;\r\n      text-align: center;\r\n    }\r\n\r\n    &__message {\r\n      font-size: 12px;\r\n      color: #666;\r\n      text-align: center;\r\n      padding: 0px;\r\n      width: 100%;\r\n      max-width: 100%;\r\n      word-wrap: break-word;\r\n      overflow-wrap: break-word;\r\n      white-space: normal;\r\n      line-height: 1.3;\r\n      box-sizing: border-box;\r\n      margin: 0;\r\n      height: auto;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 62174:
/*!********************************************************************************!*\
  !*** ./src/app/components/sliced-modal/sliced-modal.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n  padding: 1.5vh;\n}\n.wrapper .text {\n  display: flex;\n  margin-top: 1.3vh;\n  margin-bottom: 4vh;\n}\n.wrapper .text span {\n  display: flex;\n  align-items: flex-end;\n  font-size: 1.8vh;\n  text-align: center;\n  font-weight: 600;\n}\n.wrapper .text img {\n  width: 3.5vh;\n  height: 3.5vh;\n  max-width: 50px;\n  margin-left: 1vh;\n  margin-right: 2vh;\n}\n.wrapper .buttons-wrapper {\n  padding: 0 2vh;\n  width: 80%;\n  display: flex;\n  justify-content: space-between;\n}\n.wrapper .buttons-wrapper ion-button {\n  width: 10.2vh;\n  height: 6.3vh;\n  font-size: 1.6vh;\n  color: #1e2023;\n  font-weight: 600;\n}\n.wrapper .buttons-wrapper .green-btn {\n  --background: #3BC786;\n}\n.wrapper .buttons-wrapper .red-btn {\n  --background: #F88962;\n}", "",{"version":3,"sources":["webpack://./src/app/components/sliced-modal/sliced-modal.component.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,sBAAA;EACA,cAAA;AACF;AAAE;EACE,aAAA;EACA,iBAAA;EACA,kBAAA;AAEJ;AADI;EACE,aAAA;EACA,qBAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;AAGN;AADI;EACE,YAAA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AAGN;AAAE;EACE,cAAA;EACA,UAAA;EACA,aAAA;EACA,8BAAA;AAEJ;AADI;EACE,aAAA;EACA,aAAA;EACA,gBAAA;EACA,cAAA;EACA,gBAAA;AAGN;AADI;EACE,qBAAA;AAGN;AADI;EACE,qBAAA;AAGN","sourcesContent":[".wrapper {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  flex-direction: column;\r\n  padding: 1.5vh;\r\n  .text {\r\n    display: flex;\r\n    margin-top: 1.3vh;\r\n    margin-bottom: 4vh;\r\n    span {\r\n      display: flex;\r\n      align-items: flex-end;\r\n      font-size: 1.8vh;\r\n      text-align: center;\r\n      font-weight: 600;\r\n    }\r\n    img {\r\n      width: 3.5vh;\r\n      height: 3.5vh;\r\n      max-width: 50px;\r\n      margin-left: 1vh;\r\n      margin-right: 2vh;\r\n    }\r\n  }\r\n  .buttons-wrapper {\r\n    padding: 0 2vh;\r\n    width: 80%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    ion-button {\r\n      width: 10.2vh;\r\n      height: 6.3vh;\r\n      font-size: 1.6vh;\r\n      color: #1e2023;\r\n      font-weight: 600;\r\n    }\r\n    .green-btn {\r\n      --background: #3BC786;\r\n    }\r\n    .red-btn {\r\n      --background: #F88962;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 14001:
/*!**********************************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host {\n  height: 100%;\n}\n\n.spinner {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/app/components/spinner/spinner.component.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;AACF;;AAEA;EACE,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AACF","sourcesContent":[":host {\r\n  height: 100%;\r\n}\r\n\r\n.spinner {\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 56811:
/*!******************************************************************************!*\
  !*** ./src/app/components/bakery-item/bakery-item.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"bakery\" (click)=\"openBakery(bakery.id)\">\r\n  <div class=\"col\">\r\n    <ion-img class=\"bakery__img\" [src]=\"bakery.photo\"></ion-img>\r\n    <!--        <ion-img class=\"bakery__stars\" src=\"../../../assets/img/bakery/stars.png\"></ion-img>-->\r\n  </div>\r\n  <div class=\"col main\">\r\n    <div>\r\n      <h3 class=\"bakery__title\">{{bakery.name}}</h3>\r\n      <p class=\"bakery__text bakery__text_pb\">{{bakery.address}}</p>\r\n    </div>\r\n    <div>\r\n      <div class=\"bakery__icons-row\">\r\n        <img class=\"icon\" src=\"{{bakeryServ.getIcon(feature)}}\" *ngFor=\"let feature of bakery.features\">\r\n      </div>\r\n      <p class=\"bakery__text\">\r\n        <span *ngIf=\"allWeek || openUntil\">{{ 'favorites.open' | translate }}</span> <span *ngIf=\"allWeek\"> 24/7 </span>\r\n        <span *ngIf=\"!allWeek && openUntil\"> {{ 'favorites.until' | translate }} {{ openUntil }} Uhr</span>\r\n        <span *ngIf=\"(allWeek || openUntil) && bakery.distance\"> - </span>\r\n        <span *ngIf=\"bakery.distance\"> {{bakery.distance | number:'1.1-1'}} km</span>\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col\">\r\n    <ion-icon class=\"icon-like\" *ngIf=\"!($guest | async)\" (click)=\"onFavorite(bakery.id, $event)\" slot=\"icon-only\"\r\n              [src]=\"bakery.isFavourite ? iconHeartFilled : iconHeartOutline\" tappable></ion-icon>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 66921:
/*!****************************************************************************!*\
  !*** ./src/app/components/google-pay/google-pay.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\r\n  <div class=\"payment\">\r\n    <div class=\"payment__img-container\">\r\n      <img class=\"payment__img\" src=\"assets/img/payments/g-pay.png\">\r\n    </div>\r\n  </div>\r\n  <div class=\"personal-data\">\r\n    <div class=\"item\">\r\n      <ion-icon class=\"item__icon\" src=\"../../../assets/icons/menu/user-circle.svg\"></ion-icon>\r\n      <p class=\"item__text\">jenny.bre@gmail.com</p>\r\n    </div>\r\n    <div class=\"item\">\r\n      <ion-icon class=\"item__icon\" src=\"../../../assets/icons/payments/mastercard-grey.svg\"></ion-icon>\r\n      <p class=\"item__text\">Mastercard *** 0854</p>\r\n    </div>\r\n  </div>\r\n  <p class=\"data-protection\">{{ 'gPay.dataProtection' | translate }}</p>\r\n  <div class=\"pay\">\r\n    <p class=\"pay__total\">{{cartService.getTotalPrice() | currency:'EUR':'symbol'}}</p>\r\n    <ion-button class=\"pay__btn\" (click)=\"onPay()\">{{ 'gPay.pay' | translate }}</ion-button>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 47195:
/*!******************************************************************************!*\
  !*** ./src/app/components/login-first/login-first.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\r\n  <ion-button class=\"close-btn\" (click)=\"close()\" size=\"small\" fill=\"none\">\r\n    <ion-icon class=\"close-btn__icon\" name=\"close-outline\" slot=\"icon-only\"></ion-icon>\r\n  </ion-button>\r\n  <h1 class=\"title\">{{ 'modal.pleaseLoginFirst' | translate }}</h1>\r\n  <ion-button class=\"main-btn\" (click)=\"toLogin()\" expand=\"block\" size=\"large\" fill=\"outline\">{{ 'modal.goToLogin' | translate }}</ion-button>\r\n</div>\r\n";

/***/ }),

/***/ 73978:
/*!******************************************************************************!*\
  !*** ./src/app/components/menu-header/menu-header.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\" class=\"toolbar\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button class=\"toolbar__button\" mode=\"md\" defaultHref=\"/bakery-search\"></ion-back-button>\r\n    </ion-buttons>\r\n    <h1 class=\"toolbar__title ion-text-left\">{{title}}</h1>\r\n  </ion-toolbar>\r\n</ion-header>\r\n";

/***/ }),

/***/ 83267:
/*!**********************************************************************************!*\
  !*** ./src/app/components/payment-methods/debit/debit.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header></ion-header>\r\n<div class=\"top\"></div>\r\n<div class=\"container\">\r\n  <ion-icon class=\"arrow\" name=\"arrow-back-sharp\" (click)=\"back()\"></ion-icon>\r\n  <div class=\"header\">\r\n    <div class=\"header__title\">Zahlung per Lastschrift</div>\r\n    <img class=\"header__img\" src=\"assets/icons/payments/sepa.svg\">\r\n  </div>\r\n  <form class=\"form\" [formGroup]=\"form\" (ngSubmit)=\"buy()\">\r\n    <ion-item class=\"form__item item\">\r\n      <ion-label class=\"item__label\" position=\"stacked\">Vorname</ion-label>\r\n      <ion-input class=\"item__input\" formControlName=\"name\"></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"form__item item\">\r\n      <ion-label class=\"item__label\" position=\"stacked\">Name</ion-label>\r\n      <ion-input class=\"item__input\" formControlName=\"surname\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"row\">\r\n      <ion-item class=\"form__item form__item_big item\">\r\n        <ion-label class=\"item__label\" position=\"stacked\">Strasse</ion-label>\r\n        <ion-input class=\"item__input\" formControlName=\"street\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"form__item form__item_small item item-small\">\r\n        <ion-label class=\"item__label\" position=\"stacked\">Nr.</ion-label>\r\n        <ion-input class=\"item__input\" formControlName=\"stNumber\"></ion-input>\r\n      </ion-item>\r\n    </div>\r\n    <div class=\"row\">\r\n      <ion-item class=\"form__item form__item_big item\">\r\n        <ion-label class=\"item__label\" position=\"stacked\">Ort</ion-label>\r\n        <ion-input class=\"item__input\" formControlName=\"city\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"form__item form__item_small item item-small\">\r\n        <ion-label class=\"item__label\" position=\"stacked\">PLZ</ion-label>\r\n        <ion-input class=\"item__input\" formControlName=\"postcode\"></ion-input>\r\n      </ion-item>\r\n    </div>\r\n    <ion-item class=\"form__item item\">\r\n      <ion-label class=\"item__label\" position=\"stacked\">Kontoinhaber</ion-label>\r\n      <ion-input class=\"item__input\" formControlName=\"accountOwner\"></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"form__item item\">\r\n      <ion-label class=\"item__label\" position=\"stacked\">IBAN</ion-label>\r\n      <ion-input class=\"item__input\" formControlName=\"iban\"></ion-input>\r\n    </ion-item>\r\n    <ion-button class=\"form__btn\" type=\"submit\" expand=\"block\" [disabled]=\"form.invalid\">\r\n      {{cartServ.getTotalPrice() | currency:'EUR':'symbol'}} PAY\r\n    </ion-button>\r\n  </form>\r\n</div>\r\n";

/***/ }),

/***/ 75118:
/*!**************************************************************************************!*\
  !*** ./src/app/components/payment-methods/payment-methods.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-button class=\"close-btn\" (click)=\"closeModal()\" size=\"small\" fill=\"none\">\r\n  <ion-icon class=\"close-btn__icon\" slot=\"icon-only\" name=\"close-outline\"></ion-icon>\r\n</ion-button>\r\n<div class=\"container\">\r\n  <div class=\"title\">{{ 'menu.paymentMethods' | translate }}</div>\r\n  <div class=\"payments\">\r\n    <div class=\"payments__item item\" (click)=\"makePaymentBy('credit')\" tappable>\r\n      <ion-icon class=\"item__icon\" src=\"../../../assets/icons/payments/credit-card.svg\"></ion-icon>\r\n      <p class=\"item__label\">Kreditkarte</p>\r\n    </div>\r\n    <div class=\"payments__item item\" (click)=\"makePaymentBy('sofort')\" tappable>\r\n      <ion-icon *ngIf=\"isAndroid; else iosIcon\"\r\n                class=\"item__icon\" src=\"../../../assets/icons/payments/klarna.svg\"></ion-icon>\r\n      <ng-template #iosIcon>\r\n        <ion-icon class=\"item__icon\" src=\"../../../assets/icons/payments/klarna2.svg\"></ion-icon>\r\n      </ng-template>\r\n      <p class=\"item__label\">sofort.</p>\r\n    </div>\r\n    <div *ngIf=\"visiblePayPal\"\r\n         class=\"payments__item item\"\r\n         (click)=\"makePaymentBy('paypal')\"\r\n         tappable>\r\n      <ion-icon class=\"item__icon\"  src=\"../../../assets/icons/payments/paypal.svg\"></ion-icon>\r\n      <div ><p class=\"item__label\">PayPal</p>\r\n        <p>\r\n          <small class=\"low_sum\" *ngIf=\"checkTotalValue()\">{{ 'paymentMethods.minOrderPayPal' | translate}} {{minAmount}} € </small>\r\n        </p>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"payments__item item\" (click)=\"makePaymentBy('debit')\" tappable>\r\n      <ion-icon class=\"item__icon\" src=\"../../../assets/icons/payments/sepa.svg\"></ion-icon>\r\n      <p class=\"item__label\">Sepa Lastschrift</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 23252:
/*!********************************************************************************!*\
  !*** ./src/app/components/pick-up-date/pick-up-date.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\r\n    <ion-button class=\"close-btn\" size=\"small\" fill=\"none\" (click)=\"returnToBakeryList()\">\r\n        <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\r\n    </ion-button>\r\n    <h2 class=\"title-main\">{{ 'dateChoose.title' | translate }}</h2>\r\n        <div class=\"row\">\r\n        <ion-button class=\"btn btn-outline\" fill=\"outline\" [class.btn-outline_active]=\"isDelveryAvailable\" >{{ 'dateChoose.delivery' | translate }}</ion-button>\r\n        <ion-button class=\"btn btn-outline\" fill=\"outline\" [class.btn-outline_active]=\"!isDelveryAvailable\" >{{ 'dateChoose.takeaway' | translate }}</ion-button>\r\n    </div>\r\n    <span>{{'dateChoose.collectedDate' | translate}} {{currentDay}}</span>\r\n    <h2 class=\"title-date\">{{ 'dateChoose.сollectionDate' | translate }}</h2>\r\n    <div class=\"row\">\r\n        <ion-button class=\"btn btn-outline\" fill=\"outline\" [class.btn-outline_active]=\"activeBtn === 'today'\" (click)=\"onToday()\">{{ 'dateChoose.today' | translate }}</ion-button>\r\n        <ion-button class=\"btn btn-outline\" fill=\"outline\" [class.btn-outline_active]=\"activeBtn === 'tomorrow'\" (click)=\"onTomorrow()\">{{ 'dateChoose.tomorrow' | translate }}</ion-button>\r\n    </div>\r\n    <h2 class=\"label\">{{ 'dateChoose.orChooseDate' | translate }}</h2>\r\n    <ion-datetime-button datetime=\"date\" class=\"time-item ion-align-items-center\"></ion-datetime-button>\r\n\r\n    <!-- <ion-button color=\"light\" id=\"open-modal-date\" >\r\n  <ion-icon tappable slot=\"icon-only\" src=\"../../../assets/icons/bakery/calendar.svg\" ></ion-icon>\r\n</ion-button> -->\r\n<ion-modal #modal trigger=\"open-modal-date\" [keepContentsMounted]=\"true\" [initialBreakpoint]=\"1\" [breakpoints]=\"[1]\">\r\n    <ng-template>\r\n        <div class=\"calendar-center-wrapper\">\r\n            <ion-datetime \r\n                class=\"datetimeDate\"\r\n                id=\"date\"\r\n                [value]=\"date\"\r\n                #dateSelector\r\n                [showDefaultButtons]=\"true\"\r\n                [min]=\"datePickerMin\"\r\n                [max]=\"datePickerMax\"\r\n                presentation=\"date\"\r\n                (ionChange)=\"onCalendarChange($event.target.value)\">\r\n            </ion-datetime>\r\n        </div>\r\n    </ng-template>\r\n</ion-modal>\r\n\r\n    <h2 class=\"title-date\">{{ 'dateChoose.chooseTime' | translate }}</h2>\r\n\r\n    <ion-datetime-button datetime=\"time\" class=\"time-item ion-align-items-center\"></ion-datetime-button>\r\n    <!-- <ion-button id=\"open-modal-time\">{{time}}</ion-button> -->\r\n    <ion-modal [keepContentsMounted]=\"true\" [initialBreakpoint]=\"1\" [breakpoints]=\"[1]\">\r\n        <ng-template class=\"center\">\r\n            <ion-datetime id=\"time\" class=\"ion-datetime-Time\" (ionChange)=\"onTimeChange($event)\" presentation=\"time\"  [showDefaultButtons]=\"true\" minuteValues=\"0,15,30,45\" [attr.value]=\"time ? time : ''\" [disabled]=\"!date\"></ion-datetime>\r\n        </ng-template>\r\n    </ion-modal>\r\n\r\n    <div *ngIf=\"repeatOrder; else main\">\r\n        <ion-button class=\"btn btn-filled\" *ngIf=\"!isVerify\" expand=\"block\" (click)=\"redirectToPay()\" [disabled]=\"!date || !time\">\r\n            {{ 'dateChoose.confirm' | translate }}</ion-button>\r\n\r\n    </div>\r\n    <ng-template #main>\r\n        <ion-button class=\"btn btn-filled\" *ngIf=\"!isVerify\" expand=\"block\" (click)=\"onConfirm()\" [disabled]=\"!date || !time\">\r\n            {{ 'dateChoose.confirm' | translate }}</ion-button>\r\n        <ion-button class=\"btn btn-filled verify\" *ngIf=\"isVerify\" expand=\"block\" (click)=\"onConfirm()\" [disabled]=\"!date || !time\">{{ 'dateChoose.verify' | translate }}</ion-button>\r\n    </ng-template>\r\n\r\n</div>";

/***/ }),

/***/ 57913:
/*!**************************************************************************************!*\
  !*** ./src/app/components/product-details/product-details.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\r\n  <ion-button class=\"ion-float-right close-btn\" size=\"small\" fill=\"none\" (click)=\"closeModal()\">\r\n    <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\r\n  </ion-button>\r\n  <div class=\"header\">\r\n    <img class=\"header__img\" [src]=\"product?.photo\">\r\n    <ion-label class=\"header__name\">{{product?.name}}</ion-label>\r\n    <ion-label class=\"header__available\">{{ availability }}</ion-label>\r\n  </div>\r\n  <div class=\"product\">\r\n    <div class=\"product__details details\">\r\n      <h2 class=\"details__title\">Details</h2>\r\n      <ng-container *ngIf=\"product?.description\">\r\n        <h3 class=\"details__subtitle\">{{ 'productDetails.description' | translate }}</h3>\r\n        <p class=\"details__text\">{{product.description}}</p>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"product?.details\">\r\n        <h3 class=\"details__subtitle\">Details</h3>\r\n        <p class=\"details__text\">{{product.details}}</p>\r\n      </ng-container>\r\n      <h3 class=\"details__subtitle\">{{ 'productDetails.allergens' | translate }}</h3>\r\n      <div class=\"details__list list\">\r\n        <span class=\"list__item\" *ngFor=\"let allergen of product?.allergens, let i = index\">\r\n          {{allergen}}<ng-container *ngIf=\"i !== product?.allergens.length - 1\">, </ng-container>\r\n        </span>\r\n      </div>\r\n      <h3 class=\"details__subtitle\">{{ 'productDetails.ingredients' | translate }}</h3>\r\n      <p class=\"details__text\">{{product?.ingredients}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 35927:
/*!********************************************************************************!*\
  !*** ./src/app/components/product-item/product-item.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"product\">\r\n  <div class=\"col-left\" (click)=\"presentProductDetailsModal()\">\r\n    <ion-img *ngIf=\"saleServ.checkSale(date, product)\" class=\"discount-img\" src=\"../../../../assets/icons/discount.png\"></ion-img>\r\n    <ion-img class=\"product__img\" [src]=\"product?.photo\"></ion-img>\r\n    <ion-img class=\"product__img-corner product__img-corner_bio\" *ngIf=\"product.bio_certification\"\r\n             src=\"../../../../assets/img/bakery/bio.png\"></ion-img>\r\n    <ion-img class=\"product__img-corner product__img-corner_new\" *ngIf=\"product.is_new\"\r\n             src=\"../../../../assets/img/bakery/new.png\"></ion-img>\r\n\r\n<!-- If product has limited counter in response then add this field into ngIf -->\r\n    <!--    <div *ngIf=\"\" class=\"quantity\">{{counter}} items left to order</div>-->\r\n\r\n  </div>\r\n  <div class=\"col-center\">\r\n    <div class=\"row\">\r\n      <div>\r\n        <p class=\"product__name\">{{product.name}}</p>\r\n        <ion-button class=\"details\" (click)=\"presentProductDetailsModal()\" size=\"small\" fill=\"clear\">Details</ion-button>\r\n        <p ></p>\r\n      </div>\r\n      <div>\r\n        <p class=\"product__price\" [class.product__price_crossed-out]=\"saleServ.checkSale(date, product)\">\r\n          {{product.price | currency:product.currency == 'eur' ?'EUR' : 'CHF':'symbol'}}</p>\r\n        <p class=\"product__special-price\" *ngIf=\"saleServ.checkSale(date, product)\">\r\n            {{product.special_price | currency:product.currency == 'eur' ?'EUR' : 'CHF':'symbol'}}</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"product__count count\">\r\n    <ng-container *ngIf=\"product.isProductAvailable; else notAvailable\">\r\n      <ion-button class=\"count__btn\" size=\"small\" (click)=\"removeProductFromCart()\">-</ion-button>\r\n      <div class=\"count__value\">{{getProductCount(product.id)}}</div>\r\n      <ion-button class=\"count__btn\" size=\"small\" (click)=\"addProductToCart()\">+</ion-button>\r\n    </ng-container>\r\n    <ng-template #notAvailable>\r\n      <div class=\"count__message\">\r\n        {{ 'dateChoose.notAvailable' | translate }}\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 44018:
/*!********************************************************************************!*\
  !*** ./src/app/components/sliced-modal/sliced-modal.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"wrapper\">\r\n  <div class=\"text\">\r\n    <span>{{'sliced.cutQuestion' | translate}}</span>\r\n    <img src=\"../../assets/icons/bread.png\">\r\n  </div>\r\n  <div class=\"buttons-wrapper\">\r\n    <ion-button class=\"green-btn\" (click)=\"getAnswer('yes')\">{{'sliced.yes' | translate}}</ion-button>\r\n    <ion-button class=\"red-btn\" (click)=\"getAnswer('no')\">{{'sliced.no' | translate}}</ion-button>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 69467:
/*!**********************************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"spinner\" *ngIf=\"isLoading\">\r\n  <ion-spinner></ion-spinner>\r\n</div>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_components_module_ts.js.map