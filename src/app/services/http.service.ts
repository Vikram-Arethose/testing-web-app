import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ModalController } from '@ionic/angular';
import { LoggerService } from './logger.service';
import { Observable, Subject } from 'rxjs';
import { BranchesNearResponse, BranchNear } from '../models/http/branchesNear';
import { HomeBranch, HomeBranchesRes } from '../models/http/homeBranch';
import { ApiResponse } from '../models/http/apiResponse';
import { InboxMessage } from '../models/http/inboxMessage';
import { CreateStxRes } from '../models/http/createStxRes';
import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser/ngx';
import { DataForPayment } from '../models/http/dataForPayment';
import { DebitArgs } from '../models/http/payment/debitArgs';
import { OrderDetails } from '../models/http/orderDetails';
import { AlertService } from './alert.service';
import { InAppBrowserEvent } from '@ionic-native/in-app-browser';
import { NavigationExtras, Router } from '@angular/router';
import { CartService } from './cart.service';
import { DateService } from './date.service';
import { BakeryService } from './bakery.service';
import { LoadingService } from './loading.service';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  date: string;
  private baseUrl: string = environment.serverUrl;

  constructor(
    private alertServ: AlertService,
    private bakeryServ: BakeryService,
    private cartServ: CartService,
    private dateServ: DateService,
    private iab: InAppBrowser,
    private http: HttpClient,
    private loadingServ: LoadingService,
    private logger: LoggerService,
    private modalController: ModalController,
    private ngZone: NgZone,
    private router: Router,
  ) {
    console.log('production environment: ', environment.production);
    this.dateServ.dateShared.subscribe(res => this.date = res);
  }

  checkApiRes(res: ApiResponse) {
    this.logger.log('API response: ', res);
    if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS') {
      return true;
    } else {
      this.alertServ.presentAlert();
      return false;
    }
  }

  postData(endPoint: string, data) {
    return this.http.post(this.baseUrl + endPoint, data);
  }

  checkEmail(email: string) {
    const subject = new Subject();
    this.http.get(`${this.baseUrl}/check/email?email=${email}`).subscribe((res: ApiResponse) => {
      if (this.checkApiRes(res)) {
        subject.next(res.data);
      }
    });
    return subject.asObservable();
  }

  getBranchesNear(lat: string, lng: string) {
    const subject = new Subject<BranchNear[]>();
    this.http.get(this.baseUrl + '/branches-near-me?lat=' + lat + '&lng=' + lng)
      .subscribe((res: BranchesNearResponse) => {
        if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS') {
          subject.next(res.data);
          this.logger.log('BranchesNearResponse data', res.data);
        }
    });
    return subject.asObservable();
  }

  getHomeBranches(lat: string, lng: string) {
    const subject = new Subject<HomeBranch[]>();
    this.http.get(`${this.baseUrl}/branches/home?lat=${lat}&lng=${lng}`)
      .subscribe((res: HomeBranchesRes) => {
        if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS') {
          subject.next(res.data);
          this.logger.log('http res.data: ', res.data);
        }
      });
    return subject.asObservable();
  }

  removeAddToFavorites(branchId: number) {
    const subject = new Subject();
    this.http.put(`${this.baseUrl}/branches/favourites/${branchId}`, null)
      .subscribe((res: ApiResponse) => {
        if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS') {
          subject.next(res.data);
          this.logger.log('http res.data: ', res.data);
        }
      });
    return subject.asObservable();
  }

  getFavorites(): Observable<HomeBranch[]> {
    const subject = new Subject<HomeBranch[]>();
    this.http.get<Observable<ApiResponse>>(`${this.baseUrl}/branches/favourites`).subscribe((res: any) => {
      if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS') {
        subject.next(res.data);
        this.logger.log('http res.data: ', res.data);
      }
    });
    return subject.asObservable();
  }

  getBranchDetail(branchId: number) {
    const subject = new Subject();
    this.http.get(`${this.baseUrl}/branch/${branchId}`).subscribe((res: ApiResponse) => {
      if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS') {
        subject.next(res.data);
        this.logger.log('http res.data: ', res.data);
      }
    });
    return subject.asObservable();
  }

  getUserDetails() {
    const subject = new Subject<User>();
    this.http.get(`${this.baseUrl}/user/details`).subscribe((res: ApiResponse) => {
      if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS') {
        subject.next(res.data);
        this.logger.log('http user/details res.data: ', res.data);
      }
    });
    return subject.asObservable();
  }

  updateUserDetails(data): Observable<boolean> {
    const subject = new Subject<boolean>();
    this.http.put(`${this.baseUrl}/user/details`, data).subscribe((res: ApiResponse) => {
      if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS') {
        if (Array.isArray(res.data) && res.data.length === 0) {
          subject.next(true);
        }
        this.logger.log('http res.data: ', res.data);
      }
    });
    return subject.asObservable();
  }

  getInboxMessages(): Observable<InboxMessage[]> {
    const subject = new Subject<InboxMessage[]>();
    this.http.get(this.baseUrl + '/inbox/messages').subscribe((res: ApiResponse) => {
      if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS') {
        subject.next(res.data);
        this.logger.log('http res.data: ', res.data);
      }
    });
    return subject.asObservable();
  }

  deleteUserAccount() {
    const subject = new Subject<boolean>();
    this.http.delete(this.baseUrl + '/user/delete').subscribe( (res: ApiResponse) => {
      this.logger.log('deleteUserAccount res', res);
      if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS') {
        subject.next(true);
      }
    });
    return subject.asObservable();
  }

  getBodyForPayment(data: DataForPayment) {
    return {
      branch_id: data.branch_id,
      basket_sum: data.basket_sum,
      products: data.products,
      pickup_date: data.pickup_date,
    };
  }

  createSmartTransaction(data: DataForPayment): Observable<CreateStxRes | false> {
    this.loadingServ.presentLoading();
    const body = this.getBodyForPayment(data);
    const subject = new Subject<CreateStxRes | false>();
    this.http.post(this.baseUrl + '/payment/transaction/create', body).subscribe((res: ApiResponse) => {
      this.loadingServ.dismiss();
      if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS') {
        subject.next(res.data);
        this.logger.log('http res.data: ', res.data);
      } else {
        subject.next(false);
      }
    });
    return subject.asObservable();
  }

  openCreditCardPayment(stxId: string, userId: number): InAppBrowserObject {
    return this.iab.create(`${this.baseUrl}/payment/creditcard?stx_id=${stxId}&user_id=${userId}`, '_blank');
  }

  debitPayment(debitArgs: DebitArgs) {
    const body = {
      first_name: debitArgs.first_name,
      last_name: debitArgs.last_name,
      street: debitArgs.street,
      st_number: debitArgs.st_number,
      city: debitArgs.city,
      postal_code: debitArgs.postal_code,
      account_owner: debitArgs.account_owner,
      iban: debitArgs.iban,
      branch_id: debitArgs.branch_id,
      basket_sum: debitArgs.basket_sum,
      products: debitArgs.products,
      pickup_date: debitArgs.pickup_date,
    };
    return  this.http.post(this.baseUrl + '/payment/debit', body);
  }

  iabPayment(endPoint: string) {
    this.loadingServ.presentLoading();
    const body = this.getBodyForPayment(this.bakeryServ.getDataForPayment(this.date));
    const subject = new Subject<boolean>();
    this.http.post(this.baseUrl + endPoint, body).subscribe((res: ApiResponse) => {
      this.loadingServ.dismiss();
      this.logger.log('http res.data: ', res.data);
      if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS' && res.data?.iframeUrl) {
        this.handleIabResult(this.iab.create(res.data.iframeUrl, '_blank'));
        subject.next(true);
      } else {
        this.alertServ.presentAlert();
        subject.next(false);
      }
    });
    return subject.asObservable();
  }

  useLastPayment(data: DataForPayment) {
    const body = this.getBodyForPayment(data);
    return this.http.post(this.baseUrl + '/payment/last-used', body);
  }

  handleIabResult(browser: InAppBrowserObject) {
    browser.on('loadstart').subscribe((res: InAppBrowserEvent) => {
      if (res.url.includes('/payment/success')) {
        this.modalController.dismiss();
        browser.close();
        const navigationExtras: NavigationExtras = {
          state: {
            isConfirm: true,
            orderId: res.url.substr(res.url.lastIndexOf('=') + 1)
          }
        };
        this.ngZone.run(() => this.router.navigate(['orders'], navigationExtras));
        this.cartServ.clearCart();
        this.dateServ.changeDate('');
      } else if (res.url.includes('/payment/failed')) {
        this.alertServ.presentAlert('Payment was failed! Please try again later.');
        browser.close();
      }
    });
  }

  getOrderDetails(orderId: number) {
    const subject = new Subject<OrderDetails>();
    this.http.get(`${this.baseUrl}/order/details/${orderId}`).subscribe((res: ApiResponse) => {
      if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS') {
        subject.next(res.data);
        this.logger.log('http res.data: ', res.data);
      } else {
        this.alertServ.presentAlert('Something went wrong! Please contact support!');
      }
    });
    return subject.asObservable();
  }

  getOrders() {
    const subject = new Subject();
    this.http.get(this.baseUrl + '/orders').subscribe((res: ApiResponse) => {
      if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS') {
        subject.next(res.data);
        this.logger.log('http res.data: ', res.data);
      } else {
        this.alertServ.presentAlert();
      }
    });
    return subject.asObservable();
  }

  registerPushToken(token: string, device: string, platform: string, osVersion: string) {
    const body = {
      token,
      device,
      platform,
      os_version: osVersion
    };
    this.http.post(this.baseUrl + '/pushNotification/register', body).subscribe((res: ApiResponse) => {
      this.logger.log('http res.data: ', res.data);
      if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS' && !res.data?.error) {
      } else {
        this.logger.log('registerPushToken error: ', res.data.error);
      }
    });
  }

  openIabUrl(url: string) {
    this.iab.create(url, '_blank');
  }

}
