import { Component, OnInit } from '@angular/core';
import { AnswerService } from './../answer.service';
import { Router, ActivatedRoute } from '@angular/router';
import "rxjs";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
    questionId: String = '';
    question: String = '';
    username: String = '';
    errors: string[] = [];

    answer: object = {
      content: '',
      details: '',
      _question: '',
      _user: this._answerService.getUser()
      .then(data => {
          console.log('in answers init ', data);
          this.answer['_user'] = data._id;
          this.username = data.name;
      }) //end of getQuestion then
      .catch(err => {
        this._router.navigate(['']);
    }),//end of getQuestion catch,

    }


    constructor(private _answerService: AnswerService, private _router: Router, private _route: ActivatedRoute) {
        this._route.params.subscribe((param)=>{
              console.log("TaskDetailsComponent loaded and url id given is: ", param.id);
              this.questionId=param.id;
            })
        }


  ngOnInit() {
      console.log("%%%%%%%init%%%%",this.questionId)
      this._answerService.getQuestion(this.questionId)
      .then(data => {
          console.log('in init ', data);
          this.question = data.content;
          this.answer['_question']= this.questionId;
      }) //end of getQuestion then
      .catch(err => {
        this._router.navigate(['questions']);
    });//end of getQuestion catch
  }//end of init

  addAnswer(){
      this._answerService.addAnswer(this.answer)
        .then(data => {

            this.answer['_question']= this.questionId;

          console.log('answer added', data)

          this._router.navigate(['questions']);
        })
        .catch(err => {
          this.errors.push('Question must be at least 10 characters long')
          this._router.navigate(['newquestion']);
        });

  }

}
