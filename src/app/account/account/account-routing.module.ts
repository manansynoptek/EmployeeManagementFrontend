import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeloginComponent } from '../employeelogin/employeelogin.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeloginComponent,
  },
  { path: 'login', component: EmployeeloginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
