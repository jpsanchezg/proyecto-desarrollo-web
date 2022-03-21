import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductControllerService } from '../service/product-controller/product-controller.service';
import { UserControllerService } from '../service/user-controller/user-controller.service';
import { User } from '../model/user';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productController: ProductControllerService, private userController: UserControllerService, public router: Router) {

  }

  ngOnInit(): void {
  }
  file: any;
  public quantity: number = 1;

  addImage(event: any) {
    this.file = event.target.files[0];
    console.log(this.file.name);
  }
  addProduct(nameice: string) {
    console.log(this.quantity);
    console.log("agregando el producto");
    this.productController.addProduct(nameice, this.quantity, "prueba")
    this.router.navigate(['admin']);
  }
}
