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
  editproductsform=this.fb.group({
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
        console.log(this.products[0]);
        
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
        this.getProducts();

      })
      
    }
    trackByFn(i: number) { 
      return i
    }
    current_field:any;
  editProduct(id:any){
    this.current_field=this.products[id]
    var title=this.current_field.title;
    console.log(title);
    
    var catagory=this.editproductsform.value.catagory;
    var descreption=this.editproductsform.value.discreption;
    var Sprice=this.editproductsform.value.Sprice;
    var cost=this.editproductsform.value.cost;
    var count=this.editproductsform.value.count;
    var date=this.editproductsform.value.date;
  
    // if (this.addproductsform.valid) {
      this.ds.editproduct(title,catagory,descreption,cost,Sprice,count,date)
      .subscribe((result:any)=>{
        alert(result.message)
        this.getProducts();

      })
  }
  deleteProduct(product:any){    
    this.ds.deleteProduct(product.title).subscribe(
      (result:any)=>{
        this.getProducts();

      }
    )
    this.getProducts();
    console.log(product.title);
    

  }
  search(event:any){
    let searchkey=event.target.value
    this.ds.searchkey.next(searchkey)
    
  }
}
