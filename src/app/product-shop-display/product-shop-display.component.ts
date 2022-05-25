import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { Router } from '@angular/router';
import { ProductControllerService } from '../service/product-controller/product-controller.service';
import { UserControllerService } from '../service/user-controller/user-controller.service';

@Component({
  selector: 'app-product-shop-display',
  templateUrl: './product-shop-display.component.html',
  styleUrls: ['./product-shop-display.component.css']
})
export class ProductShopDisplayComponent implements OnInit {

  public listProducts: Product[] = [];
  constructor(private productControllerService: ProductControllerService, private usercontrol: UserControllerService, private router: Router) {
    this.productControllerService.getListProducts().then(value =>{
      this.listProducts = value;
    });
  }

  listProductsToMatrix(): Product[][] {
    let productMatrix: Product[][] = []
    for (let i = 0; i <= this.listProducts.length / 3; i++) {
      productMatrix.push([])
      for (let j = i * 3; j < (i * 3) + 3 && j < this.listProducts.length; j++) {
        productMatrix[i].push(this.listProducts[j])
      }
    }
    return productMatrix
  }

  goToDetail(id: number) {
    if (this.usercontrol.getCurrentUser() != null) {
      if (!this.usercontrol.getCurrentUser().getIsAdmin()) {
        this.router.navigate(['/tienda', id])
      } if (this.usercontrol.getCurrentUser().getIsAdmin()) {
        this.router.navigate(['/modificar-producto', id])
      }
      if(this.router.url.includes('/borrar-producto')){
        this.router.navigate(['/borrar-producto', id])
      }
    }else{
      this.router.navigate(['/tienda', id])
    }
  }

  ngOnInit(): void 
  {
    
  }


}
