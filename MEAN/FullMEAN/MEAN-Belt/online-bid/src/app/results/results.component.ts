import { Component, OnInit } from '@angular/core';
import { BidsService } from './../bids.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  topBids: object = {
    'prod1': {},
    'prod2': {},
    'prod3': {}
  };

  user: '';

  constructor(private _bidsService: BidsService, private _router: Router) { }

  ngOnInit() {

    this._bidsService.getBid({ product: 'Jordan-11' })
      .then((data) => {
        this.topBids['prod1'] = data[0];
      }).catch((data) => {
        console.log('in catch', data)
      });
    this._bidsService.getBid({ product: 'Jordan-4' })
      .then((data) => {
        this.topBids['prod2'] = data[0];
      }).catch((data) => {
        console.log('in catch', data)
      });

    this._bidsService.getBid({ product: 'Jordan-13' })
      .then((data) => {
        this.topBids['prod3'] = data[0];
      }).catch((data) => {
        console.log('in catch', data)
      });

    this._bidsService.getName()
      .then((data) => {
        this.user = data;
      }).catch((data) => {
        console.log('in catch', data)
      });
  }
  restart() {
    this._bidsService.restart()
      .then(data => {
        this._router.navigate(['bids']);
      })
      .catch(err => { console.log(err) });
  }

}
