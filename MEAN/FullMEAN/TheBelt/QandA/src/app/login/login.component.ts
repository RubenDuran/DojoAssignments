import { Component, OnInit } from '@angular/core';
import { AnswerService } from './../answer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user: object = { name: "" }
      errors: string[] = [];
      constructor(private _answerService: AnswerService, private _router: Router) { }

      ngOnInit() {
      }
      login() {
        this._answerService.login(this.user)
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
              this._router.navigate(['questions']);
            }
          })
          .catch(err => {
            console.log(err);
          })
      }
  }
