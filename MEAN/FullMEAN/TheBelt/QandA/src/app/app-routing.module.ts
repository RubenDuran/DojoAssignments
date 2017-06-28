import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuestionsComponent } from './questions/questions.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { AnswerComponent } from './answer/answer.component';
import { NewAnswerComponent } from './new-answer/new-answer.component';

const routes: Routes = [
  {
    path: '',
    children: [],
    component: LoginComponent
},
{
  path: 'questions',
  children: [],
  component: QuestionsComponent
},
{
  path: 'newquestion',
  children: [],
  component: NewQuestionComponent
},
{
  path: 'answers/:id',
  children: [],
  component: AnswerComponent
},
{
  path: 'newanswer',
  children: [],
  component: NewAnswerComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
