import { Component, OnInit } from '@angular/core';
import { HideService } from '../hide.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(public hides:HideService) { }

  ngOnInit(): void {
  }

}
