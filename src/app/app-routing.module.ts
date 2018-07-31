import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FrontComponent } from './front/front.component';
import { BackComponent } from './back/back.component';


const routes: Routes = [
  { 
    path: '', 
    redirectTo:'form', 
    pathMatch: 'full' 
  },
  { 
    path: 'showData', 
    component:BackComponent
  },
  
  {
    path:'form',
    component:FrontComponent
  }

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class AppRoutingModule { }
