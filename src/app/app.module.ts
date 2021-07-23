import { NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-Browser/animations'; 
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { AppRoutingModule } from './app-routing.module';
import{FormsModule} from '@angular/forms';


import { from } from 'rxjs';

const MaterialComponents = [ 
  MatButtonModule, MatButtonToggleModule, MatIconModule

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    
    

  ],


  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    MaterialComponents,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    BrowserAnimationsModule, 
  
    
  ],
  exports: [
    MaterialComponents,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
