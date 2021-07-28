import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../services/alert.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  updatePassword: FormGroup;
  email: null;
  password: null;
  compareError = false;
  showSpinner = false;
  constructor(
    public toast: AlertService,
    private translate: TranslateService,
    private router: Router,
    private http: HttpService,
  ) {

    this.updatePassword = new FormGroup({
      emailVal: new FormControl('', [Validators.required, Validators.email]),
      passwordVal: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPasswordVal: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }
  ngOnInit() {
  }
  comparePassword() {
    if (this.updatePassword.controls.passwordVal.value === this.updatePassword.controls.confirmPasswordVal.value) {
      return true;
    } else {
      return false;
    }
  }
sendNewPassword() {
  this.showSpinner = true;
  const compareRes = this.comparePassword();
  if (compareRes) {
    this.email = this.updatePassword.controls.emailVal.value;
    this.password = this.updatePassword.controls.passwordVal.value;
    this.http.checkEmail(this.email).subscribe( res => {
      if (res) {
        const status = 0;
        localStorage.setItem('changeDataEmail', this.email);
        this.http.sendPassword(this.email, this.password, status).subscribe( (response: any) => {
          if ( response.apiCode === 'SUCCESS') {
             this.showSpinner = false;
             this.router.navigate(['confirm-code']);
             localStorage.setItem('ConfirmStatusCode', 'true');
          }
        });
      }else {
        this.showSpinner = false;
        const message = this.translate.instant('emailRegister.notConfirmedEmail');
        this.toast.presentAlert(message);
        this.updatePassword.reset();
      }
    });
  } else {
    const message = this.translate.instant('emailRegister.comparePasswordError');
    this.toast.comparePasswordToast(message);
  }
}
  returnToStartPage() {
    this.router.navigate(['']);
  }

}
