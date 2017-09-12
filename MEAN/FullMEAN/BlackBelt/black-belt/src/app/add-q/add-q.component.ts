import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TriviaService } from './../trivia.service';


@Component({
  selector: 'app-add-q',
  templateUrl: './add-q.component.html',
  styleUrls: ['./add-q.component.css']
})
export class AddQComponent implements OnInit {

    question: object = {
      content: '',
      answer: '',
      fake1: '',
      fake2: '',
      qID: '',
    }
    errors: string[] = [];

    constructor(private _triviaService: TriviaService, private _router: Router) { }

    ngOnInit() {
    }

    addQuestion() {
      console.log('in add question Create component', this.question)
      this._triviaService.addQuestion(this.question)
        .then(data => {
          console.log('question added', data)
          this.question['qID'] = data._id;
          //all good above ^

          this._triviaService.addAnswer(this.question)
            .then(data => {
              console.log('options added', data)
            })
            .catch(err => {
              this.errors.push('error adding options')
            });

          //router part of first .then
          this._router.navigate(['']);
        }) //end of first then
        .catch(err => {
          this.errors.push('Question must be at least 10 characters long')
          this._router.navigate(['add']);
        }); //end of first catch
    } //end of addQuestion

    cancel(){
        console.log('canceled')
        this._router.navigate(['']);
    }
  }
