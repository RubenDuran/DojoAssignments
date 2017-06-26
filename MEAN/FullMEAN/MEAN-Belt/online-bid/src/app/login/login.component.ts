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
    this._bidsService.login(this.bidder)
      .then((data) => {
        var arr = [];
        if (data.errors) {
          for (var key in data.errors) {
            arr.push(data.errors[key].message);
            this.errors = arr;
          }
        } else {
          this._router.navigate(['bids']);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
}
