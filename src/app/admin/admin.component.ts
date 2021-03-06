import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Invoice } from '../model/invoice';
import { UserControllerService } from '../service/user-controller/user-controller.service';
import { User } from '../model/user';
import { InvoiceControllerService } from '../service/invoice-controller/invoice-controller.service';
import { ProductControllerService } from '../service/product-controller/product-controller.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  listInvoices: Invoice[]
  currentUser: User[]
  user: User

  constructor(public userController: UserControllerService, public router: Router, private invoiceController: InvoiceControllerService, public productController: ProductControllerService) {
    //TODO set invoices last month
  }

  getInvoicesInLastMonth() {
    let currentDate: Date = new Date()
    let monthAgoDate: Date = new Date()
    monthAgoDate.setDate(currentDate.getDate() - 30)
  }

  getInvoicesInDateRange(dateString1: string, dateString2: string) {
    let date1: Date = new Date(dateString1)
    let date2: Date = new Date(dateString2)
  }

  getTotalInvoices() {
    let total: number = 0
    for (let invoice of this.listInvoices) {
      total += invoice.getPriceTotal()
    }
    return total
  }

  getInvoicesByUsername() {
    
  }

  ngOnInit(): void {
  }

  iflogin(): boolean {
    if (this.userController.getCurrentUser() != null) {
      return true;
    }
    return false;
  }
  
  logOutUser() {
    console.log(this.userController.getCurrentUser())
    if (!this.iflogin()) {
    }

    this.userController.logOut();

    if (!this.iflogin()) {
      this.ngOnInit();
      this.router.navigate(['']);
    }
  }

}
