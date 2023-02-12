import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Chart,registerables} from 'node_modules/chart.js';
Chart.register(...registerables);
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
  today:Date = new Date();
  date:any
  x:any;
  value:any
  constructor(private ds:DataService) { }
  @ViewChild("returnC")RC:any
   
 


  
  ngOnInit(): void {
    this.summary();
    this.RenderChart();

  }
  
  summary(){
    
    this.ds.getsummary().subscribe(
      (data:any)=>{
        this.orders_monthly=data.result.orders;
        this.earning_monthly=data.result.earning;
        this.average_purchase=data.result.avg_sales;
        this.returning_customers=data.result.returning_customers;
        this.RC.nativeElement.style.width=this.returning_customers+'%';
            
      })
      
      
  }
  RenderChart(){
    this.ds.graph_data().subscribe(
      (result:any)=>{            
      let data=result.data;
      console.log(data);
      
      
    const myChart =new Chart("profit", {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      datasets: [{
        label: 'Sales',
        data: [data.Jan, data.Feb,data.Mar,data.Apr,data.MayJun,data.Jul,data.Aug,data.Sep,data.Oct,data.Nov,data.Dec],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
})

this.ds.catagory_graph_data().subscribe(
  (result:any)=>{            
  let data=result.data;
  const myChart2 =new Chart("chart2", {
    type: 'doughnut',
    data: {
      labels: ['Grocery','Dairy','School','Cosmetics','Drinks/Snacks','Others',],
      datasets: [{
        label: '',
        data: [data.Grocery, data.Dairy, data.School, data.Cosmetics, data.DS, data.Other],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}) 

  }
}
