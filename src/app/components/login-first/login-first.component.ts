import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-first',
  templateUrl: './login-first.component.html',
  styleUrls: ['./login-first.component.scss'],
})
export class LoginFirstComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private loginServ: LoginService
  ) { }

  ngOnInit() {}

  close() {
    this.modalCtrl.dismiss();
  }

  async toLogin() {
    await this.loginServ.logout();
    this.close();
  }

}
