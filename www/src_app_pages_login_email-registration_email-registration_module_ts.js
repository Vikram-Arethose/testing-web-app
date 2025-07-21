(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_email-registration_email-registration_module_ts"],{

/***/ 6859:
/*!*****************************************!*\
  !*** ./src/app/models/emailRegister.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailRegister": () => (/* binding */ EmailRegister)
/* harmony export */ });
class EmailRegister {
  constructor() {
    this.email = '';
    // tslint:disable-next-line:variable-name
    this.first_name = '';
    // tslint:disable-next-line:variable-name
    this.last_name = '';
    this.password = '';
    // tslint:disable-next-line:variable-name
    this.reg_auth_type = 'form';
  }
}

/***/ }),

/***/ 69482:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/login/email-registration/email-registration-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailRegistrationPageRoutingModule": () => (/* binding */ EmailRegistrationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _email_registration_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-registration.page */ 4546);
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/change-password/change-password.component */ 91274);





const routes = [{
  path: '',
  component: _email_registration_page__WEBPACK_IMPORTED_MODULE_0__.EmailRegistrationPage
}, {
  path: 'change-password',
  component: _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordComponent
}];
let EmailRegistrationPageRoutingModule = class EmailRegistrationPageRoutingModule {};
EmailRegistrationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
})], EmailRegistrationPageRoutingModule);


/***/ }),

/***/ 6685:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/login/email-registration/email-registration.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailRegistrationPageModule": () => (/* binding */ EmailRegistrationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _email_registration_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-registration-routing.module */ 69482);
/* harmony import */ var _email_registration_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-registration.page */ 4546);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 33935);








let EmailRegistrationPageModule = class EmailRegistrationPageModule {};
EmailRegistrationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _email_registration_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmailRegistrationPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
  declarations: [_email_registration_page__WEBPACK_IMPORTED_MODULE_1__.EmailRegistrationPage]
})], EmailRegistrationPageModule);


/***/ }),

/***/ 4546:
/*!***************************************************************************!*\
  !*** ./src/app/pages/login/email-registration/email-registration.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailRegistrationPage": () => (/* binding */ EmailRegistrationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _email_registration_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-registration.page.html?ngResource */ 3895);
/* harmony import */ var _email_registration_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-registration.page.scss?ngResource */ 95856);
/* harmony import */ var _email_registration_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_email_registration_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _models_emailRegister__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/emailRegister */ 6859);
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/logger.service */ 51273);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/http.service */ 6858);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/login.service */ 54120);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);











let EmailRegistrationPage = class EmailRegistrationPage {
  constructor(httpService, formBuilder, location, logger, loginServ, route, router) {
    this.httpService = httpService;
    this.formBuilder = formBuilder;
    this.location = location;
    this.logger = logger;
    this.loginServ = loginServ;
    this.route = route;
    this.router = router;
    this.emailRegisterData = new _models_emailRegister__WEBPACK_IMPORTED_MODULE_2__.EmailRegister();
    this.step = 0;
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.isLogin = this.router.getCurrentNavigation().extras.state.isLogin;
      }
    });
  }
  ngOnInit() {
    // if (this.isLogin) {
    this.loginForm = this.formBuilder.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(8)]]
    });
    // }
  }

  nextStep() {
    if (this.step === 0) {
      this.httpService.checkEmail(this.emailRegisterData.email).subscribe(res => {
        if (res) {
          this.step = -1;
        } else {
          this.step++;
        }
      });
    } else {
      this.step++;
    }
  }
  openLogin() {
    this.step = null;
    this.isLogin = true;
  }
  login() {
    this.logger.log('this.loginForm', this.loginForm.value);
    this.httpService.postData('/login', this.loginForm.value).subscribe(res => {
      this.loginServ.handleRegisterRes(res);
      this.router.navigate(['location-setting']);
    }, error => {
      this.loginForm.reset();
    });
  }
  register() {
    this.logger.log('emailRegister: ', this.emailRegisterData);
    this.httpService.postData('/register', this.emailRegisterData).subscribe(res => {
      this.nextStep();
      this.loginServ.handleRegisterRes(res);
    }, error => {
      this.step = 0;
      this.emailRegisterData = new _models_emailRegister__WEBPACK_IMPORTED_MODULE_2__.EmailRegister();
    });
  }
  back() {
    if (this.step > 0) {
      this.step--;
    } else if (this.step === 0 || this.isLogin) {
      this.location.back();
    } else if (this.step === -1) {
      this.step = 0;
      this.emailRegisterData = new _models_emailRegister__WEBPACK_IMPORTED_MODULE_2__.EmailRegister();
    }
  }
  goToChangePassword() {
    this.router.navigate(['email-registration/change-password']);
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__.HttpService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location
  }, {
    type: _services_logger_service__WEBPACK_IMPORTED_MODULE_3__.LoggerService
  }, {
    type: _services_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
  }];
};
EmailRegistrationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-email-registration',
  template: _email_registration_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_email_registration_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], EmailRegistrationPage);


