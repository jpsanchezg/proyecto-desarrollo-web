import { Product } from "./product";

export class Purchase
{
    private product: Product
    private quantity: number

    constructor(product: Product, quantity: number)
    {
        this.product = product
        this.quantity = quantity
    }

    getProduct(): Product
    {
        return this.product
    }

    getQuantity(): number
    {
        return this.quantity
    }

    setQuantity(quantity: number)
    {
        this.quantity = quantity
    }
}