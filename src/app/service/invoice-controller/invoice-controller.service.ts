import { Injectable } from '@angular/core';
import { Invoice } from 'src/app/model/invoice';
import { Purchase } from 'src/app/model/purchase';
import { User } from 'src/app/model/user';
import { environment } from 'src/environments/environment';
import { ProductControllerService } from '../product-controller/product-controller.service';
import { UserControllerService } from '../user-controller/user-controller.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvoiceControllerService {

  private listInvoices: Invoice[] = []
  private lastId = 0

  constructor(private http: HttpClient, private productControllerService: ProductControllerService, private userControllerService: UserControllerService) {
  }

  async getListInvoices(): Promise<Invoice[]> {
    var json: any = await this.http.get(`${environment.baseURL}/invoice/list/${this.userControllerService.getCurrentUser().getUsername()}`).toPromise();
    this.listInvoices = [];
    json.forEach((element: any) => {
      var listPurchases: Purchase[] = [];
      element.listPurchases.forEach((element2: any) => {
        var purchase: Purchase = new Purchase(element2.productId, element2.quantity);
        purchase.setId(element2.id);
        listPurchases.push(purchase);
      });
      var invoice: Invoice = new Invoice(element.id, element.userId, listPurchases, element.priceTotal);
      this.listInvoices.push(invoice);
    });
    return this.listInvoices;
  }

  addInvoice(username: string, listPurchases: Purchase[]) {
    let purchaseTotal: number = 0
    for (let purchase of listPurchases) {
      purchaseTotal += this.productControllerService.findProductById(purchase.getProductId()).getPrice() * purchase.getQuantity()
    }
    this.http.post(`${environment.baseURL}/invoice/create/${username}`, {purchaseTotal: purchaseTotal, listPurchases: listPurchases }).toPromise();
  }

  async findInvoicesByRangeDates(date1: Date, date2: Date) {
    let params = `${environment.baseURL}/invoice/list/${date1.getDate()}-${date1.getMonth() + 1}-${date1.getFullYear()}/${date2.getDate()}-${date2.getMonth() + 1}-${date2.getFullYear()}`;
    let json: any = await this.http.get(params).toPromise();
    this.listInvoices = [];
    json.forEach((element: any) => {
      var listPurchases: Purchase[] = [];
      element.listPurchases.forEach((element2: any) => {
        var purchase: Purchase = new Purchase(element2.productId, element2.quantity);
        purchase.setId(element2.id);
        listPurchases.push(purchase);
      });
      var invoice: Invoice = new Invoice(element.id, element.userId, listPurchases, element.priceTotal);
      this.listInvoices.push(invoice);
    });
    return this.listInvoices;
  }

  async findInvoicesByUsername(username: string): Promise<Invoice[]> {
    let json: any = await this.http.get(`${environment.baseURL}/invoice/list/${username}`).toPromise();
    this.listInvoices = [];
    json.forEach((element: any) => {
      var listPurchases: Purchase[] = [];
      element.listPurchases.forEach((element2: any) => {
        var purchase: Purchase = new Purchase(element2.productId, element2.quantity);
        purchase.setId(element2.id);
        listPurchases.push(purchase);
      });
      var invoice: Invoice = new Invoice(element.id, element.userId, listPurchases, element.priceTotal);
      this.listInvoices.push(invoice);
    });
    return this.listInvoices;
  }

  async findInvoicesByUserIdAndDateRange(username: string, date1: Date, date2: Date) {
    let params = `${environment.baseURL}/invoice/list/${date1.getDate()}-${date1.getMonth() + 1}-${date1.getFullYear()}/${date2.getDate()}-${date2.getMonth() + 1}-${date2.getFullYear()}/${username}`;
    let json: any = await this.http.get(params).toPromise();
    this.listInvoices = [];
    json.forEach((element: any) => {
      var listPurchases: Purchase[] = [];
      element.listPurchases.forEach((element2: any) => {
        var purchase: Purchase = new Purchase(element2.productId, element2.quantity);
        purchase.setId(element2.id);
        listPurchases.push(purchase);
      });
      var invoice: Invoice = new Invoice(element.id, element.userId, listPurchases, element.priceTotal);
      this.listInvoices.push(invoice);
    });
    return this.listInvoices;
  }

  removeInvoiceById(id: number) {
    this.http.delete(`${environment.baseURL}/invoice/delete/${id}`).toPromise();
  }

  removeInvoice(Invoice: Invoice) {
    this.removeInvoiceById(Invoice.getId());
  }
}
