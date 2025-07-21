(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_menu_payment-methods_payment-methods_module_ts"],{

/***/ 50909:
/*!******************************************************************************!*\
  !*** ./src/app/pages/menu/payment-methods/payment-methods-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentMethodsPageRoutingModule": () => (/* binding */ PaymentMethodsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _payment_methods_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-methods.page */ 26449);




const routes = [{
  path: '',
  component: _payment_methods_page__WEBPACK_IMPORTED_MODULE_0__.PaymentMethodsPage
}];
let PaymentMethodsPageRoutingModule = class PaymentMethodsPageRoutingModule {};
PaymentMethodsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], PaymentMethodsPageRoutingModule);


/***/ }),

/***/ 82058:
/*!**********************************************************************!*\
  !*** ./src/app/pages/menu/payment-methods/payment-methods.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentMethodsPageModule": () => (/* binding */ PaymentMethodsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _payment_methods_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-methods-routing.module */ 50909);
/* harmony import */ var _payment_methods_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-methods.page */ 26449);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/components.module */ 45642);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 33935);









let PaymentMethodsPageModule = class PaymentMethodsPageModule {};
PaymentMethodsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _payment_methods_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentMethodsPageRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule],
  declarations: [_payment_methods_page__WEBPACK_IMPORTED_MODULE_1__.PaymentMethodsPage]
})], PaymentMethodsPageModule);


/***/ }),

/***/ 26449:
/*!********************************************************************!*\
  !*** ./src/app/pages/menu/payment-methods/payment-methods.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentMethodsPage": () => (/* binding */ PaymentMethodsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _payment_methods_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-methods.page.html?ngResource */ 94547);
/* harmony import */ var _payment_methods_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-methods.page.scss?ngResource */ 14990);
/* harmony import */ var _payment_methods_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_payment_methods_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let PaymentMethodsPage = class PaymentMethodsPage {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
PaymentMethodsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-payment-methods',
  template: _payment_methods_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_payment_methods_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PaymentMethodsPage);


/***/ }),

/***/ 14990:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/menu/payment-methods/payment-methods.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container {\n  padding: 4.19vh 7.73vw;\n}\n\n.title {\n  text-align: center;\n  font: normal normal 400 5.33vw/2.96vh Montserrat;\n  color: #493735;\n}\n\n.icons-block {\n  padding: 2.96vh 0 9vh;\n}\n.icons-block__row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.icons-block__icon {\n  font-size: 24.8vw;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/menu/payment-methods/payment-methods.page.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;AACF;;AAEA;EACE,kBAAA;EACA,gDAAA;EACA,cAAA;AACF;;AAEA;EACE,qBAAA;AACF;AACE;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;AACJ;AAEE;EACE,iBAAA;AAAJ","sourcesContent":[".container {\r\n  padding: 4.19vh 7.73vw;\r\n}\r\n\r\n.title {\r\n  text-align: center;\r\n  font: normal normal 400 5.33vw/2.96vh Montserrat;\r\n  color: #493735;\r\n}\r\n\r\n.icons-block {\r\n  padding: 2.96vh 0 9vh;\r\n\r\n  &__row {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n  &__icon {\r\n    font-size: 24.8vw;\r\n  }\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 94547:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/menu/payment-methods/payment-methods.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-menu-header [title]=\"'paymentMethods.header' | translate\"></app-menu-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <h2 class=\"title\">{{ 'paymentMethods.title' | translate }}</h2>\r\n    <div class=\"icons-block\">\r\n      <div class=\"icons-block__row\">\r\n        <ion-icon class=\"icons-block__icon\" src=\"../../../../assets/icons/payments/mastercard.svg\"></ion-icon>\r\n        <ion-icon class=\"icons-block__icon\" src=\"../../../../assets/icons/payments/maestro.svg\"></ion-icon>\r\n        <ion-icon class=\"icons-block__icon\" src=\"../../../../assets/icons/payments/visa.svg\"></ion-icon>\r\n      </div>\r\n      <div class=\"icons-block__row\">\r\n        <ion-icon class=\"icons-block__icon\" src=\"../../../../assets/icons/payments/sepa.svg\"></ion-icon>\r\n        <ion-icon class=\"icons-block__icon\" src=\"../../../../assets/icons/payments/paypal.svg\"></ion-icon>\r\n        <ion-icon class=\"icons-block__icon\" src=\"../../../../assets/icons/payments/klarna.svg\"></ion-icon>\r\n      </div>\r\n    </div>\r\n    <h2 class=\"title\">{{ 'paymentMethods.comingSoon' | translate }}</h2>\r\n    <div class=\"icons-block\">\r\n      <div class=\"icons-block__row\">\r\n        <ion-icon class=\"icons-block__icon\" src=\"../../../../assets/icons/payments/google-pay.svg\"></ion-icon>\r\n        <ion-icon class=\"icons-block__icon\" src=\"../../../../assets/icons/payments/apple-pay.svg\"></ion-icon>\r\n        <ion-icon class=\"icons-block__icon\"></ion-icon>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_menu_payment-methods_payment-methods_module_ts.js.map