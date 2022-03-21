import { Optional } from "@angular/core"
import { ProductControllerService } from "../service/product-controller/product-controller.service"
import { Purchase } from "./purchase"

export class Invoice
{
    private id: number
    private userId: number
    private listPurchases: Purchase[] = []
    private priceTotal: number = 0
    private date: Date

    constructor(id: number, userId: number, listPurchases: Purchase[], priceTotal: number)
    {
        this.id = id
        this.userId = userId
        this.listPurchases = listPurchases
        this.date = new Date()
        this.priceTotal = priceTotal
    }

    getId()
    {
        return this.id
    }

    getUserId()
    {
        return this.userId
    }

    getListPurchases()
    {
        return this.listPurchases
    }

    getPriceTotal()
    {
        return this.priceTotal
    }

    getDate()
    {
        return this.date
    }
}