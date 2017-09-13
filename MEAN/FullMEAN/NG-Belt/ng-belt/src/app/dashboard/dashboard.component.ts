import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurveyService } from './../survey.service';
import "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    errors: string[] = [];
    questions: object[] = [];
     userId: String = '';

  constructor(private _surveyService: SurveyService, private _router: Router, private _route: ActivatedRoute) {
      this._route.params.subscribe((param)=>{
            console.log("TaskDetailsComponent loaded and url id given is: ", param.id);
          })
   }

  ngOnInit() {
      this._surveyService.getUser()
        .then(data => {
          console.log('grabbing user', data);
          this.userId = data._id;

          console.log("-----", this.userId )

        })
        .catch(err => {
          this._router.navigate(['questions']);
        })


      this._surveyService.getQuestions()
        .then((data) => {
            console.log("in dash init ", data)
          var arr = [];
          if (data.errors) {
            for (var key in data.errors) {
              arr.push(data.errors[key].message);
              this.errors = arr;
            }
          } else {
              for(let q of data){
                  this.questions.push(q);
              }
              console.log('questions in init', this.questions)
          }
        })
        .catch(err => {
          console.log(err);
        })

  }

}
