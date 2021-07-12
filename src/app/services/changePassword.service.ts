import { Injectable } from '@angular/core';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {
  constructor(
    private http: HttpService
  ) {}

  // sendNewPassword(email, password, status) {
  //   const result = this.http.sendPassword(email, password, status)
  //   console.log('result after promise', result);
  //   return result;
  // }
}
