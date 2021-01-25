import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent,
  HttpResponse, HttpHeaders
} from '@angular/common/http';

import { Observable, EMPTY, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoggerService } from '../../services/logger.service';
import { AlertController } from '@ionic/angular';
import { LocalStorageService } from '../../services/local-storage.service';
import { ErrorService } from '../../services/error.service';
import { LoadingService } from '../../services/loading.service';
import { AnalyticsService } from '../../services/analytics.service';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(
    private analyticsServ: AnalyticsService,
    private logger: LoggerService,
    private alertController: AlertController,
    private loadingService: LoadingService
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
          this.logger.warn(`Interceptor: Backend returned code ${error.status} An error was:`, error.error.message);
          this.presentAlert(error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          this.logger.warn('Interceptor: An error occurred: ', error);
          this.presentAlert('Something went wrong! Please try again later.');
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

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

}

