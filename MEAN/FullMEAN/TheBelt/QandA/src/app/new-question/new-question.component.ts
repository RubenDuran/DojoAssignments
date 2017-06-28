import { Component, OnInit } from '@angular/core';
import { AnswerService } from './../answer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {
  question: object = {
    content: '',
    description: '',
  }
  errors: string[] = [];

  constructor(private _answerService: AnswerService, private _router: Router) { }

  ngOnInit() {
  }

  addQuestion() {
    console.log('in add question component', this.question)
    this._answerService.addQuestion(this.question)
      .then(data => {

        console.log('question added', data)

        this._router.navigate(['questions']);
      })
      .catch(err => {
        this.errors.push('Question must be at least 10 characters long')
        this._router.navigate(['newquestion']);
      });
  }
}
