export class Book{
    id!:number;
    Price!:number;
    name!:string;
    favorite:boolean=false;
    stars!:number;
    tags?:string[];
    imageUrl!:string;
    Author!:string[];
}