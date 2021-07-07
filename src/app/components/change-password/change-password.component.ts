import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  updatePassword: FormGroup;
  user = {
    email: null,
    password: null
  };
  constructor() {
    this.updatePassword = new FormGroup({
      emailVal: new FormControl('', [Validators.required, Validators.email]),
      passwordVal: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  ngOnInit() {}
sendNewPassword() {
  console.log('updatePassword', this.updatePassword);
  this.user.email = this.updatePassword.controls.emailVal.value;
  this.user.password = this.updatePassword.controls.passwordVal.value;
  console.log('user', this.user);
}
}
