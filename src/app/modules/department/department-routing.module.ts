import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddepartmentComponent } from './adddepartment/adddepartment.component';
import { ListdepartmentComponent } from './listdepartment/listdepartment.component';
import { authGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: ListdepartmentComponent, canActivate: [authGuard]
  },
  {
    path: 'adddepartment', component: AdddepartmentComponent, canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
