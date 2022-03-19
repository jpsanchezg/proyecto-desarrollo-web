import { Product } from "./product"
import { Purchase } from "./purchase"

export class User
{
    public id: number
    public email: string
    public name: string
    public password: string
    public shoppingCart: Purchase[] = []

    constructor(id: number, name: string, email: string, password: string)
    {
        this.id = id
        this.name = name
        this.email = email
        this.password = password
    }

    getId(): number
    {
        return this.id
    }

    getEmail(): string
    {
        return this.email
    }

    getName(): string
    {
        return this.name
    }

    getPassword(): string
    {
        return this.password
    }

    getShoppingCart(): Purchase[]
    {
        return this.shoppingCart
    }

    setEmail(email: string)
    {
        this.email = email
    }

    setName(name: string)
    {
        this.name = name
    }

    setPassword(password: string)
    {
        this.password = password
    }

    addPurchase(product: Product, quantity: number)
    {
        for(let purchase of this.shoppingCart)
        {
            if(purchase.getProduct().getId() == product.getId())
            {
                purchase.setQuantity(purchase.getQuantity() + quantity)
            }
            return
        }
        this.shoppingCart.push(new Purchase(product, quantity))
    }

    removePurchase(purchase: Purchase)
    {
        let index: number = this.shoppingCart.indexOf(purchase)
        this.shoppingCart.splice(index, 1)
    }
}