import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestInterceptor } from './interceptors/request.interceptor';
import { CookieService } from 'ngx-cookie-service';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,    
    AppRoutingModule    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,  // Allow multiple interceptors
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true,  // Allow multiple interceptors
    },
    CookieService
  ],
  exports: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
