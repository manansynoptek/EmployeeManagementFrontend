import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { AdddepartmentComponent } from './adddepartment/adddepartment.component';
import { ListdepartmentComponent } from './listdepartment/listdepartment.component';


@NgModule({
  declarations: [
    AdddepartmentComponent,
    ListdepartmentComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule
  ]
})
export class DepartmentModule { }
