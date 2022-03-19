import { Component, OnInit } from '@angular/core';
import { Purchase } from '../model/purchase';
import { UserControllerService } from '../service/user-controller/user-controller.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  public listPurchases: Purchase[] = []
  constructor(private userControllerService: UserControllerService) 
  { 
    if(userControllerService.getCurrentUser() != null)
    {
      this.listPurchases = userControllerService.getCurrentUser().getShoppingCart()
    }
  }

  ngOnInit(): void 
  {

  }

}
