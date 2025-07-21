(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_menu_orders_orders_module_ts"],{

/***/ 28602:
/*!************************************************************!*\
  !*** ./src/app/pages/menu/orders/orders-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersPageRoutingModule": () => (/* binding */ OrdersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders.page */ 75549);




const routes = [{
  path: '',
  component: _orders_page__WEBPACK_IMPORTED_MODULE_0__.OrdersPage
}];
let OrdersPageRoutingModule = class OrdersPageRoutingModule {};
OrdersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], OrdersPageRoutingModule);


/***/ }),

/***/ 26825:
/*!****************************************************!*\
  !*** ./src/app/pages/menu/orders/orders.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersPageModule": () => (/* binding */ OrdersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders-routing.module */ 28602);
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.page */ 75549);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/components.module */ 45642);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 33935);









let OrdersPageModule = class OrdersPageModule {};
OrdersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _orders_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrdersPageRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule],
  declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_1__.OrdersPage]
})], OrdersPageModule);


/***/ }),

/***/ 75549:
/*!**************************************************!*\
  !*** ./src/app/pages/menu/orders/orders.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersPage": () => (/* binding */ OrdersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _orders_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders.page.html?ngResource */ 9464);
/* harmony import */ var _orders_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.page.scss?ngResource */ 96592);
/* harmony import */ var _orders_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_orders_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/logger.service */ 51273);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/http.service */ 6858);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/local-storage.service */ 18345);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/date.service */ 82963);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/modal.service */ 71609);
/* harmony import */ var _services_bakery_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/bakery.service */ 24934);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/cart.service */ 90910);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/alert.service */ 25970);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 33935);















