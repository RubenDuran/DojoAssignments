import { Component, OnInit } from '@angular/core';
import { BidsService } from './../bids.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent implements OnInit {
  product1hasbid: boolean = false;
  product2hasbid: boolean = false;
  product3hasbid: boolean = false;


  constructor(private _bidsService: BidsService, private _router: Router) { }

  ngOnInit() {
  }
  logout() {
    this._bidsService.logout()
      .then(data => {
        this._router.navigate(['']);
      })
      .catch(err => {
        this._router.navigate(['']);
      });
  }


  receiveStatusP1(event) {
    console.log('in received status event', event)
    if (event === true) {
      this.product1hasbid = true;
    } else {
      this.product1hasbid = false;
    }


  }
  receiveStatusP2(event) {
    console.log('in received status event #2', event)
    if (event === true) {
      this.product2hasbid = true;
    } else {
      this.product2hasbid = false;
    }
  }
  receiveStatusP3(event) {
    if (event === true) {
      this.product3hasbid = true;
    } else {
      this.product3hasbid = false;
    }
  }
  endBid() {
    if (!this.product1hasbid || !this.product2hasbid || !this.product3hasbid) {
      alert("Cannot end the bid. One or more products do not have any bids yet.");
    } else {
      this._router.navigate(['results'])
    }
  }

}
