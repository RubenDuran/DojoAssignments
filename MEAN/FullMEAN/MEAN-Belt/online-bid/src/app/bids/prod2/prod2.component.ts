import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BidsService } from './../../bids.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prod2',
  templateUrl: './prod2.component.html',
  styleUrls: ['./prod2.component.css']
})
export class Prod2Component implements OnInit {
  // @Input() bidsArray;
  @Output() sendBidStatus = new EventEmitter();

  bid: object = {
    product: "Jordan-4",
    amount: 0,
  };
  bidStatus: boolean = false;
  bids: any = [];
  errors: string[] = [];

  constructor(private _bidsService: BidsService, private _router: Router) { }

  ngOnInit() {
    this._bidsService.getBids(this.bid)
      .then((data) => {
        if (data.length !== 0) {
          this.bidStatus = true;
          this.sendBidStatus.emit(this.bidStatus);
          for (let bidder of data) {
            console.log('in for loop', bidder)
            this.bids.push({
              name: bidder['_bidder']['name'],
              amount: bidder['amount']
            })
          }
        } else {
          this.bidStatus = false;
          this.sendBidStatus.emit(this.bidStatus);
        }
      })
      .catch((data) => {
        console.log(this.bids)
      })
  }
  addBid() {

    if (this.bids.length > 0) {
      if (this.bid['amount'] > this.bids[this.bids.length - 1]['amount']) {
        this._bidsService.createBid(this.bid)
          .then((data) => {
            this.bidStatus = true;
            this.sendBidStatus.emit(this.bidStatus);
            var arr = [];
            if (data.errors) {
              for (var key in data.errors) {
                arr.push(data.errors[key].message);
                this.errors = arr;
              }
            } else {
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
          this.bidStatus = true;
          this.sendBidStatus.emit(this.bidStatus);
          var arr = [];
          if (data.errors) {
            for (var key in data.errors) {
              arr.push(data.errors[key].message);
              this.errors = arr;
            }
          } else {
            this._bidsService.getBid(this.bid)
              .then((data) => {

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
