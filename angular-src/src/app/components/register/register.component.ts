import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private alertService: AlertService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    // Required fields
    if(!this.validateService.validateRegister(user)){
      this.alertService.danger('Please fill in all fields');
      return false;
    }

    // Required email
    if(!this.validateService.validateEmail(user.email)){
      this.alertService.danger('Please use a valid email');
      return false;
    }

    // Register user
    this.authService.registerUser(user).subscribe(data => {
      console.log('Here')
      if(data.success){
        this.alertService.success('You are now registered and can login');
        this.router.navigate(['/login']);
      } else{
        this.alertService.danger('Something went wrong');
        this.router.navigate(['/register']);
      }
    });
  }

}
