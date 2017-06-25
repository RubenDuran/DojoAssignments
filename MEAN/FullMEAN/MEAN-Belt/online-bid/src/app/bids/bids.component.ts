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

  product1bids: any = [];
  product2bids: any = [];
  product3bids: any = [];


  constructor(private _bidsService: BidsService, private _router: Router) { }

  ngOnInit() {
  }
  logout() {
    this._bidsService.logout()
      .then(data => {
        console.log("Logging out to home page");
        this._router.navigate(['']);
      })
      .catch(err => { console.log(err) });
  }
  endBid() {
    console.log('end bid temp')
    if (!this.product1hasbid || !this.product2hasbid || !this.product3hasbid) {
      alert("Cannot end the bid. One or more products do not have any bids yet.");
    } else {
      console.log("We can route to result page now.");
      this._router.navigate(['results'])
    }
  }

}
