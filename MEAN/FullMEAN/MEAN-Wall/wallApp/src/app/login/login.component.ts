import { Component, OnInit } from '@angular/core';
import { WallService } from './../wall.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: object = {name: ""}
  constructor(private _wallService: WallService, private _router: Router) { }

  ngOnInit() {
  }
  login(){
  	console.log("in component login function");
  	this._wallService.login(this.user)
  	.then((data)=>{
  		console.log(data);
  		this._router.navigate(['wall']);
  	})
  	.catch((data)=>console.log(data))
  }

}
