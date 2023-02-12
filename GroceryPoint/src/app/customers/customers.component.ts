import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HideService } from '../hide.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  allproducts: any=[];
  searchterm: string='';
  constructor(public hides:HideService,private api:ApiService) { }

  ngOnInit(): void {
    this.hides.hide();
    this.api.getProducts().subscribe(
      (data:any)=>{
        this.allproducts=data.products
        
      }
    )
    this.api.searchkey.subscribe(
      (data:any)=>{
        this.searchterm=data
      }
    )
  }
  addtowishlist(product:any){
    this.api.addtowishlist(product).subscribe(
      (result:any)=>{
        alert(result.message)
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )
  }
  addcart(product:any){
    // this.cart.addcart(product)
  }


}