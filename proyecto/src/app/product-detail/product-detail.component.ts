import { Product } from 'src/app/model/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductControllerService } from '../service/product-controller/product-controller.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private id: number;
  private product: Product;
  constructor(private route: ActivatedRoute,private productController: ProductControllerService) {
    this.product = this.productController.findProductById(this.route.snapshot.params['id']);
    console.log(this.product.getName());
  }

  ngOnInit(): void {
  }

}
