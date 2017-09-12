import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayComponent } from './play/play.component';
import { AddQComponent } from './add-q/add-q.component';

import { TriviaService } from './trivia.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlayComponent,
    AddQComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
  ],
  providers: [TriviaService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
