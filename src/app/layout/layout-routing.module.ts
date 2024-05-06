import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../Login/login/login.component';
import { HomeComponent } from '../Home/home/home.component';
import { AddEmployeeComponent } from '../Employee/add-employee/add-employee.component';
import { AddDepartmentComponent } from '../Department/add-department/add-department.component';
import { authGuard } from '../guards/auth.guard';
import { LayoutComponent } from './layout/layout.component';

// const routes: Routes = [
//   { path: '', component: LayoutComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'home', component: HomeComponent, canActivate: [authGuard] },
//   { path: 'addemployee', component: AddEmployeeComponent, canActivate: [authGuard] },
//   { path: 'adddepartment', component: AddDepartmentComponent, canActivate: [authGuard] }
// ];

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent, canActivate: [authGuard] },
      { path: 'addemployee', component: AddEmployeeComponent, canActivate: [authGuard] },
      { path: 'adddepartment', component: AddDepartmentComponent, canActivate: [authGuard] }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
