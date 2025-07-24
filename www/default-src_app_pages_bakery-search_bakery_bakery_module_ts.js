(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_bakery-search_bakery_bakery_module_ts"],{

/***/ 79121:
/*!*********************************************************************!*\
  !*** ./src/app/pages/bakery-search/bakery/bakery-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BakeryPageRoutingModule": () => (/* binding */ BakeryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _bakery_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bakery.page */ 37278);




const routes = [{
  path: '',
  component: _bakery_page__WEBPACK_IMPORTED_MODULE_0__.BakeryPage
}, {
  path: 'shopping-cart',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_bakery-search_bakery_shopping-cart_shopping-cart_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./shopping-cart/shopping-cart.module */ 22161)).then(m => m.ShoppingCartPageModule)
}];
let BakeryPageRoutingModule = class BakeryPageRoutingModule {};
BakeryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], BakeryPageRoutingModule);


/***/ }),

/***/ 51304:
/*!*************************************************************!*\
  !*** ./src/app/pages/bakery-search/bakery/bakery.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BakeryPageModule": () => (/* binding */ BakeryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _bakery_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bakery-routing.module */ 79121);
/* harmony import */ var _bakery_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bakery.page */ 37278);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/components.module */ 45642);









let BakeryPageModule = class BakeryPageModule {};
BakeryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _bakery_routing_module__WEBPACK_IMPORTED_MODULE_0__.BakeryPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  declarations: [_bakery_page__WEBPACK_IMPORTED_MODULE_1__.BakeryPage]
})], BakeryPageModule);


/***/ }),

/***/ 37278:
/*!***********************************************************!*\
  !*** ./src/app/pages/bakery-search/bakery/bakery.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BakeryPage": () => (/* binding */ BakeryPage)
/* harmony export */ });
/* harmony import */ var C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _bakery_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bakery.page.html?ngResource */ 30797);
/* harmony import */ var _bakery_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bakery.page.scss?ngResource */ 86850);
/* harmony import */ var _bakery_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bakery_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/logger.service */ 51273);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/date.service */ 82963);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/cart.service */ 90910);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/http.service */ 6858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_bakery_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/bakery.service */ 24934);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/modal.service */ 71609);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/account.service */ 89876);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/alert.service */ 25970);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/local-storage.service */ 18345);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);

















