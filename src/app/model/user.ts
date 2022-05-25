import { Product } from "./product"
import { Purchase } from "./purchase"

export class User
{
    private username: string
    private name: string
    private isAdmin: boolean
    private shoppingCart: Purchase[] = []

    constructor()
    {
    }

    getUsername(): string
    {
        return this.username
    }

    getName(): string
    {
        return this.name
    }

    getShoppingCart(): Purchase[]
    {
        return this.shoppingCart
    }
    getIsAdmin(): boolean
    {
        return this.isAdmin
    }

    setIsAdmin(isAdmin: boolean)
    {
        this.isAdmin = isAdmin
    }

    setUsername(username: string)
    {
        this.username = username
    }

    setName(name: string)
    {
        this.name = name
    }

    addPurchase(productId: number, quantity: number)
    {
        for(let purchase of this.shoppingCart)
        {
            if(purchase.getProductId() == productId)
            {
                purchase.setQuantity(purchase.getQuantity() + quantity)
                return
            }
        }
        this.shoppingCart.push(new Purchase(productId, quantity))
    }

    addPurchaseInstance(purchase: Purchase)
    {
        for(let purchase of this.shoppingCart)
        {
            if(purchase.getProductId() == purchase.getProductId())
            {
                purchase.setQuantity(purchase.getQuantity() + purchase.getQuantity())
                return
            }
        }
        this.shoppingCart.push(purchase)
    }

    removePurchase(purchase: Purchase)
    {
        let index: number = this.shoppingCart.indexOf(purchase)
        this.shoppingCart.splice(index, 1)
    }

    removeAllPruchases()
    {
        this.shoppingCart = []
    }
}
