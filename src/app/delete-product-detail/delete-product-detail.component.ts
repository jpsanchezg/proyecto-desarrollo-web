import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; import { ProductControllerService } from '../service/product-controller/product-controller.service';
import { UserControllerService } from '../service/user-controller/user-controller.service';
import { User } from '../model/user';
import { Product } from 'src/app/model/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-product-detail',
  templateUrl: './delete-product-detail.component.html',
  styleUrls: ['./delete-product-detail.component.css']
})
export class DeleteProductDetailComponent implements OnInit {

  public quantity: number = 1
  public product: Product;
  public price: number
  constructor(private route: ActivatedRoute, private productController: ProductControllerService, private userController: UserControllerService, public router: Router) {
    this.product = this.productController.findProductById(this.route.snapshot.params['id']);
  }
  ngOnInit(): void {
  }

  deleteProduct(id: number) {
    if (this.productController.findProductById(id) != null) {
      Swal.fire({
        title: 'Estas seguro?',
        text: "Esto no se puede revertir despues!",
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
          this.productController.deleteProduct(this.productController.findProductById(id))
          this.router.navigate(['borrar-producto']);
        }
        if (!result.isConfirmed) {
          this.router.navigate(['borrar-producto']);
        }
      })
    }
  }

}
