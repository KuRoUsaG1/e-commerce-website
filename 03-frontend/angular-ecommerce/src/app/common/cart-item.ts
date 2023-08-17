import { Product } from "./product";

export class CartItem {
    id: number;
    name: string;
    imageUrl: string;
    unitPrice: number;
    
    quantity: number;

    constructor(Product: Product) {
        this.id = Product.id;
        this.name = Product.name;
        this.imageUrl = Product.imageUrl;
        this.unitPrice = Product.unitPrice;

        this.quantity = 1;
    }
}
