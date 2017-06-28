import { Component, OnInit } from '@angular/core';
import { AnswerService } from './../answer.service';
import { Router, ActivatedRoute } from '@angular/router';
import "rxjs";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
    questions: object[] = [];

  constructor(private _answerService: AnswerService, private _router: Router, private _route: ActivatedRoute) {
      this._route.params.subscribe((param)=>{
            console.log("TaskDetailsComponent loaded and url id given is: ", param.id);
          }) 
      }



  ngOnInit() {
      this._answerService.getQuestions()
        .then(data => {
            console.log('in init ', data);
            this.questions = data;
        })
        .catch(err => {
          this._router.navigate(['questions']);
        });
    }

  logout() {
    this._answerService.logout()
      .then(data => {
        this._router.navigate(['']);
      })
      .catch(err => {
        this._router.navigate(['']);
      });
  }

}
