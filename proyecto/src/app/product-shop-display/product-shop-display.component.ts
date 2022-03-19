import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductControllerService } from '../service/product-controller/product-controller.service';

@Component({
  selector: 'app-product-shop-display',
  templateUrl: './product-shop-display.component.html',
  styleUrls: ['./product-shop-display.component.css']
})
export class ProductShopDisplayComponent implements OnInit {

  public listProducts: Product[]
  constructor(private productControllerService: ProductControllerService) 
  {
    this.listProducts = productControllerService.getListProducts()
  }

  listProductsToMatrix(): Product[][]
  {
    let productMatrix: Product[][] = []
    for(let i = 0; i <= this.listProducts.length / 3; i++)
    {
      productMatrix.push([])
      for(let j = i * 3; j < (i * 3) + 3 && j < this.listProducts.length; j++)
      {
        productMatrix[i].push(this.listProducts[j])
      }
    }
    return productMatrix
  }

  ngOnInit(): void 
  {

  }

}
