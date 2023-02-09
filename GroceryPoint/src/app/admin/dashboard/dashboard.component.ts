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
    this.date=[(this.today.getFullYear()), ("0"+(this.today.getMonth()+1)), ("0"+this.today.getDate())].join('-') 
    this.summary();
    console.log(this.date);
    this.RenderChart();

  }
  load(event:any){
    console.log(this.date);
    
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
  const myChart2 =new Chart("chart2", {
    type: 'doughnut',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
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
  }
}
