import { Component } from '@angular/core';
import { AuthenticateService } from 'src/app/Services/authenticate.service';
import { ErrorCodeEnum } from 'src/app/shared/enums';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private authenticateService: AuthenticateService) {

  }

  getDepartments(): void {
    this.authenticateService.getAllDepartments()
      .subscribe({
        next: (result) => {
          if (result.httpStatus === ErrorCodeEnum.Ok) {
            var names = '';
            result.data.map((x: any) => {
              names += x.departmentName + ', ';
            });
            alert(`Departments ==> ${names}`);
          } else {
          }
        },
        complete: () => {
        },
        error: () => {
        },
      })
  }
}
