import { Component, OnInit } from '@angular/core';
import { CommonService } from './Services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'employeemgt';
  loggedInEmployeeName = '';
  constructor(private commonService: CommonService,
    private router: Router
  ) {
    if (this.commonService.getEmployeeDetail()) {
      this.loggedInEmployeeName = `Welcome, ${this.commonService.getEmployeeDetail()?.firstName} ${this.commonService.getEmployeeDetail()?.lastName}`
    }else{
      this.loggedInEmployeeName = '';
    }
  }
  ngOnInit(): void {
    
  }

  logout(): void {
    this.commonService.logOut();
    this.router.navigate(['/login']);
  }

}
