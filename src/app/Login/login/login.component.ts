import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticateService } from 'src/app/Services/authenticate.service';
import { CommonService } from 'src/app/Services/common.service';
import { LoginRequest } from 'src/app/models/loginrequest.model';
import { ErrorCodeEnum } from 'src/app/shared/enums';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  loginRequest!: LoginRequest;

  constructor(private formBuilder: FormBuilder,
    private authenticateService: AuthenticateService,
    private cookieService: CookieService,
    private router: Router,
    private commonService: CommonService
  ) {
    this.loginFormInit();
  }

  get frm(): any {
    return this.loginForm.controls;
  }

  loginFormInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ],
      ],
      password: ['', Validators.required]
    });
  }

  authenticateEmployee(): void {

    if (!this.loginForm.valid) {
      this.markFormGroupDirty(this.loginForm);
      console.log('Form is invalid');
      return;
    }
    this.loginRequest = this.loginForm.value;

    this.authenticateService.authenticateEmployee(this.loginRequest)
      .subscribe({
        next: (result) => {
          if (result.httpStatus === ErrorCodeEnum.Ok) {
            const employeeModel = result.data;
            this.commonService.setEmployeeDetail(employeeModel);
            this.router.navigate(['/home']);
          } else {
          }
        },
        complete: () => {
        },
        error: () => {
        },
      });

  }

  markFormGroupDirty(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((key) => {
      formGroup.get(key)?.markAsDirty();
      formGroup.get(key)?.markAsTouched();
    });
  }

  checkAPI(): void {
    this.authenticateService.checkAPI()
      .subscribe({
        next: (result) => {
          if (result.httpStatus === ErrorCodeEnum.Ok) {            
          } else {
          }
        },
        complete: () => {
        },
        error: () => {
        },
      });
  }
}
