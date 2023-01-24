import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  searchkey=new BehaviorSubject('')  

  getProducts(){
    // console.log( this.http.get('http://localhost:3000/getproducts'));
    
    return this.http.get('http://localhost:3000/getproducts')

  }
  addproduct(title:any,catagory:any,descreption:any,cost:any,Sprice:any,count:any,date:any){
    const body={


      title:title,
      category:catagory,
      description:descreption,
      cost:cost,
      Sprice:Sprice,
      quantity:count,
      expiry:date,

    }
    
    return this.http.post('http://localhost:3000/product',body)
  
  }
  deleteProduct(title:any){
    this.http.delete('http://localhost:3000/deleteproduct/'+title)
  }
}