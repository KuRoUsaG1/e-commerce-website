import { Address } from "./address";
import { Customer } from "./customer";
import { OrderItem } from "./order-item";

export class Order {
    totalQuantity: number;
    totalPrice: number;
    customer: Customer;
    shippingAddress: Address;
    billingAddress: Address;
    orderItems: OrderItem[];
}
