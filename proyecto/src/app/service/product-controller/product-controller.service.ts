import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductControllerService {
  private listProducts: Product[] = []
  private lastId = 0

  constructor() {
    this.addProduct("Helado de Mandarina", 5000, "assets/images/products/tangerine.webp")
    this.addProduct("Helado de Vainilla", 5000, "assets/images/products/vanilla.webp")
    this.addProduct("Helado de Mandarina", 5000, "assets/images/products/tangerine.webp")
    this.addProduct("Helado de Vainilla", 5000, "assets/images/products/vanilla.webp")
    this.addProduct("Helado de Mandarina", 5000, "assets/images/products/tangerine.webp")
    this.addProduct("Helado de Vainilla", 5000, "assets/images/products/vanilla.webp")
    this.addProduct("Helado de Mandarina", 5000, "assets/images/products/tangerine.webp")
    this.addProduct("Helado de Vainilla", 5000, "assets/images/products/vanilla.webp")
    this.addProduct("Helado de Mandarina", 5000, "assets/images/products/tangerine.webp")
    this.addProduct("Helado de Vainilla", 5000, "assets/images/products/vanilla.webp")
  }

  getListProducts(): Product[] {
    return this.listProducts
  }

  addProduct(name: string, price: number, image: string) {
    this.listProducts.push(new Product(this.lastId, name, price, image))
    console.log(this.listProducts.length)
    this.lastId++
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
