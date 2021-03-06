import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UserControllerService } from '../service/user-controller/user-controller.service';

@Component({
  selector: 'app-login-user',

  templateUrl: './login-user.component.html',

  styleUrls: ['./login-user.component.css'],
})
export class LoginUserComponent implements OnInit {
  constructor(
    public userController: UserControllerService,
    public router: Router
  ) {}

  ngOnInit(): void {}

  registerUser(name: string, username: string, password: string) {
    this.userController.addUser(name, username, password).then(value =>{
      if(value)
      {
        this.userController.login(username, password);
        this.router.navigate(['/tienda']);
      }
    })
    
  }

  signInUser(username: string, password: string) {
    this.userController.login(username, password).then(value => {
      if (value) {
        if (this.userController.getCurrentUser().getIsAdmin()) {
          this.router.navigate(['/modificar-producto']);
        } else {
          this.router.navigate(['/tienda']);
        }
      }if(!value)
      {
        Swal.fire({
          title: 'Uppss algo paso',
          text: "La contraseña o el usuario son incorrectos",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'ok!'
        })
      }
    });
  }
}
