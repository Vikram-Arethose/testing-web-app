import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private alertCtrl: AlertController,
    private toastController: ToastController,
    private translate: TranslateService
  ) { }

  async presentAlert(message?: string, header?: string) {
    if (!message) {
      message = this.translate.instant('alert.defaultErrorMessage');
    }
    const alert = await this.alertCtrl.create({
      header: (localStorage.getItem('language') === 'de' && header) ? header : this.translate.instant('alert.error'),
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
  async comparePasswordToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: 'danger',
    });
    toast.present();
  }
  async deletedProductToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 4000,
      cssClass: 'deleted-product',
      position: 'middle'
    });
    toast.present();
  }

}