let BakeryPage = class BakeryPage {
  constructor(bakeryServ, cartService, accountServ, alertServ, dateService, httpServ, locStorageServ, logger, modalService, route, router, translate, cRef) {
    this.bakeryServ = bakeryServ;
    this.cartService = cartService;
    this.accountServ = accountServ;
    this.alertServ = alertServ;
    this.dateService = dateService;
    this.httpServ = httpServ;
    this.locStorageServ = locStorageServ;
    this.logger = logger;
    this.modalService = modalService;
    this.route = route;
    this.router = router;
    this.translate = translate;
    this.cRef = cRef;
    this.cart = [];
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.bakeryId = this.router.getCurrentNavigation().extras.state.bakeryId;
      }
    });
  }
  ngOnInit() {
    this.getUserData();
    this.dateService.changeDate(null);
    this.cartService.clearCart();
    this.getBakeryData();
    this.getAddress();
    this.dateService.dateShared.subscribe(res => {
      if (res) {
        this.date = res;
        this.setProductList();
      }
    });
    this.dateLocale = this.locStorageServ.getDateLocale();
    this.cartService.getTotalPrice();
  }
  getShortDayName(dayName) {
    return this.translate.instant(`days.${dayName.slice(0, 3)}`);
  }
  getUserData() {
    this.subscription = this.accountServ.sharedGuest$.subscribe(isGuest => {
      if (isGuest) {
        this.guest = isGuest;
      } else {
        this.accountServ.sharedAccount.subscribe(res => {
          if (res) {
            this.account = res;
          } else if (localStorage.getItem('token')) {
            this.httpServ.getUserDetails().subscribe(resp => this.account = resp);
          }
        });
      }
    });
  }
  getBakeryData() {
    this.httpServ.getBranchDetail(this.bakeryId).subscribe(res => {
      this.bakeryServ.changeBakery(res);
      if (!this.guest) {
        this.presentPickUpDateModal();
      }
      this.allWeek = res.branchDetails.opening_hours_new.allWeek;
      this.bakeryDetails = res.branchDetails;
      this.bakeryServ.setBakeryDetails(this.bakeryDetails);
      this.bakeryAddress = `${res.branchDetails.street} ${res.branchDetails.number}, ${res.branchDetails.city}`;
      this.bakeryInfoFull = res.branchDetails.description;
      this.bakeryInfo = this.trimBakeryInfo();
      this.setOpeningHours(res.branchDetails.opening_hours_new);
      this.cartService.setPeymentsSettings(res.branchDetails.payment_settings);
      this.categories = res.categories;
      if (res.categories[0] && res.categories[0].products) {
        this.selectedCategoryIndex = 0;
        this.setProductList();
      }
      this.lastUsedPayment = res?.last_used_payment;
    });
  }
  setOpeningHours(openingHours) {
    const openingHoursCopy = openingHours.default;
    // const openingHoursCopy = JSON.parse(JSON.stringify(openingHours.default));
    for (const day in openingHoursCopy) {
      if (openingHoursCopy.hasOwnProperty(day)) {
        if (openingHoursCopy[day]?.length === 3) {
          openingHoursCopy[day] = [];
        }
        openingHoursCopy[day] = openingHoursCopy[day].filter(item => item.start && item.end);
      }
    }
    this.openingHours = Object.entries(openingHoursCopy);
  }
  getAddress() {
    var _this = this;
    return (0,C_Users_vikra_OneDrive_Desktop_ionic_ap_testing_web_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.httpServ.getAddressById().subscribe(res => {
        if (res.apiStatus == true && res.apiCode == 200 && res.data) {
          console.log('Address API Response:', res);
          const addressData = res.data;
          // this.logger.log('Address data:', addressData);
          let SelectedAddress = addressData.deliveryAddresses.find(addr => addr.is_default == true);
          console.log('From GET this.defaultAddress:', SelectedAddress);
          _this.bakeryServ.updateAddresses(SelectedAddress);
        } else {
          _this.logger.log('Error fetching address:', res);
          _this.bakeryServ.updateAddresses(null);
        }
      });
      // await loading.dismiss();
    })();
  }

  onCategorySelect(index) {
    this.selectedCategoryIndex = index;
    // this.setProductList(index);
    const title = document.getElementById(`category_${index}`);
    this.content.scrollToPoint(0, title.offsetTop - 50, 1000);
  }
  changeCategory(index) {
    this.selectedCategoryIndex = index;
  }
  setProductList() {
    let list = this.categories.map(item => item.products);
    console.log('LIST', list);
    // list = list.map( category => category.filter(item => this.dateService.getProductAvailability(item)));
    // if (this.bakeryDetails?.delivery == 0) {
    list = list.map(category => category.map(product => ({
      ...product,
      isProductAvailable: this.dateService.getProductAvailability(product)
    })));
    // }
    this.productsList = list.map(item => item.map(filteredProduct => this.dateService.mapProductPrice(filteredProduct)));
  }
  getCart() {
    this.cartService.getCart();
  }
  presentPickUpDateModal(isVerify) {
    this.modalService.presentPickUpDateModal(isVerify);
  }
  onInfo() {
    this.isInfoFull = !this.isInfoFull;
  }
  trimBakeryInfo() {
    const maxLength = 90;
    if (this.bakeryInfoFull && this.bakeryInfoFull.length > maxLength) {
      const limit = this.bakeryInfoFull.substr(0, maxLength).lastIndexOf(' ');
      this.bakeryInfoTrim = `${this.bakeryInfoFull.substr(0, limit)} ...`;
    } else {
      this.bakeryInfoTrim = this.bakeryInfoFull;
    }
    return this.bakeryInfoTrim;
  }
  toggleBakeryInfo() {
    this.bakeryInfo = this.isBakeryInfoFull ? this.bakeryInfoTrim : this.bakeryInfoFull;
    this.isBakeryInfoFull = !this.isBakeryInfoFull;
  }
  // getProductAvailability(product: Product) {
  //   return this.dateService.getProductAvailability(product);
  // }
  openShoppingCart() {
    if (this.account.first_name && this.account.last_name && this.account.email) {
      const navigationExtras = {
        state: {
          data: {
            branchId: this.bakeryDetails.bakery_id,
            minOrderValue: this.bakeryDetails.min_order_value,
            lastUsedPayment: this.lastUsedPayment
          }
        }
      };
      this.router.navigate(['/bakery-search/bakery/shopping-cart'], navigationExtras);
    } else {
      this.alertServ.presentAlert(this.translate.instant('bakery.addMissedData'));
      this.router.navigate(['account']);
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  getPosition(e) {
    const dist = e.detail.scrollTop;
    const pos = document.getElementsByClassName('qq11');
    const htmlColArr = [];
    for (let i = 0; i < pos.length; i++) {
      htmlColArr.push(pos[i]);
    }
    const offsetTopArr = htmlColArr.map(div => {
      return div = div.offsetTop - document.body.clientHeight / 2;
    });
    for (let i = 0; i <= offsetTopArr.length; i++) {
      if (dist > offsetTopArr[i]) {
        this.changeCategory(i);
      }
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_bakery_service__WEBPACK_IMPORTED_MODULE_7__.BakeryService
  }, {
    type: _services_cart_service__WEBPACK_IMPORTED_MODULE_5__.CartService
  }, {
    type: _services_account_service__WEBPACK_IMPORTED_MODULE_9__.AccountService
  }, {
    type: _services_alert_service__WEBPACK_IMPORTED_MODULE_10__.AlertService
  }, {
    type: _services_date_service__WEBPACK_IMPORTED_MODULE_4__.DateService
  }, {
    type: _services_http_service__WEBPACK_IMPORTED_MODULE_6__.HttpService
  }, {
    type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_11__.LocalStorageService
  }, {
    type: _services_logger_service__WEBPACK_IMPORTED_MODULE_3__.LoggerService
  }, {
    type: _services_modal_service__WEBPACK_IMPORTED_MODULE_8__.ModalService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef
  }];
  static #_2 = this.propDecorators = {
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
      args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonContent]
    }]
  };
};
BakeryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-bakery',
  template: _bakery_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_bakery_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], BakeryPage);


