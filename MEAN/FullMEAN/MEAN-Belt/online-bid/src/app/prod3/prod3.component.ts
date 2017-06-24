import { Component, OnInit } from '@angular/core';
import { BidsService } from './../bids.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prod3',
  templateUrl: './prod3.component.html',
  styleUrls: ['./prod3.component.css']
})
export class Prod3Component implements OnInit {

    bid: object = {
        product: "Jordan-13",
        amount: 0,
    };
    bidStatus: boolean = false;
    bids: any = [];

  constructor(private _bidsService: BidsService, private _router: Router) { }

  ngOnInit() {
  }

  addBid(){
      console.log("in prod1 addBid function");
      this.bidStatus = true;
      var name = this._bidsService.getName();
    //   .then((newdata)=>{
    //     return newdata.name;
    //   })

      this._bidsService.createBid(this.bid)
        .then((data)=>{
            this.bids.push({
                name: name,
                amount:data.amount
            })
            // console.log(data);
            // this._router.navigate(['bids']);
        })
        .catch((data)=>console.log(data));

        console.log(this.bids)

    }

  }
