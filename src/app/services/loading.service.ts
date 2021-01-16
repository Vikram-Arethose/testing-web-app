import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(
    private loadingController: LoadingController
  ) { }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'loading-bag',
      message: '<ion-img src="/assets/gifs/loader_bag.gif" alt="loading..."></ion-img>',
      mode: 'ios',
      spinner: null,
      translucent: true,
      backdropDismiss: false
    });
    await loading.present();
  }

  dismiss() {
    this.loadingController.dismiss();
  }
}
