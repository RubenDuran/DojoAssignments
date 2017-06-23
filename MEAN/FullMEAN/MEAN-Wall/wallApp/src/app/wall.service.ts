import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class WallService {
  constructor(private _http: Http) { }
  login(newUser){
  	console.log("in service's login function");
  	return this._http.post('/api/users', newUser)
  	.map((response)=>response.json())
  	.toPromise()
  }
  createMessage(newMessage){
  	console.log("in service's newMessage function");
  	return this._http.post('/api/messages', newMessage)
  	.map((response)=>response.json())
  	.toPromise()
  }
  getMessages(){
  	console.log("in service's getCurrentMessages");
  	return this._http.get('/api/messages')
  	.map((response)=>response.json())
  	.toPromise()
  }
  getCurrentUser(){
  	console.log("in service's getCurrentUser");
  	return this._http.get('/api/current_user')
  	.map((response)=>response.json())
  	.toPromise()
  }
  createComment(newComment, messageId){
  	console.log("in service's getCurrentMessages");
  	return this._http.post('/api/comments/'+messageId, newComment)
  	.map((response)=>response.json())
  	.toPromise()
  }
}
