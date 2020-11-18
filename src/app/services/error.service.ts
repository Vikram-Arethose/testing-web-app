import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorService implements ErrorHandler {

  constructor( private injector: Injector ) { }

  handleError(error: any) {
    const router = this.injector.get(Router);
    if (Error instanceof HttpErrorResponse) {
      console.error('HttpErrorResponse status', error.status);
    } else {
      console.error('an error occurred here: ', error);
    }
  }
}
