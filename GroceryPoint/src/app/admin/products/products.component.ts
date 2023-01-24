import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  addproductsform=this.fb.group({
    title:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
    catagory:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
    cost:['',[Validators.required,Validators.pattern('[0-9]*')]],
    Sprice:['',[Validators.required,Validators.pattern('[0-9]*')]],
    count:['',[Validators.required,Validators.pattern('[0-9]*')]],
    discreption:[''],
    date:['']


  })
  products: any;
  searchterm: any;
  constructor(private fb:FormBuilder,private ds:DataService) { }

  ngOnInit(): void {
    this.getProducts();
    this.ds.searchkey.subscribe(
      (data:any)=>{
        this.searchterm=data
      }
    )
  }
  getProducts(){
    this.ds.getProducts().subscribe(
      (data:any)=>{
        this.products=data.products;
        
      })
  }
  addproduct(){
    var title=this.addproductsform.value.title;
    var catagory=this.addproductsform.value.catagory;
    var descreption=this.addproductsform.value.discreption;
    var Sprice=this.addproductsform.value.Sprice;
    var cost=this.addproductsform.value.cost;
    var count=this.addproductsform.value.count;
    var date=this.addproductsform.value.date;
  
    // if (this.addproductsform.valid) {
      this.ds.addproduct(title,catagory,descreption,cost,Sprice,count,date)
      .subscribe((result:any)=>{
        alert(result.message)
      },
      (result:any)=>{
        // alert (result.error.message);
      })
      this.getProducts();
      
    }
    // else{
      // alert('invalid form')
    // }
  // }
  editProduct(){

  }
  deleteProduct(product:any){    
    this.ds.deleteProduct(product.title);
    this.getProducts();

  }
  search(event:any){
    let searchkey=event.target.value
    this.ds.searchkey.next(searchkey)
    
  }
}
