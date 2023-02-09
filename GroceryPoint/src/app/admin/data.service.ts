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
  editproduct(title:any,catagory:any,descreption:any,cost:any,Sprice:any,count:any,date:any){
    const body={
      title:title,
      category:catagory,
      description:descreption,
      cost:cost,
      Sprice:Sprice,
      quantity:count,
      expiry:date,

    }
    console.log(body);
    
    return this.http.post('http://localhost:3000/editproduct',body)
  
  }
  deleteProduct(title:any){
    
    return this.http.delete('http://localhost:3000/deleteproduct/'+ title)
  }
  getOrders(){
    return this.http.get('http://localhost:3000/getorders')
  }
  getsummary(){
    return this.http.get('http://localhost:3000/getsummary')
  }
  graph_data(){
    return this.http.get('http://localhost:3000/graph_data')

  }
}
