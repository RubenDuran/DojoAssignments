import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResultsComponent } from './results/results.component';
import { BidsComponent } from './bids/bids.component';
import { Prod1Component } from './bids/prod1/prod1.component';
import { Prod2Component } from './bids/prod2/prod2.component';
import { Prod3Component } from './bids/prod3/prod3.component';

import { BidsService } from './bids.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResultsComponent,
    BidsComponent,
    Prod1Component,
    Prod2Component,
    Prod3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [BidsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
