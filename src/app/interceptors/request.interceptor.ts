import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonService } from '../Services/common.service';

@Injectable({
  providedIn: 'root',
})
export class RequestInterceptor implements HttpInterceptor {

  constructor(private commonService: CommonService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Modify the request to add a token
    const token = this.commonService.getEmployeeDetail()?.accessToken;  // Get this from a service or other source
    const clonedReq = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`)
        .append('Access-Control-Allow-Origin', '*')
        .append('Access-Control-Allow-Credentials', 'true'),
    });

    return next.handle(clonedReq);
  }
}
