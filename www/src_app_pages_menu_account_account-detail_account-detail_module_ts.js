(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_menu_account_account-detail_account-detail_module_ts"],{

/***/ 17171:
/*!************************************************************************************!*\
  !*** ./src/app/pages/menu/account/account-detail/account-detail-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountDetailPageRoutingModule": () => (/* binding */ AccountDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _account_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-detail.page */ 57713);




const routes = [{
  path: '',
  component: _account_detail_page__WEBPACK_IMPORTED_MODULE_0__.AccountDetailPage
}];
let AccountDetailPageRoutingModule = class AccountDetailPageRoutingModule {};
AccountDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], AccountDetailPageRoutingModule);


/***/ }),

/***/ 37209:
/*!****************************************************************************!*\
  !*** ./src/app/pages/menu/account/account-detail/account-detail.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountDetailPageModule": () => (/* binding */ AccountDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _account_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-detail-routing.module */ 17171);
/* harmony import */ var _account_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-detail.page */ 57713);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 33935);








let AccountDetailPageModule = class AccountDetailPageModule {};
AccountDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _account_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountDetailPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
  declarations: [_account_detail_page__WEBPACK_IMPORTED_MODULE_1__.AccountDetailPage]
})], AccountDetailPageModule);


/***/ }),

/***/ 57713:
/*!**************************************************************************!*\
  !*** ./src/app/pages/menu/account/account-detail/account-detail.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountDetailPage": () => (/* binding */ AccountDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _account_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-detail.page.html?ngResource */ 74613);
/* harmony import */ var _account_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-detail.page.scss?ngResource */ 22974);
/* harmony import */ var _account_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_account_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/logger.service */ 51273);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/account.service */ 89876);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/http.service */ 6858);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/alert.service */ 25970);











