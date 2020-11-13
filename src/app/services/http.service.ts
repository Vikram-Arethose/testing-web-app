import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { EmailRegister } from '../models/emailRegister';
import { AlertController } from '@ionic/angular';
import { LoggerService } from './logger.service';

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

  postData(endPoint: string, data) {
    return this.http.post(this.baseUrl + endPoint, data);
  }

  handleError(err) {
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      this.presentAlert(err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      this.presentAlert('Something went wrong! Please try later.');
      this.logger.warn(`Backend returned code ${err.status}, body was: ${err.error}`);
    }

    function getProps(obj) {
      let result = '';
      for (const property in obj) {
        if (obj.hasOwnProperty(property) && obj[property] != null) {
          if (obj[property].constructor === Object) {
            getProps(obj[property]);
          } else if (obj[property].constructor === Array) {
            for (const item of obj[property]) {
              result += item;
            }
          } else {
            result += obj[property];
          }
        }
      }
      return result;
    }

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
