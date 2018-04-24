// This file performs simple form validation

import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    // Returns false if any of the fields in the "register.component.html" page is undefined
    if(user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined){
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    // Makes sure that the value entered by the user is actually an email by using Regular Expressions (RE)
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validateCreate(game) {
    // Returns false if any of the fields in the "create.component.html" page is undefined
    if (game.title == undefined || game.sport == undefined || game.date == undefined || game.duration == undefined
    || game.startTime == undefined || game.latitude == undefined || game.longitude == undefined) {
      return false;
    } else {
      return true;
    }
  }

}