let AccountDetailPage = class AccountDetailPage {
  constructor(alertServ, route, router, logger, translate, accountService, httpServ, formBuilder) {
    this.alertServ = alertServ;
    this.route = route;
    this.router = router;
    this.logger = logger;
    this.translate = translate;
    this.accountService = accountService;
    this.httpServ = httpServ;
    this.formBuilder = formBuilder;
    this.countries = ['Germany', 'Austria', 'Switzerland'];
    this.enter = this.translate.instant('account.enter');
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.page;
      }
    });
  }
  ngOnInit() {
    this.accountService.sharedAccount.subscribe(res => {
      this.account = res;
      this.selectedLang = this.account.languages.find(item => item.isActive === true);
      this.chooseDataToShow();
    });
    this.initChangePasswordForm();
  }
  initChangePasswordForm() {
    this.changePasswordForm = this.formBuilder.group({
      currentPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(8)]],
      newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(8)]],
      newPasswordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(8)]]
    });
  }
  chooseDataToShow() {
    const your = this.translate.instant('account.your');
    switch (this.data) {
      case 'first_name':
        this.title = your + 'Name';
        this.settingLabel = 'Name';
        this.inputText = this.account.first_name;
        this.type = 'text';
        break;
      case 'last_name':
        const lastName = this.translate.instant('emailRegister.lastName');
        this.title = your + lastName;
        this.settingLabel = lastName;
        this.inputText = this.account.last_name;
        this.type = 'text';
        break;
      case 'email':
        const email = this.translate.instant('account.email');
        this.title = your + email;
        this.settingLabel = email;
        this.inputText = this.account.email;
        this.type = 'email';
        break;
      case 'phone':
        const phone = this.translate.instant('account.phoneNum');
        this.title = your + phone;
        this.settingLabel = phone;
        this.inputText = this.account.phone;
        this.placeholder = this.translate.instant('account.enterYourNum');
        this.type = 'tel';
        break;
      case 'country':
        const country = this.translate.instant('account.country');
        this.title = country;
        this.settingLabel = country;
        this.dataForRepeat = this.countries;
        this.radioValue = this.account.country;
        break;
      case 'language':
        const language = this.translate.instant('account.language');
        this.title = language;
        this.settingLabel = language;
        this.dataForRepeat = this.account.languages;
        this.radioValue = this.selectedLang.code;
        break;
      case 'notifications':
        this.title = this.translate.instant('account.notifications');
        break;
      case 'password':
        this.title = this.translate.instant('account.changePass');
        break;
      case 'payments':
        this.title = this.translate.instant('account.paymentMeth');
        break;
      case 'privacy':
        this.title = this.translate.instant('account.privacy');
        break;
    }
  }
  open(subPage) {
    const navigationExtras = {
      state: {
        data: subPage
      }
    };
    this.router.navigate(['privacy'], navigationExtras);
  }
  onRadioChange(value) {
    this.radioValue = value;
  }
  accept() {
    this.account[this.data] = this.inputText;
    const updateData = {
      first_name: this.account.first_name,
      last_name: this.account.last_name,
      email: this.account.email,
      phone: this.account.phone
    };
    this.updateUserDetails(updateData);
  }
  acceptRadio() {
    if (this.data === 'language' && this.radioValue) {
      // if (this.data === 'language' && this.radioValue && this.radioValue !== this.selectedLang.code) {
      const selectedLanguageIndex = this.account.languages.findIndex(item => item.code === this.radioValue);
      this.account.languages.forEach(item => item.isActive = false);
      this.account.languages[selectedLanguageIndex].isActive = true;
      localStorage.setItem('language', this.radioValue);
      this.updateUserDetails({
        language_id: this.account.languages[selectedLanguageIndex].id
      });
    } else if (this.data === 'country' && this.radioValue !== this.account.country) {
      this.account[this.data] = this.radioValue;
      this.updateUserDetails({
        country: this.radioValue
      });
    }
  }
  updateUserDetails(updateData) {
    this.httpServ.updateUserDetails(updateData).subscribe(res => {
      if (res === true) {
        this.accountService.changeAccount(this.account);
        if (this.data === 'language') {
          this.translate.use(this.radioValue);
        } else if (this.data === 'password') {
          this.alertServ.presentToast('Success!');
          this.changePasswordForm.reset();
        }
      }
    });
  }
  onNotificationChange() {
    this.account.notifications = !this.account.notifications;
    this.accountService.changeAccount(this.account);
    this.updateUserDetails({
      notifications: this.account.notifications
    });
  }
  submitChangePassword() {
    const newPassword = this.changePasswordForm.get(['newPassword']);
    const newPasswordConfirm = this.changePasswordForm.get(['newPasswordConfirm']);
    if (newPassword.value !== newPasswordConfirm.value) {
      this.alertServ.presentAlert('New password and confirm new password must be equal!');
      newPassword.reset();
      newPasswordConfirm.reset();
    } else {
      this.updateUserDetails({
        current_password: this.changePasswordForm.get(['currentPassword']).value,
        new_password: newPassword.value
      });
    }
  }
  deleteAccount() {
    this.httpServ.deleteUserAccount().subscribe(res => {
      if (res) {
        this.router.navigate(['start']);
        localStorage.clear();
      }
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _services_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService
  }, {
    type: _services_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService
  }, {
    type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__.HttpService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder
  }];
};
AccountDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-account-detail',
  template: _account_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_account_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AccountDetailPage);


/***/ }),

