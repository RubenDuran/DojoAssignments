import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurveyService } from './../survey.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user: object = { name: "" }
          errors: string[] = [];
          constructor(private _surveyService: SurveyService, private _router: Router) { }

          ngOnInit() {
          }
          login() {
            this._surveyService.login(this.user)
              .then((data) => {
                  console.log(this.user)
                  console.log("data - ",data)
                var arr = [];
                if (data.errors) {
                  for (var key in data.errors) {
                    arr.push(data.errors[key].message);
                    this.errors = arr;
                  }
                } else {
                  this._router.navigate(['dashboard']);
                }
              })
              .catch(err => {
                console.log(err);
              })
          }
      }
