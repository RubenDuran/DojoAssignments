import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BidsService } from './../../bids.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prod3',
  templateUrl: './prod3.component.html',
  styleUrls: ['./prod3.component.css']
})
export class Prod3Component implements OnInit {
    @Input() bidsArray;
    @Output() sendBidEvent = new EventEmitter();

    bid: object = {
        product: "Jordan-13",
        amount: 0,
    };
    bidStatus: boolean = false;
    bids: any = [];
    errors: string[] = [];

  constructor(private _bidsService: BidsService, private _router: Router) { }

  ngOnInit() {
      this._bidsService.getBids(this.bid)
        .then((data) => {
          if (data.length !== undefined) {
            this.bidStatus = true;
          }
          console.log("ok ok ok", data);
          console.log('cmon man', data[0]['amount']);
          for (let bidder of data) {
            console.log('in for loop', bidder)
            this.bids.push({
              name: bidder['_bidder']['name'],
              amount: bidder['amount']
            })
          }
          console.log(this.bids);
        })
        .catch((data) => {
          console.log(this.bids)
        })
  }

  addBid() {
      console.log("in prod2 addBid function");
      console.log(this.bids);
      console.log(this.bids);
      if (this.bids.length > 0) {
        if (this.bid['amount'] > this.bids[this.bids.length - 1]['amount']) {
          this._bidsService.createBid(this.bid)
            .then((data) => {
              var arr = [];
              if (data.errors) {
                for (var key in data.errors) {
                  arr.push(data.errors[key].message);
                  this.errors = arr;
                }
                console.log('errors in component', this.errors);
              } else {
                console.log("login success");
                this._bidsService.getBid(this.bid)
                  .then((data) => {
                    this.bidStatus = true;
                    this.errors = [];
                    this.bids.push({
                      name: data[0]['_bidder']['name'],
                      amount: data[0]['amount']
                    })
                  })
                  .catch((data) => {
                    console.log(this.bids)
                  });//end of get bid
                this._router.navigate(['bids']);
              }
            })
            .catch((data) => console.log(data));
          //end of createbid

        }//end of second if
        else {
          this.errors.push('Bid amount should be higher than the previous bid');
        }
      } //end of first if
      else {
        this._bidsService.createBid(this.bid)
          .then((data) => {
            var arr = [];
            if (data.errors) {
              for (var key in data.errors) {
                arr.push(data.errors[key].message);
                this.errors = arr;
              }
              console.log('errors in component', this.errors);
            } else {
              console.log("login success");
              this._bidsService.getBid(this.bid)
                .then((data) => {
                  this.bidStatus = true;
                  this.errors = [];
                  this.bids.push({
                    name: data[0]['_bidder']['name'],
                    amount: data[0]['amount']
                  })
                })
                .catch((data) => {
                  console.log(this.bids)
                });//end of get bid
              this._router.navigate(['bids']);
            }
          })
          .catch((data) => console.log(data));
        //end of createbid
      } //end of else
    }
  }
