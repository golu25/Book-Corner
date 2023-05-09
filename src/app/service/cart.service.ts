import { Injectable } from '@angular/core';
import { Book } from '../shared/models/book';
import { cart } from '../shared/models/cart';
import { cartItems } from '../shared/models/cartItems';
// src\app\shared\models\cartItems.ts

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
private cart:cart=new cart();
addToCart(book:Book):void{
  let cartItem=this.cart.item.find(item=>item.book.id===book.id)
  if(cartItem){
    this.changeQuantity(book.id,cartItem.quantity +1)
    return;
  }
  this.cart.item.push(new cartItems(book));
}
removeFromCart(bookId:number):void{
  this.cart.item=this.cart.item.filter(item=>item.book.id!=bookId)
}
changeQuantity(quantity:number,bookId:number){
  let cartItems=this.cart.item.find(item=>item.book.id===bookId);
if(!cartItems)

return;
cartItems.quantity=quantity;
}
getCart():cart{
  return this.cart;
}
  
}