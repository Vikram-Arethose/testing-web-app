import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-code',
  templateUrl: './confirm-code.component.html',
  styleUrls: ['./confirm-code.component.scss'],
})
export class ConfirmCodeComponent implements OnInit {
  confirmCode = '';
  activeButton = true;
  newPasswordSend = false;
  counter: number;
  constructor(
    public toast: AlertService,
    private translate: TranslateService,
    private router: Router
  ) { }

  ngOnInit() {
    if (localStorage.getItem('count')) {
      this.counter = +localStorage.getItem('count');
    }else {
      this.counter = 0;
    }
  }
  getConfirmCode(value) {
    this.confirmCode = value;
    if (this.confirmCode.length === 6) {
      this.activeButton = false;
    }else {
      this.activeButton = true;
    }
  }
  sendCode() {
    console.log('Code send', this.confirmCode);
    this.counter ++;
    localStorage.setItem('count', this.counter.toString());
    if (this.counter >= 3) {
      this.activeButton = true;
      const message = this.translate.instant('emailRegister.sendCodeInfoSpam');
      this.toast.comparePasswordToast(message);
      setTimeout(() => {
        this.counter = 0;
        localStorage.setItem('count', this.counter.toString());
        this.activeButton = false;
      }, 600000);
    }
    this.router.navigate(['']);
    this.newPasswordSend = false;
    localStorage.setItem('ConfirmStatusCode', this.newPasswordSend.toString());
  }
}
