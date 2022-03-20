import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserControllerService } from '../service/user-controller/user-controller.service';

@Component({
  selector: 'app-login-user',

  templateUrl: './login-user.component.html',

  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(public userController: UserControllerService,public router: Router) { }

  ngOnInit(): void {
  }
  registerUser(name: string, email: string, password: string)
  {
    this.userController.addUser(name, email, password)
    this.userController.setCurrentUser(name)
    this.router.navigate(['/tienda']);
  }

  signInUser(name: string, password: string){
    if(this.userController.findUserByName(name) != null)
    {
      console.log("user found")
      console.log(this.userController.findUserByName(name).getPassword() + " " + password)
      if(this.userController.findUserByName(name).getPassword() == password)
      {
        this.userController.setCurrentUser(name)
        this.router.navigate(['/tienda']);
        console.log("User signed in")
      }
    }else{
      console.log("User not found")
    }
  }

}
