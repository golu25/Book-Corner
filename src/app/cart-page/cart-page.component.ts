import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../service/book/book-service.service';

import { CartService } from '../service/cart.service';
import { cart } from '../shared/models/cart';
import { cartItems } from '../shared/models/cartItems';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
cart!:cart;
  constructor(private cartService: CartService,private bookservice:BookServiceService) {
    let books=bookservice.getAll();
    cartService.addToCart(books[1]);
    cartService.addToCart(books[3]);
    cartService.addToCart(books[5]);
    
    this.setCart();
   }

  ngOnInit(): void {
  }
setCart(){
  this.cart=this.cartService.getCart();
}
removeFromCart(cartItme:cartItems){
  this.cartService.removeFromCart(cartItme.book.id);
  this.setCart();
}
changeQuantity(cartItem:cartItems,quantityInString:string){
const quantity =parseInt(quantityInString);
this.cartService.changeQuantity(cartItem.book.id,quantity);
this.setCart();
}
}