import { Component, OnInit } from '@angular/core';
import { BidsService } from './../bids.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  bidder: object = {name: ""}
  constructor(private _bidsService: BidsService, private _router: Router) { }

  ngOnInit() {
  }
  login(){
  	console.log("in component login function");
  	this._bidsService.login(this.bidder)
  	.then((data)=>{
  		console.log(data);
  		this._router.navigate(['bids']);
  	})
  	.catch((data)=>console.log(data))
  }

}
