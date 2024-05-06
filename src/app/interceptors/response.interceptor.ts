import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { ErrorCodeEnum } from '../shared/enums';
import { CommonService } from '../Services/common.service';
import { Router } from '@angular/router';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(private commonService: CommonService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((response) => response),
      catchError((exception) => {
        const messageId = exception.error?.Id ? `${exception.error.Id} - ` : '';
        const msg = 'An error occurred while processing your request. Please contact to your administrator';
        switch (exception.status) {
          case ErrorCodeEnum.Unknown:
            alert(msg);
            break;
          case ErrorCodeEnum.BadRequest:
            if (exception.error.message) {
              alert(msg);
            } else {
              alert(msg);
            }
            break;
          case ErrorCodeEnum.Unauthorized:
            alert(msg);
            this.commonService.logOut();
            this.router.navigate(['/login']);
            break;
          case ErrorCodeEnum.NotFound:
            alert(msg);
            break;
          case ErrorCodeEnum.Forbidden:
            // this.router.navigate([BaseImport.ErrorCodeUrlEnum.Forbidden]);
            break;
          case ErrorCodeEnum.InternalServerError:
            alert(msg);
            // this.router.navigate([BaseImport.ErrorCodeUrlEnum.InternalServerError]);
            break;
          default:
            alert(msg);
            // this.router.navigate([ErrorCodeUrlEnum.InternalServerError]);
            break;
        }
        return of(exception);
      })
    );
  }
}
