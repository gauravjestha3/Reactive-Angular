import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { Validators } from '@angular/forms'
import { RouterModule, Router } from '@angular/router'
import { ReactiveService } from '../reactive.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
rg: FormGroup
showpassword ='password';
showhidepassword ='password'; 
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
  
  onSubmit(){
    //localStorage.setItem("data",JSON.stringify(this.rg.value));
    this.user.check(this.rg.value)
   this.route.navigate(['/showData'])
  }
  constructor(private route:Router,private user:ReactiveService) {
    
  
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
formupdate:object
  ngOnInit() {
    
    if(this.route.url==='/form')
  {
    var formupdate=this.user.getData();
    this.rg.patchValue({
      firstname:formupdate.firstname,
      lastname:formupdate.lastname,
      gender:formupdate.gender,
      contactnum:formupdate.contactnum,
      empid:formupdate.empid,
      password:formupdate.password,
      confirmpassword:formupdate.confirmpassword

    })
  }
    
    }
    show(){
      if(this.showpassword==='password')
      {
        this.showpassword='text';
      }
      else{
        this.showpassword='password'
      }
    }
   
showhide(){
  if(this.showhidepassword==='password')
  {
    this.showhidepassword='text';
  }
  else{
    this.showhidepassword='password'
  }
}
    }
  