/***/ }),

/***/ 86850:
/*!************************************************************************!*\
  !*** ./src/app/pages/bakery-search/bakery/bakery.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header {\n  position: relative;\n}\n.header .toolbar {\n  height: 22.47vh;\n}\n.header .toolbar__btn {\n  --color: #fff;\n  --icon-font-size: 35px;\n}\n.header .toolbar__img {\n  width: 46vw;\n  height: 46vw;\n  position: absolute;\n  bottom: -50%;\n  left: calc((100% - 46vw) / 2);\n  border-radius: 50%;\n  z-index: 10;\n}\n\n.content {\n  font: normal normal 400 12px/15px Montserrat;\n  color: #493735;\n}\n\n.container {\n  padding: 2vh 8.27vw;\n}\n\n.info {\n  padding: 9.8vh 0 1vh;\n  font: normal normal 400 12px/15px Montserrat;\n  color: #493735;\n}\n.info .row {\n  display: flex;\n  justify-content: space-between;\n}\n.info__title {\n  font: normal normal 400 20px/24px Montserrat;\n}\n.info__icon {\n  --color: #000;\n  font-size: 24px;\n}\n.info__rate {\n  padding: 1.97vh 0;\n}\n.info .rate {\n  display: flex;\n  align-items: center;\n}\n.info .rate__img {\n  width: 81px;\n  margin: 0 8px 0 0;\n}\n.info__description {\n  padding: 0 6vw 0 0;\n}\n.info .description__continue {\n  padding: 0 0 0 3px;\n  font: normal normal 400 10px/13px Montserrat;\n  color: #FEDE00;\n}\n\n.info-details {\n  font: normal normal 400 12px/15px Montserrat;\n  color: #493735;\n}\n.info-details__icons-row {\n  padding: 3.94vh 0 2.09vh;\n}\n.info-details__icons-row-icon {\n  width: 27px;\n  margin: 0 4.8vw 0 0;\n}\n.info-details .open-hours__row {\n  display: flex;\n}\n.info-details .open-hours__icon {\n  font-size: 24px;\n}\n.info-details .open-hours__list {\n  padding: 11px 0 16px 4vw;\n}\n.info-details .open-hours .list__title {\n  padding: 0 0 1.35vh;\n}\n.info-details .open-hours .list__item {\n  width: 115px;\n  display: flex;\n  text-transform: capitalize;\n}\n.info-details .open-hours .list__item-day {\n  width: 30px;\n  margin-right: 5px;\n}\n.info-details .pick-up-place {\n  padding: 17px 33px 25px;\n  border-top: 1px solid #707070;\n  border-bottom: 1px solid #707070;\n}\n.info-details .pick-up-place__title {\n  padding: 0 0 11px;\n}\n.info-details .pick-up-place__text {\n  width: 150px;\n}\n.info-details .reminder {\n  padding: 0 3vw 0 8.27vw;\n  margin: 15px 0 11px;\n  font: normal normal 400 15px/19px Montserrat;\n}\n.sections {\n  width: 100%;\n  height: 45px;\n  padding: 0 0 0 1.27vw;\n  margin-bottom: 20px;\n  display: flex;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  overflow-x: scroll;\n  background: #F6F6F6;\n}\n.sections__item {\n  display: flex;\n  align-items: center;\n  padding: 0 5.87vw;\n  font: normal normal 400 15px/19px Montserrat;\n  color: #493735;\n}\n.sections__item_selected {\n  background: #FEDE00;\n  border: 1px solid #FEDE00;\n  border-radius: 6.13vw;\n  font: normal normal 600 15px/19px Montserrat;\n  color: #FFFFFF;\n}\n\n.products-container {\n  width: 90vw;\n  padding: 0 0 2vh;\n  margin: 0 auto 1vh;\n}\n\n.date {\n  height: 43px;\n  margin: 20px 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #CBCBCB;\n}\n.date__text {\n  text-decoration: underline;\n  font: normal normal 400 12px/15px Montserrat;\n}\n.date .btn__icon {\n  font-size: 14px;\n}\n\n.cart {\n  width: 100%;\n  height: 63px;\n  position: fixed;\n  bottom: 5.17vh;\n  display: flex;\n  align-items: center;\n  background: #0E8DF1;\n  border: 1px solid #FEDE00;\n}\n.cart__icon-wrapper {\n  margin: 0 11vw 0 5vw;\n  position: relative;\n}\n@media (max-width: 320px) {\n  .cart__icon-wrapper {\n    margin: 0 5vw 0 3vw;\n  }\n}\n.cart__icon {\n  font-size: 36px;\n}\n.cart__icon-badge {\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  bottom: -3px;\n  right: -15px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #FEDE00;\n  font: normal normal 400 12px/15px Montserrat;\n}\n.cart__text {\n  font: normal normal 400 20px/24px Montserrat;\n  color: #FFFFFF;\n}\n\n.no-items {\n  height: 30vh;\n  margin: 20px 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #CBCBCB;\n  padding: 0 4vh;\n}\n\n.category-divider {\n  background: #FEDE00;\n  height: 5vh;\n  border-radius: 3vh;\n  margin-bottom: 1.2vh;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2.2vh;\n  font-weight: bold;\n}\n\n.hidden-element {\n  visibility: hidden;\n  margin-top: -14vw;\n}\n\n.products-area {\n  margin-bottom: 10vh;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/bakery-search/bakery/bakery.page.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;AACF;AACE;EAEE,eAAA;AAAJ;AACI;EACE,aAAA;EACA,sBAAA;AACN;AAEI;EACE,WARS;EAST,YATS;EAUT,kBAAA;EACA,YAAA;EACA,6BAAA;EACA,kBAAA;EACA,WAAA;AAAN;;AAKA;EACE,4CAAA;EACA,cAAA;AAFF;;AAKA;EACE,mBAAA;AAFF;;AAKA;EACE,oBAAA;EACA,4CAAA;EACA,cAAA;AAFF;AAIE;EACE,aAAA;EACA,8BAAA;AAFJ;AAKE;EACE,4CAAA;AAHJ;AASE;EACE,aAAA;EACA,eAAA;AAPJ;AAUE;EACE,iBAAA;AARJ;AAWE;EACE,aAAA;EACA,mBAAA;AATJ;AAWI;EACE,WAAA;EACA,iBAAA;AATN;AAaE;EACE,kBAAA;AAXJ;AAeI;EACE,kBAAA;EACA,4CAAA;EACA,cAAA;AAbN;;AAmBA;EACE,4CAAA;EACA,cAAA;AAhBF;AAkBE;EACE,wBAAA;AAhBJ;AAkBI;EACE,WAAA;EACA,mBAAA;AAhBN;AAqBI;EACE,aAAA;AAnBN;AAsBI;EACE,eAAA;AApBN;AAuBI;EACE,wBAAA;AArBN;AAyBM;EACE,mBAAA;AAvBR;AAyBM;EACE,YAAA;EACA,aAAA;EACA,0BAAA;AAvBR;AA0BM;EACE,WAAA;EACA,iBAAA;AAxBR;AA6BE;EACE,uBAAA;EACA,6BAAA;EACA,gCAAA;AA3BJ;AA6BI;EACE,iBAAA;AA3BN;AA8BI;EACE,YAAA;AA5BN;AAgCE;EACE,uBAAA;EACA,mBAAA;EACA,4CAAA;AA9BJ;AAyCA;EACE,WAAA;EACA,YAAA;EACA,qBAAA;EACA,mBAAA;EACA,aAAA;EACA,gBAAA;EACA,MAAA;EACA,UAAA;EACA,kBAAA;EACA,mBAAA;AAvCF;AAyCE;EACE,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,4CAAA;EACA,cAAA;AAvCJ;AAyCI;EACE,mBAAA;EACA,yBAAA;EACA,qBAAA;EACA,4CAAA;EACA,cAAA;AAvCN;;AA4CA;EACE,WAAA;EACA,gBAAA;EACA,kBAAA;AAzCF;;AA6CA;EACE,YAAA;EACA,cAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;AA1CF;AA4CE;EACE,0BAAA;EACA,4CAAA;AA1CJ;AA8CI;EACE,eAAA;AA5CN;;AAiDA;EACE,WAAA;EACA,YAAA;EACA,eAAA;EACA,cAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,yBAAA;AA9CF;AAgDE;EACE,oBAAA;EACA,kBAAA;AA9CJ;AA+CI;EAHF;IAII,mBAAA;EA5CJ;AACF;AA+CE;EACE,eAAA;AA7CJ;AAgDE;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;EACA,4CAAA;AA9CJ;AAiDE;EACE,4CAAA;EACA,cAAA;AA/CJ;;AAkDA;EACE,YAAA;EACA,cAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;EACA,cAAA;AA/CF;;AAkDA;EACE,mBAAA;EACA,WAAA;EACA,kBAAA;EACA,oBAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,iBAAA;AA/CF;;AAiDA;EACE,kBAAA;EACA,iBAAA;AA9CF;;AAiDA;EACE,mBAAA;AA9CF","sourcesContent":[".header {\r\n  position: relative;\r\n\r\n  .toolbar {\r\n    $logoSize: 46vw;\r\n    height: 22.47vh;\r\n    &__btn {\r\n      --color: #fff;\r\n      --icon-font-size: 35px;\r\n    }\r\n\r\n    &__img {\r\n      width: $logoSize;\r\n      height: $logoSize;\r\n      position: absolute;\r\n      bottom: -50%;\r\n      left: calc((100% - #{$logoSize}) / 2);\r\n      border-radius: 50%;\r\n      z-index: 10;\r\n    }\r\n  }\r\n}\r\n\r\n.content {\r\n  font: normal normal 400 12px/15px Montserrat;\r\n  color: #493735;\r\n}\r\n\r\n.container {\r\n  padding: 2vh 8.27vw;\r\n}\r\n\r\n.info {\r\n  padding: 9.8vh 0 1vh;\r\n  font: normal normal 400 12px/15px Montserrat;\r\n  color: #493735;\r\n\r\n  .row {\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  &__title {\r\n    font: normal normal 400 20px/24px Montserrat;\r\n  }\r\n\r\n  &__text {\r\n  }\r\n\r\n  &__icon {\r\n    --color: #000;\r\n    font-size: 24px;\r\n  }\r\n\r\n  &__rate {\r\n    padding: 1.97vh 0;\r\n  }\r\n\r\n  .rate {\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    &__img {\r\n      width: 81px;\r\n      margin: 0 8px 0 0;\r\n    }\r\n  }\r\n\r\n  &__description {\r\n    padding: 0 6vw 0 0;\r\n  }\r\n\r\n  .description {\r\n    &__continue {\r\n      padding: 0 0 0 3px;\r\n      font: normal normal 400 10px/13px Montserrat;\r\n      color: #FEDE00;\r\n    }\r\n  }\r\n\r\n}\r\n\r\n.info-details {\r\n  font: normal normal 400 12px/15px Montserrat;\r\n  color: #493735;\r\n\r\n  &__icons-row {\r\n    padding: 3.94vh 0 2.09vh;\r\n\r\n    &-icon {\r\n      width: 27px;\r\n      margin: 0 4.8vw 0 0;\r\n    }\r\n  }\r\n\r\n  .open-hours {\r\n    &__row {\r\n      display: flex;\r\n    }\r\n\r\n    &__icon {\r\n      font-size: 24px;\r\n    }\r\n\r\n    &__list {\r\n      padding: 11px 0 16px 4vw;\r\n    }\r\n\r\n    .list {\r\n      &__title {\r\n        padding: 0 0 1.35vh;\r\n      }\r\n      &__item {\r\n        width: 115px;\r\n        display: flex;\r\n        text-transform: capitalize;\r\n      }\r\n\r\n      &__item-day {\r\n        width: 30px;\r\n        margin-right: 5px;\r\n      }\r\n    }\r\n  }\r\n\r\n  .pick-up-place {\r\n    padding: 17px 33px 25px;\r\n    border-top: 1px solid #707070;\r\n    border-bottom: 1px solid #707070;\r\n\r\n    &__title {\r\n      padding: 0 0 11px;\r\n    }\r\n\r\n    &__text {\r\n      width: 150px;\r\n    }\r\n  }\r\n\r\n  .reminder {\r\n    padding: 0 3vw 0 8.27vw;\r\n    margin: 15px 0 11px;\r\n    font: normal normal 400 15px/19px Montserrat;\r\n\r\n    &__title {\r\n    }\r\n\r\n    &__txt {\r\n    }\r\n  }\r\n\r\n}\r\n\r\n.sections {\r\n  width: 100%;\r\n  height: 45px;\r\n  padding: 0 0 0 1.27vw;\r\n  margin-bottom: 20px;\r\n  display: flex;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1;\r\n  overflow-x: scroll;\r\n  background: #F6F6F6;\r\n\r\n  &__item {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 0 5.87vw;\r\n    font: normal normal 400 15px/19px Montserrat;\r\n    color: #493735;\r\n\r\n    &_selected {\r\n      background: #FEDE00;\r\n      border: 1px solid #FEDE00;\r\n      border-radius: 6.13vw;\r\n      font: normal normal 600 15px/19px Montserrat;\r\n      color: #FFFFFF;\r\n    }\r\n  }\r\n}\r\n\r\n.products-container {\r\n  width: 90vw;\r\n  padding: 0 0 2vh;\r\n  margin: 0 auto 1vh;\r\n}\r\n\r\n\r\n.date {\r\n  height: 43px;\r\n  margin: 20px 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: 1px solid #CBCBCB;\r\n\r\n  &__text {\r\n    text-decoration: underline;\r\n    font: normal normal 400 12px/15px Montserrat;\r\n  }\r\n  &__btn {}\r\n  .btn {\r\n    &__icon {\r\n      font-size: 14px;\r\n    }\r\n  }\r\n}\r\n\r\n.cart {\r\n  width: 100%;\r\n  height: 63px;\r\n  position: fixed;\r\n  bottom: 5.17vh;\r\n  display: flex;\r\n  align-items: center;\r\n  background: #0E8DF1;\r\n  border: 1px solid #FEDE00;\r\n\r\n  &__icon-wrapper {\r\n    margin: 0 11vw 0 5vw;\r\n    position: relative;\r\n    @media (max-width: 320px) {\r\n      margin: 0 5vw 0 3vw;\r\n    }\r\n  }\r\n\r\n  &__icon {\r\n    font-size: 36px;\r\n  }\r\n\r\n  &__icon-badge {\r\n    width: 25px;\r\n    height: 25px;\r\n    position: absolute;\r\n    bottom: -3px;\r\n    right: -15px;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: #FEDE00;\r\n    font: normal normal 400 12px/15px Montserrat;\r\n  }\r\n\r\n  &__text {\r\n    font: normal normal 400 20px/24px Montserrat;\r\n    color: #FFFFFF;\r\n  }\r\n}\r\n.no-items {\r\n  height: 30vh;\r\n  margin: 20px 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: 1px solid #CBCBCB;\r\n  padding: 0 4vh;\r\n\r\n}\r\n.category-divider {\r\n  background: #FEDE00;\r\n  height: 5vh;\r\n  border-radius: 3vh;\r\n  margin-bottom: 1.2vh;\r\n  color: white;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 2.2vh;\r\n  font-weight: bold;\r\n}\r\n.hidden-element {\r\n  visibility: hidden;\r\n  margin-top: -14vw;\r\n}\r\n\r\n.products-area {\r\n  margin-bottom: 10vh;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 30797:
/*!************************************************************************!*\
  !*** ./src/app/pages/bakery-search/bakery/bakery.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header></ion-header>\r\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"getPosition($event)\">\r\n  <div class=\"header\">\r\n    <ion-toolbar class=\"toolbar\" *ngIf=\"bakeryDetails?.photo\" [style.--background]=\"'url(' + bakeryDetails?.photo +') center/cover'\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button class=\"toolbar__btn\" mode=\"md\" defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n    <img class=\"toolbar__img\" *ngIf=\"bakeryDetails?.bakery_logo\" [src]=\"bakeryDetails.bakery_logo\">\r\n  </div>\r\n  <div class=\"info\">\r\n    <div class=\"info-main\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div>\r\n            <h3 class=\"info__title\">{{bakeryDetails?.name}}</h3>\r\n            <p class=\"info__text\">{{bakeryAddress}}</p>\r\n          </div>\r\n          <ion-icon class=\"info__icon\" src=\"../../../../assets/icons/bakery/info.svg\" (click)=\"onInfo()\"\r\n                    tappable></ion-icon>\r\n        </div>\r\n        <div class=\"info__rate rate\">\r\n<!--          <img class=\"rate__img\" src=\"../../../../assets/img/bakery/stars4.jpg\">-->\r\n<!--          <span class=\"info__text\">4,1 /5 (15)</span>-->\r\n        </div>\r\n        <p class=\"info__description description\">\r\n          {{bakeryInfo}}\r\n          <span class=\"description__continue\" *ngIf=\"bakeryInfoTrim !== bakeryInfoFull && !isBakeryInfoFull\"\r\n                (click)=\"toggleBakeryInfo()\" tappable>{{ 'bakery.continue' | translate }}</span>\r\n          <span class=\"description__continue\" *ngIf=\"bakeryInfoTrim !== bakeryInfoFull && isBakeryInfoFull\"\r\n                (click)=\"toggleBakeryInfo()\" tappable>{{ 'bakery.turn' | translate }}</span>\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"info-details\" *ngIf=\"isInfoFull\">\r\n      <div class=\"container\">\r\n        <div class=\"info-details__icons-row\">\r\n          <img class=\"info-details__icons-row-icon\" *ngFor=\"let feature of bakeryDetails?.features\"\r\n                    [src]=\"bakeryServ.getIcon(feature)\">\r\n        </div>\r\n        <div class=\"open-hours\">\r\n          <div class=\"open-hours__row\">\r\n            <div>\r\n              <ion-icon class=\"open-hours__icon\" src=\"../../../../assets/icons/bakery/calendar&clock.svg\"></ion-icon>\r\n            </div>\r\n            <div class=\"open-hours__list list\">\r\n              <p class=\"list__title\">{{ 'bakery.openHour' | translate }} <span *ngIf=\"allWeek\">24/7</span></p>\r\n              <ng-container *ngIf=\"!allWeek\">\r\n                <div class=\"list__item\" *ngFor=\"let item of openingHours\">\r\n                  <span class=\"list__item-day\">{{ getShortDayName(item[0]) }}</span>\r\n                  <span *ngIf=\"item[1].length > 0; else dash\">{{item[1][0].start}}\r\n                    - {{item[1][item[1].length - 1].end}}</span>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n            <div class=\"open-hours__list list\" *ngIf=\"!allWeek\">\r\n              <p class=\"list__title\">{{ 'bakery.lunchBreak' | translate }}:</p>\r\n              <div class=\"list__item\" *ngFor=\"let item of openingHours\">\r\n                <span *ngIf=\"item[1].length > 1; else dash\">{{item[1][0].end}} - {{item[1][item[1].length - 1].start}}</span>\r\n              </div>\r\n            </div>\r\n            <ng-template #dash>-</ng-template>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"pick-up-place\">\r\n        <p class=\"pick-up-place__title\">{{ 'bakery.pickUpHere' | translate }}</p>\r\n        <p class=\"pick-up-place__text\">{{bakeryAddress}}</p>\r\n      </div>\r\n      <div class=\"reminder\">\r\n        <p class=\"reminder__title\">{{ 'bakery.reminderTitle' | translate }}</p>\r\n        <p class=\"reminder__txt\">{{ 'bakery.reminderTxt' | translate }}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"products\" *ngIf=\"!isInfoFull\">\r\n    <div class=\"sections\">\r\n      <div class=\"sections__item\"  *ngFor=\"let category of categories, let i = index\"\r\n           (click)=\"onCategorySelect(i)\"\r\n           [class.sections__item_selected]=\"i === selectedCategoryIndex\" tappable>{{category.name}}</div>\r\n    </div>\r\n    <div class=\"products-container\">\r\n      <div class=\"date\" *ngIf=\"!guest\">\r\n        <p class=\"date__text\">{{ 'bakery.collection' | translate }}:\r\n          {{ date | date:'EEEE, dd.MM.yy,  HH:mm': '' : dateLocale}}\r\n          {{ 'orders.hrs' | translate }}</p>\r\n        <ion-button class=\"date__btn btn\" size=\"small\" fill=\"clear\" (click)=\"presentPickUpDateModal(true)\">\r\n          <ion-icon class=\"btn__icon\" slot=\"icon-only\"\r\n                    src=\"../../../../../assets/icons/shopping-cart/pen.svg\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"products-area\">\r\n        <div id=\"category_{{i}}\"   *ngFor=\"let category of categories; let i = index\">\r\n          <div class=\"category-divider qq11\" *ngIf=\"category.products.length > 0\" [class.hidden-element]=\"i === 0\">{{category.name}}</div>\r\n          <app-product-item *ngFor=\"let product of productsList[i]; let i = index\" [date]=\"date\" [product]=\"product\"></app-product-item>\r\n        </div>\r\n      </div>\r\n\r\n<!--      <div *ngIf=\"productsList; else noItems\" >-->\r\n<!--        <app-product-item *ngFor=\"let product of productsList\" [date]=\"date\" [product]=\"product\"></app-product-item>-->\r\n\r\n<!--      </div>-->\r\n<!--      <ng-template #noItems>-->\r\n<!--        <div class=\"no-items\">{{ 'bakery.noItems' | translate }}</div>-->\r\n<!--      </ng-template>-->\r\n    </div>\r\n    <div class=\"cart\" *ngIf=\"cartService.getCart().length > 0\" tappable (click)=\"openShoppingCart()\">\r\n      <div class=\"cart__icon-wrapper\">\r\n        <ion-icon class=\"cart__icon\" src=\"../../../../assets/icons/shopping-cart/shopping-bag.svg\"></ion-icon>\r\n        <ion-badge class=\"cart__icon-badge\">{{cartService.getTotalCount()}}</ion-badge>\r\n      </div>\r\n      <p class=\"cart__text\">\r\n        {{ 'shoppingCart.header' | translate }} ({{cartService.getTotalPrice() | currency:'EUR':'symbol'}})</p>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_bakery-search_bakery_bakery_module_ts.js.map