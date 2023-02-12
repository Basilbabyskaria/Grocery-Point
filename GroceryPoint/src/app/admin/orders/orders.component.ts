import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders:any;
  searchterm: any="";
  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.getOrders();
    this.ds.searchkey.subscribe(
      (data:any)=>{
        this.searchterm=data
      }
    )
  }
  search(event:any){
    let searchkey=event.target.value
    this.ds.searchkey.next(searchkey)
    
  }
  getOrders(){
    this.ds.getOrders().subscribe(
      (data:any)=>{
        this.orders=data.orders;
        console.log(this.orders[1].items[1]);
        // console.log((this.orders[1].items).length);
        
        // for(let item of (this.orders[1].items) ){
        // console.log(item);

        // }
                
      })
  }
}
