import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class TriviaService {

  constructor(private _http: Http) { }

  login(newUser) {
    console.log("in service's login function", newUser);
    return this._http.post('/api/users', newUser).map(response => response.json()).toPromise()
  }

  getUser() {
    console.log("in service's login function");
    return this._http.get('/api/user').map((response) => response.json()).toPromise()
  }

  logout() {
    console.log('temp logout');
    return this._http.get('/api/logout').map(response => response.json()).toPromise();
  }
  addQuestion(newQuest) {
    console.log('in add question service', newQuest);
    return this._http.post('/api/question/create', newQuest).map(response => response.json()).toPromise();
  }
  getQuestions() {
    console.log('in service GETQUESTIONS');
    return this._http.get('/api/questions').map(response => response.json()).toPromise();
  }

  addAnswer(newAnswer) {
    console.log('in add question service', newAnswer);
    return this._http.post('/api/answer/create', newAnswer).map(response => response.json()).toPromise();
  }

  getAnswers(answers) {
    console.log('in get get get question service', answers);
    return this._http.post('/api/answers', answers).map(response => response.json()).toPromise();
  }

  checkAnswers(answers) {
    console.log('in chk chk chk question service', answers);
    return this._http.post('/api/checkAnswers', answers).map(response => response.json()).toPromise();
  }





}
