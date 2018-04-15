import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AlertService } from 'ngx-alerts';

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

  constructor(private validateService: ValidateService, private alertService: AlertService) { }

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
  }

}
