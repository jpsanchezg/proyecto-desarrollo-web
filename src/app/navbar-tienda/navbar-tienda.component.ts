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
      //this.router.navigate(['tienda']);
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
    }

    this.userController.logOut();

    if (!this.iflogin()) {
      this.ngOnInit();
      this.router.navigate(['']);
    }
  }

  haveproducts(): boolean {
    if (this.userController.getCurrentUser() != null) {
      if (this.userController.getCurrentUser().getShoppingCart().length > 0) {
        return true;
      }
    }
    return false;
  }
  agregarproducto() {
    this.router.navigate(['agregar-producto']);
  }
}
