import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/Forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { Player1Component } from './main/player1/player1.component';
import { Player2Component } from './main/player2/player2.component';
import { ResultComponent } from './result/result.component';
import { RankingComponent } from './ranking/ranking.component';
import { GitUsersService } from './git-users.service';
import { ResultsComponent } from './main/results/results.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Player1Component,
    Player2Component,
    ResultComponent,
    RankingComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
  ],
  providers: [ GitUsersService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
