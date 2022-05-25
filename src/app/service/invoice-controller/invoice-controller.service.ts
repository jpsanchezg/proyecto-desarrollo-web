import { Injectable } from '@angular/core';
import { Invoice } from 'src/app/model/invoice';
import { Purchase } from 'src/app/model/purchase';
import { ProductControllerService } from '../product-controller/product-controller.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceControllerService {

  private listInvoices: Invoice[] = []
  private lastId = 0

  constructor(private productControllerService: ProductControllerService)
  {
    let listPurchases: Purchase[] = []
    listPurchases.push(new Purchase(0, 5))
    listPurchases.push(new Purchase(5, 3))
    this.addInvoice(1, listPurchases)
    listPurchases = []
    listPurchases.push(new Purchase(0, 2))
    listPurchases.push(new Purchase(5, 9))
    this.addInvoice(1, listPurchases)
    listPurchases.push(new Purchase(5, 9))
    listPurchases.push(new Purchase(2, 9))
    listPurchases.push(new Purchase(2, 9))
    this.addInvoice(2, listPurchases)
  }

  getListInvoices(): Invoice[]
  {
    return this.listInvoices
  }

  addInvoice(userId: number, listPurchases: Purchase[])
  {
    let purchaseTotal: number = 0
    for(let purchase of listPurchases)
    {
      purchaseTotal += this.productControllerService.findProductById(purchase.getProductId()).getPrice() * purchase.getQuantity()
    }
    this.listInvoices.push(new Invoice(this.lastId, userId, listPurchases, purchaseTotal))
    this.lastId++
  }

  findInvoiceById(id: number): Invoice
  {
    for (let invoice of this.listInvoices)
    {
      if(invoice.getId() == id)
      {
        return invoice
      }
    }
    return null
  }

  findInvoicesByRangeDates(date1: Date, date2: Date): Invoice[]
  {
    let invoices: Invoice[] = []
    for (let invoice of this.listInvoices)
    {
      if(invoice.getDate() >= date1 && invoice.getDate() <= date2)
      {
        invoices.push(invoice)
      }
    }
    return invoices
  }

  findInvoicesByUserId(userId: number): Invoice[]
  {
    let invoices: Invoice[] = []
    for (let invoice of this.listInvoices)
    {
      if(invoice.getUserId() == userId)
      {
        invoices.push(invoice)
      }
    }
    return invoices
  }

  findInvoicesByUserIdAndDateRange(userId: number, date1: Date, date2: Date)
  {
    let invoices: Invoice[] = []

    for (let invoice of this.findInvoicesByRangeDates(date1, date2))
    {
      if (invoice.getUserId() == userId)
      {
        invoices.push(invoice)
      }
    }
    return invoices
  }

  removeInvoiceById(id: number)
  {
    let Invoice: Invoice
    Invoice = this.findInvoiceById(id)
    this.removeInvoice(Invoice)
  }

  removeInvoice(Invoice: Invoice)
  {
    if(Invoice != null)
    {
      let index: number = this.listInvoices.indexOf(Invoice)
      this.listInvoices.splice(index, 1)
    }
  }
}
