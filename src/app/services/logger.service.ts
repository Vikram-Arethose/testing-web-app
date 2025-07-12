import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(
    private errorHandler: ErrorHandler
  ) { }

  log(value: any, ...rest: any) {
    if (!environment.production) {
      console.log(value, ...rest);
    }
  }

  error(p0: string, error: Error) {
    this.errorHandler.handleError(error);
  }

  warn(value: any, ...rest: any) {
    if (!environment.production) {
      console.warn(value, ...rest);
    }
  }
}
