import { Component, OnInit } from '@angular/core';
import { Purchase } from '../model/purchase';
import { User } from '../model/user';
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
  constructor(private userControllerService: UserControllerService, public productControllerService: ProductControllerService) 
  { 
    this.currentUser = userControllerService.getCurrentUser()
    if(this.currentUser != null)
    {
      this.listPurchases = this.currentUser.getShoppingCart()
    }
  }

  removePurchase(purchase: Purchase)
  {
    this.currentUser.removePurchase(purchase)
  }

  ngOnInit(): void 
  {

  }

}
