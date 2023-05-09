import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../service/book/book-service.service';
import { Book } from '../shared/models/book';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
books:Book[]=[]
  constructor(private bs:BookServiceService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params=>{
      if(params['searchItem'])
      this.books=this.bs.getAll().filter(book=>book.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else
      this.books=this.bs.getAll();
    })
   
  }

}