let OrdersPage = class OrdersPage {
  constructor(dateServ, httpServ, localStorServ, logger, route, router, modalService, bakeryServ, cartServ, vps, alertServ, translate) {
    this.dateServ = dateServ;
    this.httpServ = httpServ;
    this.localStorServ = localStorServ;
    this.logger = logger;
    this.route = route;
    this.router = router;
    this.modalService = modalService;
    this.bakeryServ = bakeryServ;
    this.cartServ = cartServ;
    this.vps = vps;
    this.alertServ = alertServ;
    this.translate = translate;
    this.orderId = null;
    this.ordersToShow = [];
    this.segmentValue = 'current';
    this.isPush = true;
    this.absentProducts = [];
    this.timeZoneMinutesOffset = new Date().getTimezoneOffset();
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        // this.isConfirm = this.router.getCurrentNavigation().extras.state.isConfirm;
        this.orderId = this.router.getCurrentNavigation().extras.state.orderId;
        this.isPush = false;
        this.logger.log('this.orderId in orders page: ', this.orderId);
      }
    }, error => {
      console.log(error);
    });
  }
  ionViewWillEnter() {
    this.dateLocale = this.localStorServ.getDateLocale();
    if (this.orderId) {
      this.httpServ.getOrderDetails(this.orderId).subscribe(res => {
        this.ordersToShow.push(res);
      });
    } else {
      this.getOrders();
    }
  }
  getOrders(event) {
    this.httpServ.getOrders().subscribe(res => {
      this.orders = res;
      this.ordersToShow = this.orders[this.segmentValue];
      if (event) {
        event.target.complete();
      }
    });
  }
  doRefresh(event) {
    if (!this.orderId) {
      this.getOrders(event);
    }
  }
  getDate(date) {
    return this.dateServ.getIsoDateFromServerDate(date, this.timeZoneMinutesOffset);
  }
  segmentChanged(value) {
    this.segmentValue = value;
    this.ordersToShow = this.orders[value];
  }
  onSaveChange() {
    this.isSave = !this.isSave;
    if (this.isSave) {}
  }
  repeatOrder(order, branchId, orderList) {
    this.orderId = order;
    this.bakeryId = branchId;
    this.cartServ.clearCart();
    this.httpServ.getReorderData(this.orderId).subscribe(res => {
      if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS') {
        if (res.products_for_repeat.length === 0) {
          this.alertServ.presentAlert(this.translate.instant('shoppingCart.reorderEmptyBasket'));
          this.router.navigate(['orders']);
        } else {
          if (res.unavailabile_products.length > 0) {
            for (let i = 0; i <= res.unavailabile_products.length - 1; i++) {
              this.createNotAvailableProducts(res.unavailabile_products[i], orderList);
            }
            this.cartServ.addAbsentCart(this.absentProducts);
          }
          this.reorderProducts = res.products_for_repeat;
          this.reorderProducts.map(product => {
            product.quantity = 'reorder';
            this.cartServ.addReorderToCart(product, product.count);
            const cart = this.cartServ.getCart();
          });
          setTimeout(() => {
            this.router.navigate(['bakery-search']);
          }, 1000);
          this.getBakeryData();
        }
      } else {
        this.alertServ.presentAlert(`Something went wrong! Please contact support!`);
      }
    });
  }
  createNotAvailableProducts(id, orderListProducts) {
    const index = orderListProducts.findIndex(product => product.product_id === id);
    const currentProduct = orderListProducts[index];
    this.absentProducts.push(currentProduct);
  }
  getBakeryData() {
    this.httpServ.getBranchDetail(this.bakeryId).subscribe(res => {
      this.bakeryServ.changeBakery(res);
      this.allWeek = res.branchDetails.opening_hours_new.allWeek;
      this.bakeryDetails = res.branchDetails;
      this.bakeryAddress = `${res.branchDetails.street} ${res.branchDetails.number}, ${res.branchDetails.city}`;
      this.bakeryInfoFull = res.branchDetails.description;
      this.setOpeningHours(res.branchDetails.opening_hours_new);
      this.lastUsedPayment = res?.last_used_payment;
      this.reOrderDataArray = {
        orderId: this.orderId,
        bakeryId: this.bakeryId,
        lastUsedPayment: this.lastUsedPayment,
        reorder: true
      };
      this.modalService.presentPickUpDateModal(false, true, this.reOrderDataArray);
    });
  }
  setOpeningHours(openingHours) {
    const openingHoursCopy = JSON.parse(JSON.stringify(openingHours.default));
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
  static #_ = this.ctorParameters = () => [{
    type: _services_date_service__WEBPACK_IMPORTED_MODULE_5__.DateService
  }, {
    type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService
  }, {
    type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService
  }, {
    type: _services_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
  }, {
    type: _services_modal_service__WEBPACK_IMPORTED_MODULE_6__.ModalService
  }, {
    type: _services_bakery_service__WEBPACK_IMPORTED_MODULE_7__.BakeryService
  }, {
    type: _services_cart_service__WEBPACK_IMPORTED_MODULE_8__.CartService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.ViewportScroller
  }, {
    type: _services_alert_service__WEBPACK_IMPORTED_MODULE_9__.AlertService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService
  }];
};
OrdersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-orders',
  template: _orders_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_orders_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], OrdersPage);


/***/ }),

