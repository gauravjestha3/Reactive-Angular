import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {
item;
  constructor(private route:Router) {
    this.item=JSON.parse(localStorage.getItem("data"));
   }
 
   backForm(){
     this.route.navigate(['/form'])
     
   }
  
 
  ngOnInit() {
  }

}
