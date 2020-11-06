import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { EmailRegister } from '../models/emailRegister';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string = environment.serverUrl;

  constructor(
    private http: HttpClient,
    private alertController: AlertController
  ) { }

  postData(endPoint: string, data) {
    return this.http.post(this.baseUrl + endPoint, data);
  }

  handleError(error) {
    const errorMessage = getProps(error);
    this.presentAlert(errorMessage);

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
