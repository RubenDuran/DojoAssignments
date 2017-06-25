import { Component, OnInit } from '@angular/core';
import { BidsService } from './../bids.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  bidder: object = { name: "" }
  errors: string[] = [];
  constructor(private _bidsService: BidsService, private _router: Router) { }

  ngOnInit() {
  }
  login() {
    console.log("in component login function");
    this._bidsService.login(this.bidder)
      .then((data) => {
        var arr = [];
        console.log(data);
        if (data.errors) {
          for (var key in data.errors) {
            arr.push(data.errors[key].message);
            this.errors = arr;
          }
        } else {
          console.log("login success");
          this._router.navigate(['bids']);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
}


  //  		this._router.navigate(['bids']);
  //  	})
  //  	.catch((data)=>console.log(data))
