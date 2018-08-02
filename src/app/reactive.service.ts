import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReactiveService {

  constructor() { }
  data;

  check(str)
  {
    console.log("service",str)
    this.data=str;
    console.log(this.data);
  }
  getData(){
    return this.data
  }
}
