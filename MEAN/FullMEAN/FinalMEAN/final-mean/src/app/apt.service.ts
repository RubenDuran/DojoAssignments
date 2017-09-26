import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class AptService {

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

  getUser(){
      console.log('getting user (in service)');
      return this._http.get('/api/user').map(response => response.json()).toPromise();
  }








}
