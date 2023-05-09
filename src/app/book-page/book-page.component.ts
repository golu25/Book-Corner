import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookServiceService } from '../service/book/book-service.service';
import { CartService } from '../service/cart.service';
import { Book } from '../shared/models/book';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
book!:Book
  constructor(private activatedRoute:ActivatedRoute,
    private bookservice:BookServiceService,private cartService:CartService,private router:Router) {
      activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.book=bookservice.getBookById(params['id'])
    })}

  ngOnInit(): void {
  }
addToCart(){
  this.cartService.addToCart(this.book);
  this.router.navigateByUrl('/cart-page')
}
}