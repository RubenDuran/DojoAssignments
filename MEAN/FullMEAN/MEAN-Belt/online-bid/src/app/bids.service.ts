import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class BidsService {

  constructor(private _http: Http) { }
  login(newBidder) {
   	console.log("in service's login function", newBidder);
   	return this._http.post('/api/bidders', newBidder)
      .map((response) => response.json())
      .toPromise()
  }
  logout() {
    console.log('temp logout');
    return this._http.get('/api/logout').map(response => response).toPromise();
  }

  restart() {
    console.log('temp restart');
    return this._http.get('/api/restart').map(response => response).toPromise();
  }

  createBid(newBid) {
   	console.log("in service's createBid function", newBid);
   	return this._http.post('/api/bids', newBid)
      .map((response) => response.json())
      .toPromise()
  }

  getBids(prod) {
   	console.log("in service's getbids", prod);
   	return this._http.post('/api/bids/all', prod)
      .map((response) => response.json())
      .toPromise()
  }

  getBid(prod) {
   	console.log("in service's getbid", prod);
   	return this._http.post('/api/bids/one', prod)
      .map((response) => response.json())
      .toPromise()
  }

  getName() {
    return this._http.get('/api/bids/name')
      .map((response) => response.json())
      .toPromise()
  }

}
