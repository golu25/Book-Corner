import { cartItems } from "./cartItems";

export class cart{
    item:cartItems[]= [];
    get totalprice():number
    {
        let totalprice=0;
        this.item.forEach(items=> {
            totalprice += items.Price;
        });
        return totalprice;
    }
}