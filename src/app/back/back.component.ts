import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {
item;
  constructor() {
    this.item=JSON.parse(localStorage.getItem("data"));
   }

  ngOnInit() {
  }

}
