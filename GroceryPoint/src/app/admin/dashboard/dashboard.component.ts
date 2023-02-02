import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  orders_monthly:any;
  earning_monthly:any;
  returning_customers:any;
  average_purchase:any;

  constructor(private ds:DataService) { }

  ngOnInit(): void {
    

  }
  summaary(){
    this.ds.getsummary().subscribe(
      (data:any)=>{
                
      })
    this.orders_monthly
    this.earning_monthly
    this.returning_customers
    this.average_purchase
  }
}
