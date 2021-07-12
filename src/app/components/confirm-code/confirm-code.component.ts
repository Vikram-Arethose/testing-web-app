import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-confirm-code',
  templateUrl: './confirm-code.component.html',
  styleUrls: ['./confirm-code.component.scss'],
})
export class ConfirmCodeComponent implements OnInit {
  confirmCode = '';
  activeButton = true;
  newPasswordSend = false;
  disabled = false;
  timer = 60;
  constructor(
    public toast: AlertService,
    private translate: TranslateService,
    private router: Router,
    private http: HttpService
  ) { }

  ngOnInit() {
    this.checkTimer();
  }
  getConfirmCode(value) {
    this.confirmCode = value;
    if (this.confirmCode.length < 6) {
      this.activeButton = true;
    }else {
      this.activeButton = false;
    }
  }
  sendCode() {
    const message = this.translate.instant('emailRegister.successCode');
    this.http.sendConfirmationCode(this.confirmCode).subscribe( res => {
      this.newPasswordSend = false;
      this.toast.presentToast(message);
      localStorage.setItem('ConfirmStatusCode', this.newPasswordSend.toString());
      setTimeout(() => {
        this.router.navigate(['']);
        localStorage.removeItem('changeDataEmail');
      }, 2000);
    }, err => {
      this.confirmCode = '';
    });
  }
  resendCode() {
    const email = localStorage.getItem('changeDataEmail');
    this.http.sendPassword(email, null, 1).subscribe( (res: any) => {
      if (res.apiStatus === 'OK' &&  res.apiCode === 'SUCCESS') {
        this.toast.presentToast('code resend');
        console.log('resend code res', res);
      }

    }, err => {
      console.log('Error when resend code');
    });
    this.disabledBtnFromSpam();
  }
  returnToStartPage() {
    this.router.navigate(['']);
    localStorage.setItem('ConfirmStatusCode', 'false');
    localStorage.removeItem('changeDataEmail');
  }
  disabledBtnFromSpam() {
    const timeStamp = new Date().getTime() + 60000;
    localStorage.setItem('resendCode_timestamp', timeStamp.toString());
    this.disabled = true;
    this.checkTimer();
  }
  checkTimer() {
    const timeStamp = localStorage.getItem('resendCode_timestamp');
    if (timeStamp) {
      const currentTime = new Date().getTime();
      const diff = (+timeStamp - currentTime) / 1000;
      console.log('DIFF', diff);
      if ( diff > 0) {
        this.timer = Math.round(diff);
        this.startTimer();
      }else {
        this.disabled = false;
        localStorage.removeItem('resendCode_timestamp');
      }
    }else {
      this.disabled = false;
    }
  }

  startTimer() {
   const timerToShow = setInterval(() => {
   this.timer--;
   if ( this.timer < 1) {
       this.disabled = false;
       clearInterval( timerToShow);
       localStorage.removeItem('resendCode_timestamp');
       this.timer = 60;
     }
   }, 1000);
  }
}
