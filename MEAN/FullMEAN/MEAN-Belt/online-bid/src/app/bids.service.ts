import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class BidsService {

    constructor(private _http: Http) { }
   login(newBidder){
   	console.log("in service's login function", newBidder);
   	return this._http.post('/api/bidders', newBidder)
   	.map((response)=>response.json())
   	.toPromise()
   }



   createBid(newBid){
   	console.log("in service's newBid function",newBid);
   	return this._http.post('/api/bids', newBid)
   	.map((response)=>response.json())
   	.toPromise()
   }

   getName(){
       return this._http.get('/api/bids/name')
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
