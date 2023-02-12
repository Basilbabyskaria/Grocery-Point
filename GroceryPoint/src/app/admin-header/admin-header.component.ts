import { Component, OnInit } from '@angular/core';
import { DataService } from '../admin/data.service';
import { HideService } from '../hide.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private ds:DataService,public hide:HideService) { }

  ngOnInit(): void {
    this.getalerlt_expiry();
  }
  alert:any;
  alert_count:any;
  getalerlt_expiry(){
    this.ds.getalerlt_expiry().subscribe(
      (data:any)=>{
        this.alert_count=data.result.length;
        
        this.alert=data.result;
        
      })
  }
  
}
