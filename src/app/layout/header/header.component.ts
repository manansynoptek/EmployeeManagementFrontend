import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'employeemgt';
  loggedInEmployeeName = '';
  constructor(private commonService: CommonService,
    private router: Router
  ) {    
    
  }
  ngOnInit(): void {
    if (this.commonService.getEmployeeDetail()) {
      this.loggedInEmployeeName = `Welcome, ${this.commonService.getEmployeeDetail()?.firstName} ${this.commonService.getEmployeeDetail()?.lastName}`
    } else {
      this.loggedInEmployeeName = '';
    }
  }

  logout(): void {
    this.commonService.logOut();
    this.router.navigate(['/login']);
  }
}
