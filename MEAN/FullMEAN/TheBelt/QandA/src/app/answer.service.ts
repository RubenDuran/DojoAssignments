import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class AnswerService {

  constructor(private _http: Http) { }

  login(newUser) {
    console.log("in service's login function", newUser);
    return this._http.post('/api/users', newUser)
      .map((response) => response.json())
      .toPromise()
  }
  logout() {
    console.log('temp logout');
    return this._http.get('/api/logout').map(response => response).toPromise();
  }

  addQuestion(newQuestion) {
    console.log('addQuestion Service', newQuestion);
    return this._http.post('/api/addQuestion', newQuestion).map(response => response.json()).toPromise();
  }

  getQuestions() {
    console.log('get Questions Service');
    return this._http.get('/api/getQuestions').map(response => response.json()).toPromise();
  }

  getQuestion(q_id) {
    console.log('get Question service ,', q_id);
    return this._http.get('/api/getQuestion/' + q_id).map(response => response.json()).toPromise();
  }

  getUser(){
      console.log('getting user (in service)');
      return this._http.get('/api/getUser').map(response => response.json()).toPromise();
  }

  addAnswer(newAnswer){
      console.log('addAnswer Service', newAnswer);
      return this._http.post('/api/addAnswer', newAnswer).map(response => response.json()).toPromise();
  }





  // restart() {
  //   console.log('temp restart');
  //   return this._http.get('/api/restart').map(response => response).toPromise();
  // }
  //
  // createBid(newBid) {
  //  	console.log("in service's createBid function", newBid);
  //  	return this._http.post('/api/bids', newBid)
  //     .map((response) => response.json())
  //     .toPromise()
  // }
  //
  // getBids(prod) {
  //  	console.log("in service's getbids", prod);
  //  	return this._http.post('/api/bids/all', prod)
  //     .map((response) => response.json())
  //     .toPromise()
  // }
  //
  // getBid(prod) {
  //  	console.log("in service's getbid", prod);
  //  	return this._http.post('/api/bids/one', prod)
  //     .map((response) => response.json())
  //     .toPromise()
  // }
  //
  // getName() {
  //   return this._http.get('/api/bids/name')
  //     .map((response) => response.json())
  //     .toPromise()
  // }

}
