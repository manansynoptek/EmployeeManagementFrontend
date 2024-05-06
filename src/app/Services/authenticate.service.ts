import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/loginrequest.model';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { ResponseModel } from '../models/responsemodel.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private currentEmployeeSubject!: BehaviorSubject<any>;
  public currentEmployee!: Observable<any>;

  constructor(private httpClient: HttpClient,
    private cookieService: CookieService) {
    const currentUser = this.cookieService.get('currentUser');
    this.currentEmployeeSubject = new BehaviorSubject<any>(
      JSON.parse(currentUser ? currentUser : '{}')
    );
    this.currentEmployee = this.currentEmployeeSubject.asObservable();
  }

  public get currentEmployeeValue() {
    return this.currentEmployeeSubject ? this.currentEmployeeSubject.value : null;
  }

  authenticateEmployee(loginRequest: LoginRequest): Observable<ResponseModel> {
    var url = 'http://localhost:7016/api/Employee/AuthenticateEmployee';
    return this.httpClient.post(url, loginRequest)
      .pipe(
        map(response => {
          var response2 = response as ResponseModel;
          if (response) {
            this.currentEmployeeSubject.next(response2.data);
          }
          return response as ResponseModel;
        })
      );
  }

  checkAPI(): Observable<ResponseModel> {
    var url = 'http://localhost:7016/api/Employee/CheckAPI';
    return this.httpClient.get(url)
      .pipe(map((response) => response as ResponseModel));
  }

  getAllDepartments(): Observable<ResponseModel> {
    var url = 'http://localhost:7016/api/Department/GetAllDepartments';
    return this.httpClient.get(url)
      .pipe(map((response) => response as ResponseModel));
  }

}