/***/ }),

/***/ 95856:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/login/email-registration/email-registration.page.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".top {\n  width: 100%;\n  height: 18px;\n  background: #FEDE00;\n}\n\n.arrow {\n  position: absolute;\n  top: 4vh;\n  left: 5.6vw;\n  font-size: 9vw;\n  color: #FEDE00;\n}\n\n.form-item {\n  padding: 0 2vw;\n  margin: 0 auto;\n}\n.form-item__header {\n  padding: 8vh 11vw 7.14vh;\n}\n.form-item .header {\n  text-align: center;\n}\n.form-item .header__item {\n  font: normal normal 600 25px/30px Montserrat;\n  color: #493735;\n}\n.form-item .header__item_color {\n  color: #0E8DF1;\n}\n.form-item__body {\n  display: flex;\n  justify-content: space-between;\n}\n.form-item__body .items-wrapper {\n  width: 75%;\n}\n.form-item__body .items-wrapper .item {\n  width: 100%;\n}\n.form-item__body .items-wrapper .item:first-of-type {\n  margin: 0 0 10px;\n}\n.form-item__body .item {\n  --border-color: #493735;\n  width: 70%;\n}\n.form-item__body .item__label {\n  --color: #707070;\n}\n.form-item__btn {\n  --background: #FEDE00;\n  margin: 2vh 4vw 0;\n}\n\n.text {\n  padding: 3vh 9vw 0;\n  text-align: center;\n  font: normal normal 600 25px/30px Montserrat;\n  color: #493735;\n}\n\n.button-wrapper {\n  display: flex;\n  justify-content: center;\n}\n.button-wrapper__btn {\n  width: 74vw;\n  height: 7.39vh;\n  margin-top: 12vh;\n  --background: #FEDE00;\n  --border-radius: 5px;\n  color: #493735;\n  font: normal normal 700 22px/27px Montserrat;\n  text-transform: capitalize;\n}\n\n.forgot-password-btn {\n  --background: transparent;\n  width: 74vw;\n  height: 7.39vh;\n  margin: 2vh auto;\n  --color: black;\n  text-align: center;\n  text-decoration: underline;\n}\n\n.login .form {\n  padding: 12vh 20px 0 0;\n}\n.login .form__item:first-of-type {\n  margin-bottom: 20px;\n}\n\nion-item.ion-invalid.ion-touched {\n  --border-color: var(--ion-color-danger);\n}", "",{"version":3,"sources":["webpack://./src/app/pages/login/email-registration/email-registration.page.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,YAAA;EACA,mBAAA;AACF;;AAEA;EACE,kBAAA;EACA,QAAA;EACA,WAAA;EACA,cAAA;EACA,cAAA;AACF;;AAEA;EACE,cAAA;EACA,cAAA;AACF;AACE;EACE,wBAAA;AACJ;AACE;EACE,kBAAA;AACJ;AAAI;EACE,4CAAA;EAGA,cAAA;AAAN;AACM;EACE,cAAA;AACR;AAIE;EACE,aAAA;EACA,8BAAA;AAFJ;AAII;EACE,UAAA;AAFN;AAGM;EACE,WAAA;AADR;AAEQ;EACE,gBAAA;AAAV;AAII;EAAQ,uBAAA;EACN,UAAA;AADN;AAGM;EACE,gBAAA;AADR;AAKE;EACE,qBAAA;EACA,iBAAA;AAHJ;;AAOA;EACE,kBAAA;EACA,kBAAA;EACA,4CAAA;EACA,cAAA;AAJF;;AAOA;EACE,aAAA;EACA,uBAAA;AAJF;AAKE;EACE,WAAA;EACA,cAAA;EACA,gBAAA;EACA,qBAAA;EACA,oBAAA;EACA,cAAA;EACA,4CAAA;EACA,0BAAA;AAHJ;;AAMA;EACE,yBAAA;EACA,WAAA;EACA,cAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;EACA,0BAAA;AAHF;;AAOE;EACE,sBAAA;AAJJ;AAKI;EACE,mBAAA;AAHN;;AAQA;EACE,uCAAA;AALF","sourcesContent":[".top {\r\n  width: 100%;\r\n  height: 18px;\r\n  background: #FEDE00;\r\n}\r\n\r\n.arrow {\r\n  position: absolute;\r\n  top: 4vh;\r\n  left: 5.6vw;\r\n  font-size: 9vw;\r\n  color: #FEDE00;\r\n}\r\n\r\n.form-item {\r\n  padding: 0 2vw;\r\n  margin: 0 auto;\r\n\r\n  &__header {\r\n    padding: 8vh 11vw 7.14vh;\r\n  }\r\n  .header {\r\n    text-align: center;\r\n    &__item {\r\n      font: normal normal 600 25px/30px Montserrat;\r\n      //-webkit-text-stroke-width: 1px;\r\n      //-webkit-text-stroke-color: #707070;\r\n      color: #493735;\r\n      &_color {\r\n        color: #0E8DF1;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__body {\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n    .items-wrapper {\r\n      width: 75%;\r\n      .item {\r\n        width: 100%;\r\n        &:first-of-type {\r\n          margin: 0 0 10px;\r\n        }\r\n      }\r\n    }\r\n    .item { --border-color: #493735;\r\n      width: 70%;\r\n\r\n      &__label {\r\n        --color: #707070;\r\n      }\r\n    }\r\n  }\r\n  &__btn {\r\n    --background: #FEDE00;\r\n    margin: 2vh 4vw 0;\r\n  }\r\n}\r\n\r\n.text {\r\n  padding: 3vh 9vw 0;\r\n  text-align: center;\r\n  font: normal normal 600 25px/30px Montserrat;\r\n  color: #493735;\r\n}\r\n\r\n.button-wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  &__btn {\r\n    width: 74vw;\r\n    height: 7.39vh;\r\n    margin-top: 12vh;\r\n    --background: #FEDE00;\r\n    --border-radius: 5px;\r\n    color: #493735;\r\n    font: normal normal 700 22px/27px Montserrat;\r\n    text-transform: capitalize;\r\n  }\r\n}\r\n.forgot-password-btn {\r\n  --background: transparent;\r\n  width: 74vw;\r\n  height: 7.39vh;\r\n  margin: 2vh auto;\r\n  --color: black;\r\n  text-align: center;\r\n  text-decoration: underline;\r\n\r\n}\r\n.login {\r\n  .form {\r\n    padding: 12vh 20px 0 0;\r\n    &__item:first-of-type {\r\n      margin-bottom: 20px;\r\n    }\r\n  }\r\n}\r\n\r\nion-item.ion-invalid.ion-touched {\r\n  --border-color: var(--ion-color-danger);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3895:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/login/email-registration/email-registration.page.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header></ion-header>\r\n<ion-content>\r\n  <div class=\"top\"></div>\r\n  <ion-icon class=\"arrow\" name=\"arrow-back-sharp\" *ngIf=\"step !== 3\" (click)=\"back()\"></ion-icon>\r\n  <div class=\"login\" *ngIf=\"isLogin\">\r\n    <form class=\"form\" [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\r\n      <ion-item class=\"form__item\" mode=\"ios\">\r\n        <ion-label class=\"item__label\" position=\"stacked\">{{ 'emailRegister.email' | translate }}</ion-label>\r\n        <ion-input  name=\"email\" appAutofill formControlName=\"email\" autocomplete=\"email\" inputmode=\"email\" ></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"form__item\" mode=\"ios\">\r\n        <ion-label class=\"item__label\" position=\"stacked\">{{ 'emailRegister.password' | translate }}</ion-label>\r\n        <ion-input type=\"password\" appAutofill name=\"password\" autocomplete=\"current-password\" formControlName=\"password\"></ion-input>\r\n      </ion-item>\r\n      <div class=\"button-wrapper\">\r\n        <ion-button class=\"button-wrapper__btn\" type=\"submit\" [disabled]=\"loginForm.invalid\">\r\n          {{ 'emailRegister.login' | translate }}</ion-button>\r\n      </div>\r\n      <div class=\"forgot-password-btn\" (click)=\"goToChangePassword()\" ><span>{{ 'emailRegister.forgot_password' | translate }}</span></div>\r\n    </form>\r\n  </div>\r\n  <div class=\"registration\" *ngIf=\"!isLogin\">\r\n    <form class=\"form\">\r\n      <div class=\"form-item\" *ngIf=\"step === 0\">\r\n        <div class=\"form-item__header header\">\r\n          <h1 class=\"header__item\">{{ 'emailRegister.title1' | translate }}</h1>\r\n          <h1 class=\"header__item\">{{ 'emailRegister.questionEmail' | translate }}</h1>\r\n        </div>\r\n        <div class=\"form-item__body\">\r\n          <ion-item class=\"item\" mode=\"ios\">\r\n            <ion-label class=\"item__label\" position=\"stacked\">{{ 'emailRegister.email' | translate }}</ion-label>\r\n            <ion-input [(ngModel)]=\"emailRegisterData.email\" name=\"email\" appAutofill autocomplete=\"current-password\" #emailInput=\"ngModel\" inputmode=\"email\"\r\n                       pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" required></ion-input>\r\n          </ion-item>\r\n          <ion-fab-button class=\"form-item__btn\" (click)=\"nextStep()\" [disabled]=\"emailInput.invalid\">\r\n            <ion-icon src=\"../../../assets/icons/arrow-right.svg\"></ion-icon>\r\n          </ion-fab-button>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-item\" *ngIf=\"step === 1\">\r\n        <div class=\"form-item__header header\">\r\n          <h1 class=\"header__item\">{{ 'emailRegister.hello' | translate }}\r\n            <span class=\"header__item_color\">{{ emailRegisterData.email }}</span>.</h1>\r\n          <h1 class=\"header__item\">{{ 'emailRegister.questionName' | translate }}</h1>\r\n        </div>\r\n        <div class=\"form-item__body\">\r\n          <div class=\"items-wrapper\">\r\n            <ion-item class=\"item\" mode=\"ios\">\r\n              <ion-label class=\"item__label\" position=\"stacked\">Name</ion-label>\r\n              <ion-input [(ngModel)]=\"emailRegisterData.first_name\" name=\"first_name\" #nameInput=\"ngModel\"\r\n                         required></ion-input>\r\n            </ion-item>\r\n            <ion-item class=\"item\" mode=\"ios\">\r\n              <ion-label class=\"item__label\" position=\"stacked\">{{ 'emailRegister.lastName' | translate }}</ion-label>\r\n              <ion-input [(ngModel)]=\"emailRegisterData.last_name\" name=\"last_name\" #lastNameInput=\"ngModel\"\r\n                         required></ion-input>\r\n            </ion-item>\r\n          </div>\r\n          <ion-fab-button class=\"form-item__btn\" (click)=\"nextStep()\"\r\n                          [disabled]=\"nameInput.invalid || lastNameInput.invalid\">\r\n            <ion-icon src=\"../../../assets/icons/arrow-right.svg\"></ion-icon>\r\n          </ion-fab-button>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-item\" *ngIf=\"step === 2\">\r\n        <div class=\"form-item__header header\">\r\n          <h1 class=\"header__item\">{{ 'emailRegister.hello' | translate }}\r\n            <span class=\"header__item_color\">{{ emailRegisterData.first_name }}</span>.</h1>\r\n          <h1 class=\"header__item\">{{ 'emailRegister.choosePassword' | translate }}</h1>\r\n        </div>\r\n        <div class=\"form-item__body\">\r\n          <ion-item class=\"item\" mode=\"ios\">\r\n            <ion-label class=\"item__label\" position=\"stacked\">{{ 'emailRegister.password' | translate }}</ion-label>\r\n            <ion-input [(ngModel)]=\"emailRegisterData.password\" name=\"password\" type=\"password\" appAutofill\r\n                       #passwordInput=\"ngModel\" autocomplete=\"current-password\" required minlength=\"8\"></ion-input>\r\n          </ion-item>\r\n          <ion-fab-button class=\"form-item__btn\" (click)=\"register()\" [disabled]=\"passwordInput.invalid\">\r\n            <ion-icon src=\"../../../assets/icons/arrow-right.svg\"></ion-icon>\r\n          </ion-fab-button>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-item\" *ngIf=\"step === 3\">\r\n        <div class=\"form-item__header header\">\r\n          <h1 class=\"header__item\">{{ 'emailRegister.welcome' | translate }}\r\n            <span class=\"header__item_color\">{{ emailRegisterData.first_name }}</span>!</h1>\r\n        </div>\r\n        <p class=\"text\">{{ 'emailRegister.letsStart' | translate }}</p>\r\n        <div class=\"button-wrapper\">\r\n          <ion-button class=\"button-wrapper__btn\" [routerLink]=\"'/google-login'\">{{ 'general.continue' | translate }}</ion-button>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-item\" *ngIf=\"step === -1\">\r\n        <div class=\"form-item__header header\">\r\n          <h1 class=\"header__item\">{{ 'emailRegister.hello' | translate }}\r\n            <span class=\"header__item_color\">{{ emailRegisterData.email }}</span>.</h1>\r\n        </div>\r\n        <p class=\"text ion-text-center\">{{ 'emailRegister.emailIsAlreadyRegistered' | translate }}</p>\r\n        <p class=\"text ion-text-center\">{{ 'emailRegister.pleaseDoLogin' | translate }}</p>\r\n        <div class=\"button-wrapper\">\r\n          <ion-button class=\"button-wrapper__btn\" (click)=\"openLogin()\">{{ 'emailRegister.login' | translate }}</ion-button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_email-registration_email-registration_module_ts.js.map