import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from '../Login/login/login.component';
import { HomeComponent } from '../Home/home/home.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    HeaderComponent,    
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,    
    FormsModule,
    ReactiveFormsModule,    
    HttpClientModule,
    LayoutRoutingModule    
  ]
})
export class LayoutModule { }
