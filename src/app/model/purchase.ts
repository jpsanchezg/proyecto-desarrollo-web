export class Purchase
{
    private id: number;
    private productId: number;
    private quantity: number;

    constructor(productId: number, quantity: number)
    {
        this.productId = productId;
        this.quantity = quantity;
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

    getId(): number
    {
        return this.id;
    }

    setId(id: number)
    {
        this.id = id;
    }
}
