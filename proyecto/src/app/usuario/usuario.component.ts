import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserControllerService } from '../service/user-controller/user-controller.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(public userController: UserControllerService, public router: Router) { }

  ngOnInit(): void {
  }

  iflogin(): boolean {
    if (this.userController.getCurrentUser() != null) {
      return true;
    }
    return false;
  }
  logOutUser() {
    console.log(this.userController.getCurrentUser())
    if (!this.iflogin()) {
      console.log("logout perra1");
    }

    this.userController.logOut();

    if (!this.iflogin()) {
      console.log("logout perra2");
      this.ngOnInit();
      this.router.navigate(['']);
    }
  }
  gotoFacturas(){
    if(this.iflogin()){
      this.router.navigate(['/facturas']);
    }
  }
  gotoModUser(){
    if(this.iflogin()){
      this.router.navigate(['/modificarperfil']);
    }
  }
}
