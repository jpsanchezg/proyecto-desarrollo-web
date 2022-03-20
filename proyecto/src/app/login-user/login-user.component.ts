import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { UserControllerService } from '../service/user-controller/user-controller.service';

@Component({
  selector: 'app-login-user',

  templateUrl: './login-user.component.html',

  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(public userController: UserControllerService) { }

  ngOnInit(): void {
  }
  registerUser(name: string, email: string, password: string)
  {
    this.userController.addUser(name, email, password)
    this.userController.setCurrentUser(name)
  }

  signInUser(name: string, password: string){
    if(this.userController.findUserByName(name) != null)
    {
      console.log("user found")
      console.log(this.userController.findUserByName(name).getPassword() + " " + password)
      if(this.userController.findUserByName(name).getPassword() == password)
      {
        this.userController.setCurrentUser(name)

        console.log("User signed in")
      }
    }else{
      console.log("User not found")
    }

  }

}