/***/ 22974:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/menu/account/account-detail/account-detail.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".toolbar {\n  padding: 1vh 0;\n  --background: #FEDE00;\n}\n.toolbar__button {\n  --icon-font-size: 25px;\n}\n.toolbar__title {\n  padding: 0 0 0 3vw;\n  font: normal normal 500 25px/30px Montserrat;\n  color: #493735;\n}\n\nion-content {\n  --background: #F5F5F5;\n}\n\n.setting {\n  background: #F5F5F5;\n}\n.setting .label-wrapper {\n  display: flex;\n}\n.setting__label {\n  padding: 5.5vh 0 1vh 4.3vw;\n  font: normal normal 400 15px/19px Montserrat;\n  color: #493735;\n}\n.setting__label_upper {\n  text-transform: uppercase;\n}\n.setting__item_pd {\n  margin: 11.2vh 0;\n  --background-focused: #b19a9a;\n}\n.setting__item:last-child {\n  padding: 0 0 11.2vh;\n}\n.setting__item_push:last-child {\n  padding-bottom: 0;\n}\n.setting .item {\n  --padding-start: 0;\n  font: normal normal 400 12px/15px Montserrat;\n}\n.setting .item__label {\n  padding: 0 30px 0 15px;\n}\n.setting .item__label_red {\n  --color: #FA0808;\n}\n.setting .item__input {\n  --padding-start: 20px;\n  --placeholder-font-style: italic;\n  --placeholder-color: #493735;\n  --placeholder-opacity: 1;\n}\n.setting .item__input_upper {\n  text-transform: uppercase;\n}\n.setting .item__toggle {\n  width: 44px;\n  height: 15px;\n  padding: 0 20px 0 0;\n  --background: #9AA8B5;\n  --background-checked: #95E2BE;\n  --handle-background: #C8D0D7;\n  --handle-background-checked: #3CCA88;\n  --handle-spacing: 0;\n  --handle-width: 40%;\n  --handle-height: 110%;\n  --border-radius: 2vw;\n  overflow: visible;\n  contain: none;\n}\n.setting .item__toggle.toggle-checked {\n  --handle-box-shadow: 0 0 2px 0 #33F333;\n}\n.setting .item__img:first-child {\n  margin-left: 19px;\n}\n.setting .item .btn-check {\n  --border-color: #3CCA88;\n  color: #3CCA88;\n}\n\n.setting .list {\n  background: #F5F5F5;\n}\n.setting .radio-group__item {\n  font: normal normal 400 12px/15px Montserrat;\n  color: #493735;\n  --border-color: #CBCBCB;\n}\n.setting .radio-group__label {\n  padding: 0 0 0 16px;\n}\n.setting .radio-group .btn-check {\n  padding: 15px 0 0 5px;\n}\n\n.top-grey {\n  height: 32px;\n  background: #F5F5F5;\n}\n\n.example {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.example__title {\n  width: 70vw;\n  padding: 7.39vh 0;\n  font-size: 4vw;\n  text-align: center;\n  color: #493735;\n}\n.example__img::part(image) {\n  border-radius: 8vw;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/menu/account/account-detail/account-detail.page.scss"],"names":[],"mappings":"AAAA;EACE,cAAA;EACA,qBAAA;AACF;AAAE;EACE,sBAAA;AAEJ;AAAE;EACE,kBAAA;EACA,4CAAA;EACA,cAAA;AAEJ;;AAEA;EACE,qBAAA;AACF;;AAEA;EACE,mBAAA;AACF;AAAE;EACE,aAAA;AAEJ;AAAE;EACE,0BAAA;EACA,4CAAA;EACA,cAAA;AAEJ;AADI;EACE,yBAAA;AAGN;AACI;EACE,gBAAA;EACA,6BAAA;AACN;AACI;EACE,mBAAA;AACN;AACI;EACE,iBAAA;AACN;AAGE;EACE,kBAAA;EACA,4CAAA;AADJ;AAEI;EACE,sBAAA;AAAN;AACM;EACE,gBAAA;AACR;AAEI;EACE,qBAAA;EACA,gCAAA;EACA,4BAAA;EACA,wBAAA;AAAN;AACM;EACE,yBAAA;AACR;AAEI;EACE,WAAA;EACA,YAAA;EACA,mBAAA;EACA,qBAAA;EACA,6BAAA;EACA,4BAAA;EACA,oCAAA;EACA,mBAAA;EACA,mBAAA;EACA,qBAAA;EACA,oBAAA;EACA,iBAAA;EACA,aAAA;AAAN;AACQ;EACE,sCAAA;AACV;AAGM;EACE,iBAAA;AADR;AAKI;EACE,uBAAA;EACA,cAAA;AAHN;;AASE;EACE,mBAAA;AANJ;AASI;EACE,4CAAA;EACA,cAAA;EACA,uBAAA;AAPN;AASI;EACE,mBAAA;AAPN;AASI;EACE,qBAAA;AAPN;;AAYA;EACE,YAAA;EACA,mBAAA;AATF;;AAYA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;AATF;AAUE;EACE,WAAA;EACA,iBAAA;EACA,cAAA;EACA,kBAAA;EACA,cAAA;AARJ;AAUE;EACE,kBAAA;AARJ","sourcesContent":[".toolbar {\r\n  padding: 1vh 0;\r\n  --background: #FEDE00;\r\n  &__button {\r\n    --icon-font-size: 25px;\r\n  }\r\n  &__title {\r\n    padding: 0 0 0 3vw;\r\n    font: normal normal 500 25px/30px Montserrat;\r\n    color: #493735;\r\n  }\r\n}\r\n\r\nion-content {\r\n  --background: #F5F5F5;\r\n}\r\n\r\n.setting {\r\n  background: #F5F5F5;\r\n  .label-wrapper {\r\n    display: flex;\r\n  }\r\n  &__label {\r\n    padding: 5.5vh 0 1vh 4.3vw;\r\n    font: normal normal 400 15px/19px Montserrat;\r\n    color: #493735;\r\n    &_upper {\r\n      text-transform: uppercase;\r\n    }\r\n  }\r\n  &__item {\r\n    &_pd {\r\n      margin: 11.2vh 0;\r\n      --background-focused: #b19a9a;\r\n    }\r\n    &:last-child {\r\n      padding: 0 0 11.2vh;\r\n    }\r\n    &_push:last-child {\r\n      padding-bottom: 0;\r\n    }\r\n  }\r\n\r\n  .item {\r\n    --padding-start: 0;\r\n    font: normal normal 400 12px/15px Montserrat;\r\n    &__label {\r\n      padding: 0 30px 0 15px;\r\n      &_red {\r\n        --color: #FA0808;\r\n      }\r\n    }\r\n    &__input {\r\n      --padding-start: 20px;\r\n      --placeholder-font-style: italic;\r\n      --placeholder-color: #493735;\r\n      --placeholder-opacity: 1;\r\n      &_upper {\r\n        text-transform: uppercase;\r\n      }\r\n    }\r\n    &__toggle {\r\n      width: 44px;\r\n      height: 15px;\r\n      padding: 0 20px 0 0;\r\n      --background: #9AA8B5;\r\n      --background-checked: #95E2BE;\r\n      --handle-background: #C8D0D7;\r\n      --handle-background-checked: #3CCA88;\r\n      --handle-spacing: 0;\r\n      --handle-width: 40%;\r\n      --handle-height: 110%;\r\n      --border-radius: 2vw;\r\n      overflow: visible;\r\n      contain: none;\r\n        &.toggle-checked {\r\n          --handle-box-shadow: 0 0 2px 0 #33F333;\r\n        }\r\n    }\r\n    &__img {\r\n      &:first-child {\r\n        margin-left: 19px;\r\n      }\r\n    }\r\n\r\n    .btn-check {\r\n      --border-color: #3CCA88;\r\n      color: #3CCA88;\r\n    }\r\n  }\r\n}\r\n\r\n.setting {\r\n  .list {\r\n    background: #F5F5F5;\r\n  }\r\n  .radio-group {\r\n    &__item {\r\n      font: normal normal 400 12px/15px Montserrat;\r\n      color: #493735;\r\n      --border-color: #CBCBCB;\r\n    }\r\n    &__label {\r\n      padding: 0 0 0 16px;\r\n    }\r\n    .btn-check {\r\n      padding: 15px 0 0 5px;\r\n    }\r\n  }\r\n}\r\n\r\n.top-grey {\r\n  height: 32px;\r\n  background: #F5F5F5;\r\n}\r\n\r\n.example {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  &__title {\r\n    width: 70vw;\r\n    padding: 7.39vh 0;\r\n    font-size: 4vw;\r\n    text-align: center;\r\n    color: #493735;\r\n  }\r\n  &__img::part(image) {\r\n    border-radius: 8vw;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 74613:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/menu/account/account-detail/account-detail.page.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\" class=\"toolbar\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button class=\"toolbar__button\" mode=\"md\"  defaultHref=\"account\"></ion-back-button>\r\n    </ion-buttons>\r\n    <h1 class=\"toolbar__title ion-text-left\">{{title}}</h1>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"ion-content\">\r\n\r\n  <div [ngSwitch]=\"true\">\r\n    <div *ngSwitchCase=\"data === 'first_name' || data === 'last_name' || data === 'email' || data === 'phone'\">\r\n      <div class=\"setting\">\r\n        <div class=\"label-wrapper\">\r\n          <h3 class=\"setting__label\" *ngIf=\"data === 'phone'\">{{ 'account.country'  | translate }}</h3>\r\n          <h3 class=\"setting__label\">{{settingLabel}}</h3>\r\n        </div>\r\n        <ion-item class=\"setting__item item\" lines=\"none\">\r\n          <ion-label class=\"item__label\" *ngIf=\"data === 'phone'\">+49</ion-label>\r\n          <ion-input class=\"item__input\" [(ngModel)]=\"inputText\" [placeholder]=\"placeholder\" [type]=\"type\"></ion-input>\r\n          <ion-button class=\"btn-check\" fill=\"outline\" (click)=\"accept()\">{{ 'account.save' | translate }}</ion-button>\r\n        </ion-item>\r\n      </div>\r\n    </div>\r\n    <div *ngSwitchCase=\"data === 'country' || data === 'language'\">\r\n      <div class=\"setting\">\r\n        <h3 class=\"setting__label\">{{settingLabel}}</h3>\r\n        <ion-list class=\"setting__item list\">\r\n          <ion-radio-group class=\"radio-group\" (ionChange)=\"onRadioChange($event.target.value)\"\r\n                           [value]=\"radioValue\">\r\n            <ion-item class=\"radio-group__item item\" *ngFor=\"let item of dataForRepeat\">\r\n              <ion-label class=\"item__label\">{{item.label || item}}</ion-label>\r\n              <ion-radio mode=\"ios\" [value]=\"item.code || item\"></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n          <ion-item lines=\"none\">\r\n            <ion-button class=\"btn-check\" slot=\"end\" fill=\"outline\"\r\n                        (click)=\"acceptRadio()\">{{ 'account.save' | translate }}</ion-button>\r\n          </ion-item>\r\n        </ion-list>\r\n      </div>\r\n    </div>\r\n    <div *ngSwitchCase=\"data === 'notifications'\">\r\n      <div class=\"setting\">\r\n        <h3 class=\"setting__label\"></h3>\r\n          <ion-item class=\"setting__item setting__item_push item\">\r\n            <ion-label class=\"item__label\">{{ 'account.pushNotifications' | translate }}</ion-label>\r\n            <ion-toggle class=\"item__toggle\" [checked]=\"account.notifications === true\"\r\n                        (ionChange)=\"onNotificationChange()\"></ion-toggle>\r\n          </ion-item>\r\n      </div>\r\n      <div class=\"example\">\r\n        <p class=\"example__title\">{{ 'account.pushExplanation' | translate }}</p>\r\n        <ion-img class=\"example__img\" src=\"../../../../../assets/img/push.jpg\"></ion-img>\r\n      </div>\r\n    </div>\r\n    <div *ngSwitchCase=\"data === 'password'\">\r\n      <form [formGroup]=\"changePasswordForm\" (ngSubmit)=\"submitChangePassword()\">\r\n        <div class=\"setting\">\r\n          <h3 class=\"setting__label setting__label_upper\">{{ 'account.currentPass' | translate }}</h3>\r\n          <ion-item class=\"item\" >\r\n            <ion-input class=\"item__input item__input_upper\" appAutofill formControlName=\"currentPassword\" type=\"password\" autocomplete=\"current-password\"\r\n                       [placeholder]=\"enter + ('account.currentPass' | translate)\"></ion-input>\r\n          </ion-item>\r\n        </div>\r\n        <div class=\"setting\">\r\n          <h3 class=\"setting__label setting__label_upper\">{{ 'account.newPass' | translate }}</h3>\r\n          <ion-item class=\"setting__item item\">\r\n            <ion-input class=\"item__input item__input_upper\" appAutoFill formControlName=\"newPassword\" type=\"password\" autocomplete=\"current-password\"\r\n                       [placeholder]=\"enter + ('account.newPass' | translate)\"></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"setting__item item\">\r\n            <ion-input class=\"item__input item__input_upper\" appAutofill formControlName=\"newPasswordConfirm\" type=\"password\" autocomplete=\"current-password\"\r\n                       [placeholder]=\"('dateChoose.confirm' | translate) + ' ' + ('account.newPass' | translate)\">\r\n\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"setting__item\" lines=\"none\">\r\n            <ion-button class=\"btn-check\" type=\"submit\" slot=\"end\" fill=\"outline\"\r\n                        [disabled]=\"changePasswordForm.invalid\">{{ 'account.save' | translate }}</ion-button>\r\n          </ion-item>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div *ngSwitchCase=\"data === 'payments'\">\r\n      <div class=\"setting\">\r\n        <h3 class=\"setting__label\">{{ 'account.prefPaymentMeth' | translate }}</h3>\r\n        <ion-item class=\"item\">\r\n          <img class=\"item__img\" width=\"79px\" src=\"../../../../../assets/icons/payments/paypal.png\">\r\n          <ion-toggle slot=\"end\" class=\"item__toggle\"></ion-toggle>\r\n        </ion-item>\r\n      </div>\r\n      <div class=\"setting\">\r\n        <h3 class=\"setting__label\">{{ 'account.changePaymentMeth' | translate }}</h3>\r\n        <ion-item class=\"item\">\r\n          <ion-img class=\"item__img\" src=\"../../../../assets/icons/payments/apple-pay-google.png\"></ion-img>\r\n          <ion-toggle slot=\"end\" class=\"item__toggle\"></ion-toggle>\r\n        </ion-item>\r\n        <ion-item class=\"item\">\r\n          <img class=\"item__img\" width=\"39px\" src=\"../../../../../assets/icons/payments/sepa.png\">\r\n          <ion-toggle slot=\"end\" class=\"item__toggle\"></ion-toggle>\r\n        </ion-item>\r\n        <ion-item class=\"item\">\r\n          <ion-img class=\"item__img\" src=\"../../../../assets/icons/payments/visa.svg\"></ion-img>\r\n          <ion-img class=\"item__img\" src=\"../../../../assets/icons/payments/maestro.svg\"></ion-img>\r\n          <ion-img class=\"item__img\" src=\"../../../../assets/icons/payments/mastercard.svg\"></ion-img>\r\n          <ion-toggle slot=\"end\" class=\"item__toggle\"></ion-toggle>\r\n        </ion-item>\r\n        <ion-item class=\"setting__item\" lines=\"none\">\r\n          <ion-button class=\"btn-check\" slot=\"end\" fill=\"none\">\r\n            <ion-icon slot=\"icon-only\" src=\"../../../assets/icons/checkmark.svg\"></ion-icon>\r\n          </ion-button>\r\n        </ion-item>\r\n      </div>\r\n    </div>\r\n    <div *ngSwitchCase=\"data === 'privacy'\">\r\n      <div class=\"setting\">\r\n        <div class=\"top-grey\"></div>\r\n        <ion-item class=\"item\" detail=\"false\" button (click)=\"open('privacy')\">\r\n          <ion-label class=\"item__label\">{{ 'account.dataPrivacy' | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"item\" detail=\"false\" button (click)=\"open('imprint')\">\r\n          <ion-label class=\"item__label\">{{ 'account.imprint' | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"item setting__item_pd\" (click)=\"deleteAccount()\" detail=\"false\" button>\r\n          <ion-label class=\"item__label item__label_red\">{{ 'account.deleteAcc' | translate}}</ion-label>\r\n        </ion-item>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_menu_account_account-detail_account-detail_module_ts.js.map