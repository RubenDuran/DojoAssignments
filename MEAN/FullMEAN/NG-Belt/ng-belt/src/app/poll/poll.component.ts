import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurveyService } from './../survey.service';
import "rxjs";

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  questionId: String = '';


  question: object = {
    qID: '',
    q: ''
  }
  options: object[] = [];
  errors: string[] = [];

  constructor(private _surveyService: SurveyService, private _router: Router, private _route: ActivatedRoute) {
    this._route.params.subscribe((param) => {
      console.log("TaskDetailsComponent loaded and url id given is: ", param.id);
      this.questionId = param.id;
      this.question['qID'] = param.id;

    })
  }
  ngOnInit() {

    console.log("%%%%%%%init%%%%", this.questionId)

    this._surveyService.getQuestion(this.question)
      .then(data => {
        console.log('in init ', data);
        this.question['q'] = data[0].content;

        //all good above

        this._surveyService.getOptions(this.question)
          .then(data => {
            console.log('in init ', data);

            this.options = data;
            //  }
            console.log(this.options)

          })
          .catch(err => {
            this._router.navigate(['questions']);
          })


      }) //end of getQuestion then
      .catch(err => {
        this._router.navigate(['questions']);
      });//end of getQuestion catch
  }
  addVote(id) {
    console.log("message clicked", id);
    let q = {
      id: id
    }
    this._surveyService.addVote(q)
      .then(data => {
        console.log(this.options)
        this._surveyService.getOptions(this.question)
          .then(data => {
            console.log('in init ', data);
            this.options = data;
            console.log(this.options)
          })
          .catch(err => {
            this._router.navigate(['questions']);
          })
      })
      .catch(err => {
        //   this._router.navigate(['questions']);
        console.log(err);
      })
  }

}
