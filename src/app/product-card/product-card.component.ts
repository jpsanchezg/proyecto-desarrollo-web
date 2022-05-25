import { Component, OnInit } from '@angular/core';
import { Purchase } from '../model/purchase';
import { User } from '../model/user';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { ProductControllerService } from '../service/product-controller/product-controller.service';
import { UserControllerService } from '../service/user-controller/user-controller.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  public listPurchases: Purchase[] = []
  public currentUser: User
  constructor(private userControllerService: UserControllerService, public productControllerService: ProductControllerService, private router: Router) {
    this.currentUser = userControllerService.getCurrentUser()
    if (this.currentUser != null) {
      this.listPurchases = this.currentUser.getShoppingCart()
    }
  }

  removePurchase(purchase: Purchase) {
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar producto!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Borrado!',
          'Tu producto ha sido borrado.',
          'success'
        )
        this.currentUser.removePurchase(purchase)
        if (this.currentUser.getShoppingCart().length == 0) {
          this.router.navigate(['tienda'])
        }
      }
      if (!result.isConfirmed) {
        this.router.navigate(['carrito']);
      }
    })

  }

  ngOnInit(): void {

  }

}