/***/ 96592:
/*!***************************************************************!*\
  !*** ./src/app/pages/menu/orders/orders.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container {\n  padding: 0 9.33vw;\n  color: #493735;\n}\n\n.segment {\n  height: 5.91vh;\n  margin: 3.69vh 0 0;\n  --background: #fff;\n}\n.segment__btn {\n  --indicator-box-shadow: none;\n  --border-radius: 0;\n  --background-checked: #FEDE00;\n  border: 1px solid #FEDE00;\n  --indicator-color: #FEDE00;\n  font: normal normal 400 20px/24px Montserrat;\n}\n\n.title {\n  margin: 3.69vh 1vw 0;\n  text-align: center;\n  font: normal normal 700 20px/24px Montserrat;\n  color: #493735;\n}\n\n.save {\n  margin: 3vh 0 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.save__txt {\n  font: normal normal 500 12px/15px Montserrat;\n}\n.save__toggle.toggle-checked {\n  --handle-background-checked: #fff;\n  --background-checked: #34DB34;\n}\n\nion-toggle.toggle-checked {\n  --handle-box-shadow: 0 0 2px 0 #33F333;\n}\n\n.full-order {\n  position: relative;\n  padding: 4vh 0 3vh;\n}\n.full-order:last-child:after {\n  display: none;\n}\n.full-order:after {\n  bottom: 0;\n  left: 0;\n  border-bottom: 5px solid #FEDE00;\n  position: absolute;\n  content: \"\";\n  width: 100%;\n}\n\n.order {\n  padding: 1.6vh 4.8vw 0;\n  margin: 0 5.87vw 3.57vh;\n  border: 1px solid #D9D9D9;\n  border-radius: 5px;\n}\n.order__bakery {\n  font: normal normal 600 25px/30px Montserrat;\n  color: #493735;\n}\n.order__time-title {\n  font: normal normal bold 15px/30px Montserrat;\n  color: #493735;\n}\n.order__time {\n  padding: 0 0 1.5vh;\n  font: normal normal bold 25px/30px Montserrat;\n  color: #493735;\n}\n.order__time_purple {\n  color: #FF68B4;\n}\n.order__grid {\n  padding: 0;\n  font: normal normal normal 15px/19px Montserrat;\n  color: #493735;\n}\n.order .grid__row {\n  padding: 1.6vh 0;\n}\n.order .grid__row_total {\n  border-top: 1px solid #c3bebe;\n}\n.order .grid__col:last-child {\n  text-align: right;\n}\n\n.pick-up__text {\n  font: normal normal 400 15px/19px Montserrat;\n  color: #493735;\n}\n.pick-up__text:last-child {\n  padding: 0 0 1.6vh;\n}\n.pick-up__title {\n  margin: 1.85vh 8.6vw 2.46vh;\n  font: normal normal 400 20px/24px Montserrat;\n  color: #493735;\n}\n.pick-up__code {\n  width: 100%;\n  padding: 1.6vh 0;\n  background: #FEDE00;\n  border-radius: 5px;\n  font: normal normal 400 50px/61px Montserrat;\n  text-align: center;\n  color: #493735;\n}\n.pick-up__code_completed {\n  background: #F0F0F0;\n  position: relative;\n}\n.pick-up__code_completed:before {\n  top: calc(50% - 5px / 2);\n  left: 25%;\n  border-bottom: 5px solid red;\n  position: absolute;\n  content: \"\";\n  width: 50%;\n}\n\n.repeat-btn {\n  height: 7.39vh;\n  margin: 2.46vh 0 3vh;\n  border-radius: 5px;\n  --background: #3CCA88;\n  padding: 0 3vw;\n  text-transform: capitalize;\n  font: normal normal 400 20px/24px Montserrat;\n  color: #FFFFFF;\n}\n\n.no-orders {\n  text-align: center;\n  color: #493735;\n}\n.no-orders__img {\n  padding: 3.69vh 0;\n}\n.no-orders__title {\n  padding: 0 0 2.46vh;\n  font: 500 5.33vw/initial Montserrat;\n}\n.no-orders__text {\n  font-size: 4vw;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/menu/orders/orders.page.scss"],"names":[],"mappings":"AAEA;EACE,iBAAA;EACA,cAAA;AADF;;AAIA;EACE,cAAA;EACA,kBAAA;EACA,kBAAA;AADF;AAEE;EACE,4BAAA;EACA,kBAAA;EACA,6BAAA;EACA,yBAAA;EACA,0BAAA;EACA,4CAAA;AAAJ;;AAIA;EACE,oBAAA;EACA,kBAAA;EACA,4CAAA;EACA,cAAA;AADF;;AAIA;EACE,eAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AADF;AAEE;EACE,4CAAA;AAAJ;AAGI;EACE,iCAAA;EACA,6BAAA;AADN;;AAMA;EACE,sCAAA;AAHF;;AAMA;EACE,kBAAA;EACA,kBAAA;AAHF;AAIE;EACE,aAAA;AAFJ;AAIE;EACE,SAAA;EACA,OAAA;EACA,gCAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;AAFJ;;AAMA;EACE,sBAAA;EACA,uBAAA;EACA,yBAAA;EACA,kBAAA;AAHF;AAIE;EACE,4CAAA;EACA,cAAA;AAFJ;AAIE;EACE,6CAAA;EACA,cAAA;AAFJ;AAIE;EACE,kBAAA;EACA,6CAAA;EACA,cAAA;AAFJ;AAGI;EACE,cAAA;AADN;AAIE;EACE,UAAA;EACA,+CAAA;EACA,cAAA;AAFJ;AAKI;EACE,gBAAA;AAHN;AAIM;EACE,6BAAA;AAFR;AAMM;EACE,iBAAA;AAJR;;AAWE;EACE,4CAAA;EACA,cAAA;AARJ;AASI;EACE,kBAAA;AAPN;AAUE;EACE,2BAAA;EACA,4CAAA;EACA,cAAA;AARJ;AAUE;EACE,WAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;EACA,4CAAA;EACA,kBAAA;EACA,cAAA;AARJ;AASI;EACE,mBAAA;EACA,kBAAA;AAPN;AAQM;EACE,wBAAA;EACA,SAAA;EACA,4BAAA;EACA,kBAAA;EACA,WAAA;EACA,UAAA;AANR;;AAYA;EACE,cAAA;EACA,oBAAA;EACA,kBAAA;EACA,qBAAA;EACA,cAAA;EACA,0BAAA;EACA,4CAAA;EACA,cAAA;AATF;;AAYA;EACE,kBAAA;EACA,cAAA;AATF;AAUE;EACE,iBAAA;AARJ;AAUE;EACE,mBAAA;EACA,mCAAA;AARJ;AAUE;EACE,cAAA;AARJ","sourcesContent":["$redLineHeight: 5px;\r\n\r\n.container {\r\n  padding: 0 9.33vw;\r\n  color: #493735;\r\n}\r\n\r\n.segment {\r\n  height: 5.91vh;\r\n  margin: 3.69vh 0 0;\r\n  --background: #fff;\r\n  &__btn {\r\n    --indicator-box-shadow: none;\r\n    --border-radius: 0;\r\n    --background-checked: #FEDE00;\r\n    border: 1px solid #FEDE00;\r\n    --indicator-color: #FEDE00;\r\n    font: normal normal 400 20px/24px Montserrat;\r\n  }\r\n}\r\n\r\n.title {\r\n  margin: 3.69vh 1vw 0;\r\n  text-align: center;\r\n  font: normal normal 700 20px/24px Montserrat;\r\n  color: #493735;\r\n}\r\n\r\n.save {\r\n  margin: 3vh 0 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  &__txt {\r\n    font: normal normal 500 12px/15px Montserrat;\r\n  }\r\n  &__toggle {\r\n    &.toggle-checked {\r\n      --handle-background-checked: #fff;\r\n      --background-checked: #34DB34;\r\n    }\r\n  }\r\n}\r\n\r\nion-toggle.toggle-checked {\r\n  --handle-box-shadow: 0 0 2px 0 #33F333;\r\n}\r\n\r\n.full-order {\r\n  position: relative;\r\n  padding: 4vh 0 3vh;\r\n  &:last-child:after {\r\n    display: none;\r\n  }\r\n  &:after {\r\n    bottom: 0;\r\n    left: 0;\r\n    border-bottom: 5px solid #FEDE00;\r\n    position: absolute;\r\n    content: \"\";\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n.order {\r\n  padding: 1.6vh 4.8vw 0;\r\n  margin: 0 5.87vw 3.57vh;\r\n  border: 1px solid #D9D9D9;\r\n  border-radius: 5px;\r\n  &__bakery {\r\n    font: normal normal 600 25px/30px Montserrat;\r\n    color: #493735;\r\n  }\r\n  &__time-title {\r\n    font: normal normal bold 15px/30px Montserrat;\r\n    color: #493735;\r\n  }\r\n  &__time {\r\n    padding: 0 0 1.5vh;\r\n    font: normal normal bold 25px/30px Montserrat;\r\n    color: #493735;\r\n    &_purple {\r\n      color: #FF68B4;\r\n    }\r\n  }\r\n  &__grid {\r\n    padding: 0;\r\n    font: normal normal normal 15px/19px Montserrat;\r\n    color: #493735;\r\n  }\r\n  .grid {\r\n    &__row {\r\n      padding: 1.6vh 0;\r\n      &_total {\r\n        border-top: 1px solid #c3bebe;\r\n      }\r\n    }\r\n    &__col {\r\n      &:last-child {\r\n        text-align: right;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.pick-up {\r\n  &__text {\r\n    font: normal normal 400 15px/19px Montserrat;\r\n    color: #493735;\r\n    &:last-child {\r\n      padding: 0 0 1.6vh;\r\n    }\r\n  }\r\n  &__title {\r\n    margin: 1.85vh 8.6vw 2.46vh;\r\n    font: normal normal 400 20px/24px Montserrat;\r\n    color: #493735;\r\n  }\r\n  &__code {\r\n    width: 100%;\r\n    padding: 1.6vh 0;\r\n    background: #FEDE00;\r\n    border-radius: 5px;\r\n    font: normal normal 400 50px/61px Montserrat;\r\n    text-align: center;\r\n    color: #493735;\r\n    &_completed {\r\n      background: #F0F0F0;\r\n      position: relative;\r\n      &:before {\r\n        top: calc(50% - #{$redLineHeight} / 2);\r\n        left: 25%;\r\n        border-bottom: $redLineHeight solid red;\r\n        position: absolute;\r\n        content: \"\";\r\n        width: 50%;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.repeat-btn {\r\n  height: 7.39vh;\r\n  margin: 2.46vh 0 3vh;\r\n  border-radius: 5px;\r\n  --background: #3CCA88;\r\n  padding: 0 3vw;\r\n  text-transform: capitalize;\r\n  font: normal normal 400 20px/24px Montserrat;\r\n  color: #FFFFFF;\r\n}\r\n\r\n.no-orders {\r\n  text-align: center;\r\n  color: #493735;\r\n  &__img {\r\n    padding: 3.69vh 0;\r\n  }\r\n  &__title {\r\n    padding: 0 0 2.46vh;\r\n    font: 500 5.33vw/initial Montserrat;\r\n  }\r\n  &__text {\r\n    font-size: 4vw;\r\n  }\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9464:
/*!***************************************************************!*\
  !*** ./src/app/pages/menu/orders/orders.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-menu-header *ngIf=\"!orderId \" [title]=\"'orders.header' | translate\"></app-menu-header>\r\n<app-menu-header *ngIf=\"orderId && !isPush \" [title]=\"'orders.confirmation' | translate\"></app-menu-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <ion-segment *ngIf=\"!orderId \" mode=\"ios\" class=\"segment\"\r\n                 (ionChange)=\"segmentChanged($event.target.value)\" [value]=\"segmentValue\">\r\n      <ion-segment-button  class=\"segment__btn\" value=\"current\">\r\n        <ion-label>{{ 'orders.current' | translate }}</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button class=\"segment__btn\" value=\"completed\">\r\n        <ion-label>{{ 'orders.completed' | translate }}</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n      <ion-refresher-content></ion-refresher-content>\r\n    </ion-refresher>\r\n    <ng-container *ngIf=\"orderId && isPush\">\r\n      <h2 class=\"title\">{{ 'orders.thankForOrder' | translate }}</h2>\r\n<!--      <div class=\"save\">-->\r\n<!--        <p class=\"save__txt\">{{ 'orders.save' | translate }}</p>-->\r\n<!--        <ion-toggle class=\"save__toggle\" (ionChange)=\"onSaveChange()\"></ion-toggle>-->\r\n<!--      </div>-->\r\n    </ng-container>\r\n  </div>\r\n  <div class=\"no-orders\" *ngIf=\"ordersToShow.length === 0 && segmentValue === 'current'\">\r\n    <ion-img class=\"no-orders__img\" src=\"../../../../assets/img/girl-centred.jpg\"></ion-img>\r\n    <h2 class=\"no-orders__title\">{{ 'orders.noOrdersTitle' | translate }}</h2>\r\n    <p class=\"no-orders__text\">{{ 'orders.noOrdersDescription' | translate }}</p>\r\n  </div>\r\n  <div class=\"full-order\" *ngFor=\"let order of ordersToShow\" >\r\n    <div class=\"order\" >\r\n      <p class=\"order__bakery\">{{order.bakery_name}}</p>\r\n      <p class=\"order__time-title\">{{ 'orders.pickUpTime' | translate }}</p>\r\n      <p class=\"order__time\">\r\n        {{getDate(order.pickup_time) | date:'EEEE, d.M.yyyy,  H:mm': '': dateLocale}}\r\n        {{ 'orders.hrs' | translate }}</p>\r\n      <ion-grid class=\"order__grid \">\r\n        <ion-row class=\"grid__row\" *ngFor=\"let product of order.products, let i=index\">\r\n          <ion-col class=\"grid__col grid \" size=\"1\">{{ i + 1 }}</ion-col>\r\n          <ion-col id=\"{{product.order_id}}\" class=\"grid__col\" size=\"8\">{{product.quantity}} x {{product.product_name}}\r\n\r\n            <span *ngIf=\"!orderId && isPush\"> {{ 'orders.a' | translate }} {{product.price | currency:'EUR':'symbol'}}</span></ion-col>\r\n          <ion-col class=\"grid__col\">\r\n            {{product.grand_total | currency:'EUR':'symbol'}}</ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"grid__row grid__row_total\" *ngIf=\"segmentValue === 'current' && !orderId\">\r\n          <ion-col class=\"grid__col\" size=\"3\">{{ 'orders.total' | translate }}</ion-col>\r\n          <ion-col class=\"grid__col\" size=\"6\"></ion-col>\r\n          <ion-col class=\"grid__col\">{{order.grand_total | currency:'EUR':'symbol'}}</ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    <div class=\"container\">\r\n      <div class=\"pick-up\">\r\n        <p class=\"pick-up__text\">{{ 'orders.pickUpAt' | translate }}</p>\r\n        <p class=\"pick-up__text\">{{order.bakery_name}} - {{order.branch_name}}</p>\r\n        <h3 class=\"pick-up__title\">{{ 'orders.pickUpCode' | translate }}</h3>\r\n        <div class=\"pick-up__code\" [class.pick-up__code_completed]=\"segmentValue === 'completed'\">\r\n          {{order.collection_code}}</div>\r\n        <h3 class=\"pick-up__title\">{{ 'orders.showThisCode' | translate }}</h3>\r\n        <p class=\"pick-up__text\" *ngIf=\"segmentValue === 'current'\">{{ 'orders.note' | translate }}</p>\r\n        <ion-button class=\"repeat-btn\" *ngIf=\"segmentValue === 'completed'\" expand=\"block\" (click)=\"repeatOrder(order.products[0].order_id, order.branch_id, order.products)\">\r\n          {{'orders.repeat' | translate}}\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_menu_orders_orders_module_ts.js.map