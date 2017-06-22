import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs';


@Injectable()
export class GitUsersService {

  constructor(private _http: Http) { }

  getInfo(user){

  	return this._http.get('https://api.github.com/users/'+user.username).map(response=>response.json()).toPromise();
  }
  addUser(userInfo){
  	// we need avatar_url, login, followers, public_repos
  	var postData = {
  		score: ((userInfo.followers*2)+userInfo.public_repos)*12,
  		imagePath: userInfo.avatar_url,
        username: userInfo.login,
  	}
  	return this._http.post('/users', postData).map(response=>response.json()).toPromise();
  }
  getAllInfo(){
  	return this._http.get('/users').map(response=>response.json()).toPromise();
  }

}
