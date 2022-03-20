import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserControllerService } from '../service/user-controller/user-controller.service';

@Component({
  selector: 'app-navbar-tienda',
  templateUrl: './navbar-tienda.component.html',
  styleUrls: ['./navbar-tienda.component.css']
})
export class NavbarTiendaComponent implements OnInit {

  constructor(public userController: UserControllerService, public router: Router) { }

  ngOnInit(): void {
  }
  iflogin(): boolean {
    if (this.userController.getCurrentUser() != null) {
      return true;
    }
      return false;
  }
  ifAdmin(): boolean {
    if (this.userController.getCurrentUser() != null) {
      return this.userController.getCurrentUser().getIsAdmin();
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
}
