import { Product } from "./product";

export class Purchase
{
    private productId: number
    private quantity: number

    constructor(productId: number, quantity: number)
    {
        this.productId = productId
        this.quantity = quantity
    }

    getProductId(): number
    {
        return this.productId
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