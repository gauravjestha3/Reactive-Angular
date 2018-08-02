import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { BackComponent } from './back/back.component';
import {AppRoutingModule} from './/app-routing.module'
import {ReactiveFormsModule}from '@angular/forms';
import { ReactiveService } from './reactive.service';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    BackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ReactiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
