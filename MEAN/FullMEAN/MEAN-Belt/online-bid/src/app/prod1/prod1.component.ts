import { Component, OnInit } from '@angular/core';
import { BidsService } from './../bids.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prod1',
  templateUrl: './prod1.component.html',
  styleUrls: ['./prod1.component.css']
})
export class Prod1Component implements OnInit {
    bid: object = {
        product: "Jordan-11",
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
      var name = this._bidsService.getName().then((data)=>{
          name=name
          // console.log(data);
          // this._router.navigate(['bids']);
      })
      .catch((data)=>console.log(data));
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
