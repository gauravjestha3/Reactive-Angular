import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReactiveformService {
getdata;
  constructor() { }
  getData(){
    return this.getdata

  }
setdata(inputdata){
  this.getdata=inputdata
}

  
}
