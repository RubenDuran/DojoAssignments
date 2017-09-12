import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TriviaService } from './../trivia.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    errors: string[] = [];
    // user: String = '';

    // question: object = {
    //   content: '',
    //   answer: '',
    //   fake1: '',
    //   fake2: '',
    //   qID: '',
    // }


  constructor(private _triviaService: TriviaService, private _router: Router) { }

  ngOnInit() {
  }
  play(){
      this._router.navigate(['play']);
  }

}
