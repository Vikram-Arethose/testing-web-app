import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { LoggerService } from '../../services/logger.service';
import { LoadingService } from '../../services/loading.service';
import { AnalyticsService } from '../../services/analytics.service';
import { AlertService } from '../../services/alert.service';
import { LoginService } from '../../services/login.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class Interceptor implements HttpInterceptor {
  message = '';
  constructor(
    private analyticsServ: AnalyticsService,
    private logger: LoggerService,
    private alertServ: AlertService,
    private loadingService: LoadingService,
    private loginServ: LoginService,
    private translate: TranslateService,
  ) {  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      // if the token is  stored in localstorage add it to http header
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
      // clone http to the custom AuthRequest and send it to the server
      const AuthRequest = request.clone( { headers});
      return this.handleError(next.handle(AuthRequest));
    } else {
      return this.handleError(next.handle(request));
    }

  }

  handleError(requestForHandling) {
    return requestForHandling.pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          this.logger.warn(`Interceptor: A client-side or network error occurred. An error message:`, error.error.message);
          this.alertServ.presentAlert(error.error.message);
        } else {
          if (error.error.unregisterd_by_form) {
            this.logger.warn(`Interceptor: A client-side or network error occurred. An error message:`, error.error.message);
            this.message = this.translate.instant('emailRegister.unregisteredByForm');
          }
          if (error.error.wrong_code) {
            this.logger.warn(`Interceptor: A client-side or network error occurred. An error message:`, error.error.message);
            this.message = this.translate.instant('emailRegister.wrongCode');
          }
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          if (error.status === 401) {
            this.loginServ.logout();
          }
          this.logger.warn('Interceptor: An error occurred: ', error);
          if (error.status === 405 ) {
            this.message =  error.error.message;
            this.alertServ.presentAlert(this.message);
          }
          if (error.status === 400 ) {
            this.message =  error.error.message;
            this.alertServ.presentAlert(this.message);
          }

          if (this.message === '') {
            this.alertServ.presentAlert();
          }else {
            this.alertServ.presentAlert(this.message);
          }
        }
        this.analyticsServ.logEvent('interceptor_http_error_response', error);
        this.loadingService.dismiss();
        // If you want to return a new response:
        // return of(new HttpResponse({body: [{name: "Default value..."}]}));

        // If you want to return the error on the upper level:
        return throwError(error);

        // or just return nothing:
        // return EMPTY;
      })
    );
  }

}

