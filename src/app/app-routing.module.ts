import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [  
  {
    path: '',
    loadChildren: async () => {
      const m = await import('./account/account/account.module');
      return m.AccountModule;
    }
  },
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
