import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HumanComponent } from './human/human.component';
import { SaiyanComponent } from './saiyan/saiyan.component';
import { SupersaiyanComponent } from './supersaiyan/supersaiyan.component';
import { Supersaiyan2Component } from './supersaiyan2/supersaiyan2.component';
import { Supersaiyan3Component } from './supersaiyan3/supersaiyan3.component';
import { Supersaiyan4Component } from './supersaiyan4/supersaiyan4.component';

@NgModule({
  declarations: [
    AppComponent,
    HumanComponent,
    SaiyanComponent,
    SupersaiyanComponent,
    Supersaiyan2Component,
    Supersaiyan3Component,
    Supersaiyan4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
