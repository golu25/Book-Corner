import { Injectable } from '@angular/core';
import { Book } from 'src/app/shared/models/book';
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor() { }
  getBookById(id:number):Book{
return this.getAll().find(book=> book.id==id)!;
  }
    getAll():Book[]{
    return[
      {
        id:1,
        name:'Best Classic',
        Price:230,
        favorite:true,
        Author:['spengler'],
        stars:4,
        imageUrl:'/assets/classic.jpg',
        tags:['Classic ','Cultures','Arts'],
        },
        {
        id:2,
        name:'Romance',
        Price:280,
        favorite:false,
        Author:['Colleen Hoover'],
        stars:3.3,
        imageUrl:'/assets/Romance.jpg',
        tags:['Atlas','Lily','Love'],
        },
        {
        id:3,
        name:'Indian History',
        Price:170,
        favorite:true,
        Author:['Dr.K.Reddy'],
        stars:4.5,
        imageUrl:'/assets/History.jpg',
        tags:['India','','Arts'],
        },
        {
        id:4,
        name:'Religious',
        Price:197,
        favorite:false,
        Author:['Sadhguru'],
        stars:4.5,
        imageUrl:'/assets/Religious.jpg',
        tags:['Peace','Calm','Silence'],
        },
        {
        id:5,
        name:'Travel',
        Price:120,
        favorite:false,
        Author:['Kath Stathers'],
        stars:4.5,
        imageUrl:'/assets/Travel.jpg',
        tags:['Explore','Turn','Around'],
        },
        {
        id:6,
        name:'Action',
        Price:296,
        favorite:false,
        Author:['Victor LaValle'],
        stars:4,
        imageUrl:'/assets/Action.jpg',
        tags:['Power','Effort','effect'],
        },
        {
        id:7,
        name:'Thriller',
        Price:234,
        favorite:false,
        Author:['spengler'],
        stars:4.2,
        imageUrl:'/assets/Thriller.jpg',
        tags:['Crime','Shock','Response'],
        },
        {
        id:8,
        name:'Science',
        Price:266,
        favorite:false,
        Author:['Dr.K.Reddy'],
        stars:4.5,
        imageUrl:'/assets/Science.jpg',
        tags:['Analyze','Calculate','Compare'],
        },
    ];
  }
}