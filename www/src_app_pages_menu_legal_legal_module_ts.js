(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_menu_legal_legal_module_ts"],{

/***/ 88161:
/*!**********************************************************!*\
  !*** ./src/app/pages/menu/legal/legal-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LegalPageRoutingModule": () => (/* binding */ LegalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _legal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legal.page */ 98975);




const routes = [{
  path: '',
  component: _legal_page__WEBPACK_IMPORTED_MODULE_0__.LegalPage
}];
let LegalPageRoutingModule = class LegalPageRoutingModule {};
LegalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], LegalPageRoutingModule);


/***/ }),

/***/ 67362:
/*!**************************************************!*\
  !*** ./src/app/pages/menu/legal/legal.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LegalPageModule": () => (/* binding */ LegalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _legal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legal-routing.module */ 88161);
/* harmony import */ var _legal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legal.page */ 98975);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/components.module */ 45642);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 33935);









let LegalPageModule = class LegalPageModule {};
LegalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _legal_routing_module__WEBPACK_IMPORTED_MODULE_0__.LegalPageRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule],
  declarations: [_legal_page__WEBPACK_IMPORTED_MODULE_1__.LegalPage]
})], LegalPageModule);


/***/ }),

/***/ 98975:
/*!************************************************!*\
  !*** ./src/app/pages/menu/legal/legal.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LegalPage": () => (/* binding */ LegalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _legal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legal.page.html?ngResource */ 44767);
/* harmony import */ var _legal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legal.page.scss?ngResource */ 71810);
/* harmony import */ var _legal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_legal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let LegalPage = class LegalPage {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
LegalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-legal',
  template: _legal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_legal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LegalPage);


/***/ }),

/***/ 71810:
/*!*************************************************************!*\
  !*** ./src/app/pages/menu/legal/legal.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".text {\n  padding: 19px 10px;\n  font: normal normal 400 12px/15px Montserrat;\n  color: #493735;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/menu/legal/legal.page.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EAEA,4CAAA;EACA,cAAA;AAAF","sourcesContent":[".text {\r\n  padding: 19px 10px;\r\n  //text-align: center;\r\n  font: normal normal 400 12px/15px Montserrat;\r\n  color: #493735;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 44767:
/*!*************************************************************!*\
  !*** ./src/app/pages/menu/legal/legal.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-menu-header [title]=\"'menu.legal' | translate\"></app-menu-header>\r\n\r\n<ion-content>\r\n  <ion-img class=\"img\" src=\"../../../assets/img/bread.png\"></ion-img>\r\n  <div class=\"text\" [innerHTML]=\"'legal' | translate\"></div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_menu_legal_legal_module_ts.js.map