import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { ReactiveService } from '../reactive.service';
@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {
item;
  constructor(private route:Router,private user:ReactiveService) {
   // this.item=JSON.parse(localStorage.getItem("data"));
   }
 
   backForm(){
     this.route.navigate(['/form'])
     
   }
  
 
  ngOnInit() {
    this.item=this.user.getData()
  }

}
