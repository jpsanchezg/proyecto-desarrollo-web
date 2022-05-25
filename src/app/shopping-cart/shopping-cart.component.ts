import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { InvoiceControllerService } from '../service/invoice-controller/invoice-controller.service';
import { ProductControllerService } from '../service/product-controller/product-controller.service';
import { UserControllerService } from '../service/user-controller/user-controller.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public currentUser: User
  constructor(private userController: UserControllerService, public productController: ProductControllerService, private invoiceController: InvoiceControllerService) 
  { 
    this.currentUser = userController.getCurrentUser()
  }

  getCartSubtotal(): number
  {
    let subtotal: number = 0
    for (let purchase of this.currentUser.getShoppingCart())
    {
      subtotal += this.productController.findProductById(purchase.getProductId()).getPrice() * purchase.getQuantity()
    }
    return subtotal
  }

  buyCart()
  {
    if(this.currentUser.getShoppingCart().length != 0)
    {
      this.invoiceController.addInvoice(this.currentUser.getUsername(), this.currentUser.getShoppingCart());
      this.currentUser.removeAllPruchases();
      this.userController.modUser("", this.currentUser.getUsername(), "", this.currentUser.getShoppingCart());
      
    }
  }

  ngOnInit(): void {
  }

}
