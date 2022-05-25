import { Component, OnInit } from '@angular/core';
import { Invoice } from '../model/invoice';
import { User } from '../model/user';
import { InvoiceControllerService } from '../service/invoice-controller/invoice-controller.service';
import { ProductControllerService } from '../service/product-controller/product-controller.service';
import { UserControllerService } from '../service/user-controller/user-controller.service';

@Component({
  selector: 'app-user-invoices',
  templateUrl: './user-invoices.component.html',
  styleUrls: ['./user-invoices.component.css']
})
export class UserInvoicesComponent implements OnInit {

  listInvoices: Invoice[]
  currentUser: User
  constructor(private userController: UserControllerService, private invoiceController: InvoiceControllerService, public productController: ProductControllerService) {
    this.currentUser = this.userController.getCurrentUser()
    if (this.currentUser != null) {
      this.getInvoicesInLastMonth()
    }
  }

  getInvoices() {
    this.invoiceController.findInvoicesByUsername(this.currentUser.getUsername()).then(value => {
      this.listInvoices = value;
    });
  }

  getInvoicesInLastMonth() {
    let currentDate: Date = new Date();
    let monthAgoDate: Date = new Date();
    monthAgoDate.setDate(currentDate.getDate() - 30);
    this.invoiceController.findInvoicesByUserIdAndDateRange(this.currentUser.getUsername(), monthAgoDate, currentDate).then(value => {
      this.listInvoices = value;
    });
    }

  getInvoicesInDateRange(dateString1: string, dateString2: string) {
    let date1: Date = new Date(dateString1)
    let date2: Date = new Date(dateString2)
    this.invoiceController.findInvoicesByUserIdAndDateRange(this.currentUser.getUsername(), date1, date2).then(value => {
      this.listInvoices = value;
    });
  }

  getTotalInvoices() {
    let total: number = 0
    for (let invoice of this.listInvoices) {
      total += invoice.getPriceTotal()
    }
    return total
  }

  ngOnInit(): void {
  }

}
