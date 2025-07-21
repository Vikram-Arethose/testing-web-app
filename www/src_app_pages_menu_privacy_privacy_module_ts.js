(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_menu_privacy_privacy_module_ts"],{

/***/ 20475:
/*!**************************************************************!*\
  !*** ./src/app/pages/menu/privacy/privacy-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPageRoutingModule": () => (/* binding */ PrivacyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _privacy_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy.page */ 6171);




const routes = [{
  path: '',
  component: _privacy_page__WEBPACK_IMPORTED_MODULE_0__.PrivacyPage
}];
let PrivacyPageRoutingModule = class PrivacyPageRoutingModule {};
PrivacyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], PrivacyPageRoutingModule);


/***/ }),

/***/ 43152:
/*!******************************************************!*\
  !*** ./src/app/pages/menu/privacy/privacy.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPageModule": () => (/* binding */ PrivacyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _privacy_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-routing.module */ 20475);
/* harmony import */ var _privacy_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy.page */ 6171);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/components.module */ 45642);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 33935);









let PrivacyPageModule = class PrivacyPageModule {};
PrivacyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _privacy_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrivacyPageRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule],
  declarations: [_privacy_page__WEBPACK_IMPORTED_MODULE_1__.PrivacyPage]
})], PrivacyPageModule);


/***/ }),

/***/ 6171:
/*!****************************************************!*\
  !*** ./src/app/pages/menu/privacy/privacy.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPage": () => (/* binding */ PrivacyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _privacy_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy.page.html?ngResource */ 4798);
/* harmony import */ var _privacy_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy.page.scss?ngResource */ 64663);
/* harmony import */ var _privacy_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_privacy_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);





let PrivacyPage = class PrivacyPage {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.data;
      }
    });
  }
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
  }];
};
PrivacyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-privacy',
  template: _privacy_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_privacy_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PrivacyPage);


/***/ }),

/***/ 64663:
/*!*****************************************************************!*\
  !*** ./src/app/pages/menu/privacy/privacy.page.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".top-grey {\n  height: 32px;\n  background: #F5F5F5;\n}\n\n.text {\n  padding: 19px 10px;\n  font: normal normal normal 12px/15px Montserrat;\n  color: #493735;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/menu/privacy/privacy.page.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,mBAAA;AACF;;AAEA;EACE,kBAAA;EACA,+CAAA;EACA,cAAA;AACF","sourcesContent":[".top-grey {\r\n  height: 32px;\r\n  background: #F5F5F5;\r\n}\r\n\r\n.text {\r\n  padding: 19px 10px;\r\n  font: normal normal normal 12px/15px Montserrat;\r\n  color: #493735;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4798:
/*!*****************************************************************!*\
  !*** ./src/app/pages/menu/privacy/privacy.page.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-menu-header [title]=\"data\"></app-menu-header>\r\n\r\n<ion-content>\r\n  <div class=\"top-grey\"></div>\r\n  <div class=\"text\" [innerHTML]=\"data | translate\"></div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_menu_privacy_privacy_module_ts.js.map