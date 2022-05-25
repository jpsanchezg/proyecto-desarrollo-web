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
    this.getListProducts();
  }

  async getListProducts(): Promise<Product[]> {
    var json: any = await this.http.get(`${environment.baseURL}/product/`).toPromise();
    this.listProducts = [];
    json.forEach((element: any) => {
      var imagePath = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + element.image));
      var product: Product = new Product(element.id, element.name, + element.price, imagePath);
      this.listProducts.push(product);
    });
    return this.listProducts;
  }

  addProduct(name: string, price: number, image: string) {
    this.http.post(`${environment.baseURL}/product/create`, { name: name, price: price, image: image });
    this.getListProducts();
  }

  modProduct(product: Product, name: string, price: number) {
    this.http.post(`${environment.baseURL}/product/update`, { name: name, price: price, id: product.getId() });
    this.getListProducts();
  }

  deleteProduct(product: Product) {
    this.http.delete(`${environment.baseURL}/product/delete/${product.getId()}`);
    this.getListProducts();
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
        return product;
      }
    }
    return null;
  }

  removeProductByName(name: string) {
    let product: Product;
    product = this.findProductByName(name);
    if (product != null)
      this.removeProductById(product.getId());
  }

  removeProductById(id: number) {
    this.http.delete(`${environment.baseURL}/product/delete/${id}`).toPromise();
  }

  removeProduct(product: Product) {
    this.removeProductById(product.getId());
  }
}
