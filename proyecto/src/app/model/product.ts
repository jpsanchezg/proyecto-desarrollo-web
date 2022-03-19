export class Product{
    
    private id: number
    private name: string
    private price: number
    private image: string

    constructor(id: number, name: string, price: number, image: string)
    {
        this.name = name
        this.price = price
        this.image = image
    }

    getId(): number
    {
        return this.id
    }

    getName(): string
    {
        return this.name
    }

    getPrice(): number
    {
        return this.price
    }

    getImage(): string
    {
        return this.image
    }

    setName(name: string) 
    {
        this.name = name
    }

    setPrice(price: number)
    {
        this.price = price
    }

    setImage(image: string)
    {
        this.image = image
    }
}