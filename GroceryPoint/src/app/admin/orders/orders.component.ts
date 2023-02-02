import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders:any;
  searchterm: any;
  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.ds.getOrders().subscribe(
      (data:any)=>{
        this.orders=data.orders;
        console.log(data.orders);
                
      })
  }
}
