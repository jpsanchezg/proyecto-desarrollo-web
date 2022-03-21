import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';import { ProductControllerService } from '../service/product-controller/product-controller.service';
import { UserControllerService } from '../service/user-controller/user-controller.service';
import { User } from '../model/user';
import { Product } from 'src/app/model/product';


@Component({
  selector: 'app-mod-product',
  templateUrl: './mod-product.component.html',
  styleUrls: ['./mod-product.component.css']
})
export class ModProductComponent implements OnInit {

  public quantity: number = 1
  public product: Product;
  constructor(private route: ActivatedRoute, private productController: ProductControllerService, private userController: UserControllerService,public router: Router) {
    this.product = this.productController.findProductById(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
  }


}
