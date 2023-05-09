import { Book } from "./book";
export class cartItems{
    constructor(book:Book){
        this.book=book;

    }
book:Book;
quantity:number=1;
get Price():number{
    return this.book.Price *this.quantity;
}
}