import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProductControllerService } from '../service/product-controller/product-controller.service';
import { UserControllerService } from '../service/user-controller/user-controller.service';
import { User } from '../model/user';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public quantity: number = 1
  public product: Product;
  constructor(private route: ActivatedRoute, private productController: ProductControllerService, private userController: UserControllerService,public router: Router) {
    this.product = this.productController.findProductById(this.route.snapshot.params['id']);
  }

  addToCart()
  {
    let currentUser: User
    currentUser = this.userController.getCurrentUser()
    if(currentUser != null)
    {
      currentUser.addPurchase(this.product.getId(), this.quantity)
    }
    if(currentUser == null){
      alert("No has iniciado sesion")
      this.router.navigate(['login']);
    }
  }
  ifMod(){

  }

  ngOnInit(): void {
  }

}
