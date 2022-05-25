import { HttpClient } from '@angular/common/http';
import { Injectable, SecurityContext } from '@angular/core';
import { Product } from 'src/app/model/product';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ProductControllerService {
  private listProducts: Product[] = []
  private lastId = 0

  constructor(private http: HttpClient, private _sanitizer: DomSanitizer) {
  }

  async getListProducts(): Promise<Product[]> {
    var json: any = await this.http.get(`${environment.baseURL}/product/`).toPromise();
    this.listProducts = [];
    json.forEach((element: any) => {
      var imagePath = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + element.image));
      //debugger;
      var product: Product = new Product(element.id, element.name, + element.price, imagePath);
      this.listProducts.push(product);
    });
    return this.listProducts;
  }

  addProduct(name: string, price: number, image: string) {
    this.http.post(`${environment.baseURL}/product/create`, {name: name, price: price, image: image});
  }

  modProduct(product: Product, name: string, price: number) {
    this.listProducts.forEach(element => {
      if (element.getId() == product.getId()) {
        element.setName(name)
        element.setPrice(price)
      }
    });
  }

  deleteProduct(product: Product) {
    this.listProducts.splice(this.listProducts.indexOf(product), 1)
    this.listProducts.filter(item => item !== product)
    console.log(this.listProducts.length)
  }

  findProductById(id: number): Product {
    for (let product of this.listProducts) {
      if (product.getId() == id) {
        return product
      }
    }
    return null
  }

  findProductByName(name: string): Product {
    for (let product of this.listProducts) {
      if (product.getName() == name) {
        return product
      }
    }
    return null
  }

  removeProductByName(name: string) {
    let product: Product
    product = this.findProductByName(name)
    if (product != null)
      this.removeProduct(product)
  }

  removeProductById(id: number) {
    let product: Product
    product = this.findProductById(id)
    this.removeProduct(product)
  }

  removeProduct(product: Product) {
    if (product != null) {
      let index: number = this.listProducts.indexOf(product)
      this.listProducts.splice(index, 1)
    }
  }
}
