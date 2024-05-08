import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../guards/auth.guard';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: async () => {
          const m = await import('../modules/dashboard/dashboard.module');
          return m.DashboardModule;
        },
        canActivate: [authGuard]
      },
      {
        path: 'departments',
        loadChildren: async () => {
          const m = await import('../modules/department/department.module');
          return m.DepartmentModule;
        },
        canActivate: [authGuard]        
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
