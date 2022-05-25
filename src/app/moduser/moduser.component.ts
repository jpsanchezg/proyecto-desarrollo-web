import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserControllerService } from '../service/user-controller/user-controller.service';

@Component({
  selector: 'app-moduser',
  templateUrl: './moduser.component.html',
  styleUrls: ['./moduser.component.css']
})
export class ModuserComponent implements OnInit {

  constructor(public userController: UserControllerService,public router: Router) { }

  ngOnInit(): void {
  }

  modUser(name: string, email: string, newPassword: string){
    var user = this.userController.getUserByUsername(this.userController.getCurrentUser().getUsername()).then(value => {
      if(value != null)
      {
       console.log("user found")
       this.userController.modUser(name, email, newPassword, [])
       this.router.navigate(['/usuario']);
       console.log("User modified")
      }
    });
  }

}
