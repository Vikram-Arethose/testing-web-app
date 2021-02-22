import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login-first',
  templateUrl: './login-first.component.html',
  styleUrls: ['./login-first.component.scss'],
})
export class LoginFirstComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private router: Router
  ) { }

  ngOnInit() {}

  close() {
    this.modalCtrl.dismiss();
  }

  toLogin() {
    this.router.navigate(['start'], { replaceUrl: true });
    this.close();
  }

}
