import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { EmailRegister } from '../models/emailRegister';
import { AlertController } from '@ionic/angular';
import { LoggerService } from './logger.service';
import { Observable, Subject } from 'rxjs';
import { BranchesNearResponse, BranchNear } from '../models/http/branchesNear';
import { HomeBranch, HomeBranchesRes } from '../models/http/homeBranch';
import { ApiResponse } from '../models/http/apiResponse';
import { InboxMessage } from '../models/http/inboxMessage';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string = environment.serverUrl;

  constructor(
    private http: HttpClient,
    private alertController: AlertController,
    private logger: LoggerService
  ) { }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  postData(endPoint: string, data) {
    return this.http.post(this.baseUrl + endPoint, data);
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
    const subject = new Subject();
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
    return this.http.get(this.baseUrl + '/user/delete').pipe(
      tap((res: ApiResponse) => {
        this.logger.log('deleteUserAccount res', res);
        if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS' && !res.data) {
          return true;
        }
      })
    );
  }

}
