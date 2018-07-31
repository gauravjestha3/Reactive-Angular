import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import {Validators} from '@angular/forms'
@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
rg: FormGroup
 
 check:boolean=false;
 checkpassword(){
   if(this.rg.value.password!=this.rg.value.confirmpassword)
   {
     console.log("incorrect password")
      this.check=false;
   }
   else{
     console.log("Correct PAssword")
     this.check=true;
   }
  }
  storedata(){
    localStorage.setItem("data",JSON.stringify(this.rg.value));
  }
  constructor() {
    this.rg=new FormGroup({
      firstname: new FormControl('',[
        Validators.required,
        Validators.pattern("[a-zA-Z ]+")]),  
        lastname: new FormControl('',[ 
          Validators.required,
          Validators.pattern("[a-zA-Z ]*")
          ]),
      
          gender: new FormControl('',[
           Validators.required,
            Validators.pattern("Male|Female|m|f"),
           
          ]),
      
          contactnum: new FormControl('',[
            Validators.required,
            Validators.maxLength(10),
            Validators.pattern("[0-9]+")
           
          ]),
          empid:new FormControl('',[
            Validators.required,
            Validators.pattern("[0-9]+"),
            Validators.maxLength(4),
          ]),
          password:new FormControl('',[
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(16),
            Validators.pattern('((?=.*[0-9])(?=.*[a-z])(?=.*[$@$!%*?&()_+={};;"|,.<>]).{0,16})')]),
           
           
      
            
          confirmpassword:new FormControl('',[
          Validators.required,
        
          Validators.maxLength(16),
          Validators.pattern('((?=.*[0-9])(?=.*[a-z])(?=.*[$@$!%*?&()_+={};;"|,.<>]).{0,16})')]),
             
    });
   }

  ngOnInit() {
  }

}



