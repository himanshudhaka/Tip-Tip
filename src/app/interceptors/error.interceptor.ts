import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ApiService } from '../services/api.service';
import { ToastController } from '@ionic/angular';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
      private apiService: ApiService,
      private toastController: ToastController
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if ([401, 403].includes(err.status) && this.apiService.token) {
                // auto logout if 401 or 403 response returned from api
                this.apiService.logout();
            }

            const error = err.error?.message || err.statusText;
            console.error(err);
            this.toastController.create({
              message: error,
              duration: 2000,
              color: 'danger'
            }).then((toast) => { toast.present() })
            return throwError(error);
        }))
    }
}
