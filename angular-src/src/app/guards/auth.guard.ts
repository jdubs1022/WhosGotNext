// The purpose of guards is to prevent content such as the dashboard and profile
// pages from being accessed by people who are not logged in!

import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService:AuthService, private router:Router){

    }

    // Redirects user to login page if they try to access a restricted page
    // while logged out
    canActivate(){
        if(this.authService.loggedIn()){
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
