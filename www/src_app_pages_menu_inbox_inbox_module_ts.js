(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_menu_inbox_inbox_module_ts"],{

/***/ 28941:
/*!**********************************************************!*\
  !*** ./src/app/pages/menu/inbox/inbox-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InboxPageRoutingModule": () => (/* binding */ InboxPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _inbox_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox.page */ 39449);




const routes = [{
  path: '',
  component: _inbox_page__WEBPACK_IMPORTED_MODULE_0__.InboxPage
}];
let InboxPageRoutingModule = class InboxPageRoutingModule {};
InboxPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], InboxPageRoutingModule);


/***/ }),

/***/ 96190:
/*!**************************************************!*\
  !*** ./src/app/pages/menu/inbox/inbox.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InboxPageModule": () => (/* binding */ InboxPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _inbox_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox-routing.module */ 28941);
/* harmony import */ var _inbox_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox.page */ 39449);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/components.module */ 45642);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 33935);









let InboxPageModule = class InboxPageModule {};
InboxPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _inbox_routing_module__WEBPACK_IMPORTED_MODULE_0__.InboxPageRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule],
  declarations: [_inbox_page__WEBPACK_IMPORTED_MODULE_1__.InboxPage]
})], InboxPageModule);


/***/ }),

/***/ 39449:
/*!************************************************!*\
  !*** ./src/app/pages/menu/inbox/inbox.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InboxPage": () => (/* binding */ InboxPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _inbox_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox.page.html?ngResource */ 46362);
/* harmony import */ var _inbox_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox.page.scss?ngResource */ 43249);
/* harmony import */ var _inbox_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inbox_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/http.service */ 6858);





let InboxPage = class InboxPage {
  constructor(httpServ) {
    this.httpServ = httpServ;
  }
  ngOnInit() {
    this.getInboxMessages();
  }
  onRefresh(event) {
    this.getInboxMessages(event);
  }
  getInboxMessages(event) {
    this.httpServ.getInboxMessages().subscribe(res => {
      this.inboxMessagesArr = res;
      if (event) {
        event.target.complete();
      }
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService
  }];
};
InboxPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-inbox',
  template: _inbox_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_inbox_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], InboxPage);


/***/ }),

/***/ 43249:
/*!*************************************************************!*\
  !*** ./src/app/pages/menu/inbox/inbox.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mail {\n  margin: 3.82vh 8.27vw;\n  padding: 0 0 1.9vh;\n  border-radius: 5px;\n  background: #F5F5F5;\n  display: flex;\n  color: #493735;\n}\n.mail__avatar {\n  width: 82px;\n  height: 88px;\n  border-radius: 50%;\n  margin: 1.85vh 2.67vh 0 3.5vw;\n}\n.mail__text-block {\n  width: 100%;\n}\n.mail__date {\n  text-align: right;\n  padding: 1.23vh 9.33vw 3.45vh 0;\n  font: normal normal 300 14px/18px Montserrat;\n}\n.mail__title {\n  width: 50vw;\n  padding: 0 0 0.86vh;\n  font: normal normal 400 20px/24px Montserrat;\n}\n.mail__text {\n  width: 45vw;\n  font: normal normal 300 14px/18px Montserrat;\n}\n\n/*\n.mail {\n  width: 313px;\n  height: 154px;\n  margin: 0 auto;\n\n  background: #F5F5F5;\n  display: flex;\n  &__avatar {\n    font-size: 58px;\n    margin: 2.59vh 2.67vh 0 5.07vw;\n  }\n  &__date {\n    text-align: right;\n    padding: 0 4.53vw 0 0;\n    font: normal normal 300 14px/18px Montserrat;\n    color: #493735;\n  }\n  &__title {\n\n  }\n  &__text {}\n\n}\n*/", "",{"version":3,"sources":["webpack://./src/app/pages/menu/inbox/inbox.page.scss"],"names":[],"mappings":"AAAA;EACE,qBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,aAAA;EACA,cAAA;AACF;AAAE;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,6BAAA;AAEJ;AAAE;EACE,WAAA;AAEJ;AAAE;EACE,iBAAA;EACA,+BAAA;EACA,4CAAA;AAEJ;AAAE;EACE,WAAA;EACA,mBAAA;EACA,4CAAA;AAEJ;AAAE;EACE,WAAA;EACA,4CAAA;AAEJ;;AAGA;;;;;;;;;;;;;;;;;;;;;;;;CAAA","sourcesContent":[".mail {\r\n  margin: 3.82vh 8.27vw;\r\n  padding: 0 0 1.9vh;\r\n  border-radius: 5px;\r\n  background: #F5F5F5;\r\n  display: flex;\r\n  color: #493735;\r\n  &__avatar {\r\n    width: 82px;\r\n    height: 88px;\r\n    border-radius: 50%;\r\n    margin: 1.85vh 2.67vh 0 3.5vw;\r\n  }\r\n  &__text-block {\r\n    width: 100%;\r\n  }\r\n  &__date {\r\n    text-align: right;\r\n    padding: 1.23vh 9.33vw 3.45vh 0;\r\n    font: normal normal 300 14px/18px Montserrat;\r\n  }\r\n  &__title {\r\n    width: 50vw;\r\n    padding: 0 0 0.86vh;\r\n    font: normal normal 400 20px/24px Montserrat;\r\n  }\r\n  &__text {\r\n    width: 45vw;\r\n    font: normal normal 300 14px/18px Montserrat;\r\n  }\r\n\r\n}\r\n\r\n/*\r\n.mail {\r\n  width: 313px;\r\n  height: 154px;\r\n  margin: 0 auto;\r\n\r\n  background: #F5F5F5;\r\n  display: flex;\r\n  &__avatar {\r\n    font-size: 58px;\r\n    margin: 2.59vh 2.67vh 0 5.07vw;\r\n  }\r\n  &__date {\r\n    text-align: right;\r\n    padding: 0 4.53vw 0 0;\r\n    font: normal normal 300 14px/18px Montserrat;\r\n    color: #493735;\r\n  }\r\n  &__title {\r\n\r\n  }\r\n  &__text {}\r\n\r\n}\r\n*/\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 46362:
/*!*************************************************************!*\
  !*** ./src/app/pages/menu/inbox/inbox.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-menu-header [title]=\"'menu.inbox' | translate \"></app-menu-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"onRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <div class=\"mail\" *ngFor=\"let item of inboxMessagesArr\">\r\n    <img class=\"mail__avatar\" src=\"assets/icons/menu/avatar-girl.png\">\r\n    <div class=\"mail__text-block\">\r\n      <p class=\"mail__date\">{{item.updated_at | date:'d. LLL'}}</p>\r\n      <p class=\"mail__title\">{{item.title}}</p>\r\n      <p class=\"mail__text\">{{item.text}}</p>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_menu_inbox_inbox_module_ts.js.map