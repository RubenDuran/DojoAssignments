import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurveyService } from './../survey.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  question: object = {
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    qID: '',
  }
  errors: string[] = [];

  constructor(private _surveyService: SurveyService, private _router: Router) { }

  ngOnInit() {
  }

  addQuestion() {
    console.log('in add question Create component', this.question)
    this._surveyService.addQuestion(this.question)
      .then(data => {
        console.log('question added', data)
        this.question['qID'] = data._id;
        //all good above ^

        this._surveyService.addOption(this.question)
          .then(data => {
            console.log('options added', data)
          })
          .catch(err => {
            this.errors.push('error adding options')
          });

        //router part of first .then
        this._router.navigate(['dashboard']);
      }) //end of first then
      .catch(err => {
        this.errors.push('Question must be at least 10 characters long')
        this._router.navigate(['create']);
      }); //end of first catch
  } //end of addQuestion
}
