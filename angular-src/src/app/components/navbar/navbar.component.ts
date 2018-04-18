import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'
import { AlertService } from 'ngx-alerts';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
/*Plus all your other modules*/


export class SharedModule {}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private alertService: AlertService) { }

  ngOnInit() {
  }

  onLogoutClick(){
    this.authService.logout();
    this.alertService.success('You are logged out');
    this.router.navigate(['login']);
    return false;
  }

}
