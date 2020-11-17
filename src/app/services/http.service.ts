import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { EmailRegister } from '../models/emailRegister';
import { AlertController } from '@ionic/angular';
import { LoggerService } from './logger.service';
import { Observable } from 'rxjs';
import { BranchesNearResponse } from '../models/http/branchesNear';

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

  getBranchesNear(lat: string, lng: string) {
    return this.http.get(this.baseUrl + '/branches-near-me?lat=' + lat + '&lng=' + lng)
      .subscribe((res: any) => {
        if (res.apiStatus === 'OK' && res.apiCode === 'SUCCESS') {
          this.logger.log('BranchesNearResponse', res);
        }
    });
  }

  postData(endPoint: string, data) {
    return this.http.post(this.baseUrl + endPoint, data);
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
