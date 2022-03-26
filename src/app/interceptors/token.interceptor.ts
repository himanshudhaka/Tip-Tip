import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ApiService } from '../services/api.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private apiService: ApiService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with jwt if account is logged in and request is to the api url
    const token = this.apiService.token;
    // const isLoggedIn = account && account.jwtToken;
    const isApiUrl = request.url.startsWith(environment.API_URL);
    if (token && isApiUrl) {
        request = request.clone({
          setHeaders: { Authorization: `Bearer ${token}` }
        });
    }

    return next.handle(request);
}
  // Filter out URLs where you don't want to add the token!
  private isInBlockedList(url: string): Boolean {
    // Example: Filter out our login and logout API call
    if (url == `${environment.API_URL}/login` ||
      url == `${environment.API_URL}/logout`) {
      return true;
    } else {
      return false;
    }
  }

  // Add our current access token from the service if present
  private addToken(req: HttpRequest<any>) {
    if (this.apiService.token) {
      return req.clone({
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.apiService.token}`
        })
      });
    } else {
      return req;
    }
  }
}
