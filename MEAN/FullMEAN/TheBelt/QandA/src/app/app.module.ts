import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { QuestionsComponent } from './questions/questions.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { AnswerComponent } from './answer/answer.component';
import { NewAnswerComponent } from './new-answer/new-answer.component';

import { AnswerService } from './answer.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuestionsComponent,
    NewQuestionComponent,
    AnswerComponent,
    NewAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [AnswerService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
