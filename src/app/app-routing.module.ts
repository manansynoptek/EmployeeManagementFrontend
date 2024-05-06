import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './Employee/add-employee/add-employee.component';
import { AddDepartmentComponent } from './Department/add-department/add-department.component';
import { LoginComponent } from './Login/login/login.component';
import { HomeComponent } from './Home/home/home.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  // { path: 'addemployee', component: AddEmployeeComponent, canActivate: [authGuard] },
  // { path: 'adddepartment', component: AddDepartmentComponent, canActivate: [authGuard] }
  {
    path: '',
    loadChildren: async () => {
      const m = await import('./layout/layout.module');
      return m.LayoutModule;
    },
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
