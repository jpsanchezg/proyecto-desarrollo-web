import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; import { ProductControllerService } from '../service/product-controller/product-controller.service';
import { UserControllerService } from '../service/user-controller/user-controller.service';
import { User } from '../model/user';
import { Product } from 'src/app/model/product';


@Component({
  selector: 'app-mod-product-detail',
  templateUrl: './mod-product-detail.component.html',
  styleUrls: ['./mod-product-detail.component.css']
})
export class ModProductDetailComponent implements OnInit {

  public quantity: number = 1
  public product: Product;
  public price: number
  constructor(private route: ActivatedRoute, private productController: ProductControllerService, private userController: UserControllerService, public router: Router) {
    this.product = this.productController.findProductById(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
  }

  modProduct(name: string, id: number) {
    if (this.productController.findProductById(id) != null) {
      if (name != "") {
        this.productController.modProduct(this.productController.findProductById(id), name, this.price)
      } if (name == "") {
        this.productController.modProduct(this.productController.findProductById(id), this.productController.findProductById(id).getName(), this.price)
      }
      alert("Producto modificado")
      this.router.navigate(['modificar-producto']);
    }
  }
}
