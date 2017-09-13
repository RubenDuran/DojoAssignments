import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class SurveyService {

  constructor(private _http: Http) { }

  login(newUser) {
    console.log("in service's login function", newUser);
    return this._http.post('/api/users', newUser)
      .map((response) => response.json())
      .toPromise()
  }
  getUser() {
    console.log("in service's login function");
    return this._http.get('/api/user')
      .map((response) => response.json())
      .toPromise()
  }



  logout() {
    console.log('temp logout');
    return this._http.get('/api/logout').map(response => response.json()).toPromise();
  }

  addQuestion(newQuest) {
    console.log('in add question service', newQuest);
    return this._http.post('/api/question/create', newQuest).map(response => response.json()).toPromise();
  }

  addOption(newOptions) {
    console.log('in add question service', newOptions);
    return this._http.post('/api/option/create', newOptions).map(response => response.json()).toPromise();
  }

  getQuestions() {
    console.log('in service GETQUESTIONS');
    return this._http.get('/api/questions').map(response => response.json()).toPromise();
  }

  getQuestion(questionID) {
    console.log('in service GETQUESTION  only 1', questionID);
    return this._http.post('/api/question', questionID).map(response => response.json()).toPromise();
  }

  addVote(addVote) {
    console.log('in add question service', addVote);
    return this._http.post('/api/votes', addVote).map(response => response.json()).toPromise();
  }
  getOptions(options) {
    console.log('in add question service', options);
    return this._http.post('/api/options', options).map(response => response.json()).toPromise();
  }

}
