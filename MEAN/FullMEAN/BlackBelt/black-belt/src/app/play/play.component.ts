import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TriviaService } from './../trivia.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
    user : String = '';
    userId: String = '';
    questions: Object[] = [];
    test: Object[] = [];
    threeQuestions: Object[] = [];

    answers: Object = {
        0: '',
        1: '',
        2: '',
    };

  constructor(private _triviaService: TriviaService, private _router: Router) { }

  ngOnInit() {
      this._triviaService.getUser()
        .then(data => {
          console.log('grabbing user', data);
          this.userId = data._id;
          this.user = data.name;
          console.log('name - ', this.user);
          console.log("-----", this.userId );
        })
        .catch(err => {
          this._router.navigate(['questions']);
      }) //end of getuser

      this._triviaService.getQuestions()
        .then(data => {
          console.log('grabbed questions', data);
          this.questions = data;
          console.log('questions array - ', this.questions);
          for(let q of this.questions){
              console.log('in for loop', q)
              let qObj = {id: q['_id']};
              this._triviaService.getAnswers(qObj)
          .then(data => {
            console.log('in init got answers', data);
            let temp = {};
            temp['question']=q['content'];
            temp['answers']=data;

            this.test.push(temp);
            //  }
            console.log("the test array in forloop~~~", this.test);

            //grab three random questions and answers

            let random = this.test.sort(() => .5 - Math.random()).slice(0,3);
            this.threeQuestions =random;

            console.log("threequestions array---", this.threeQuestions);

          })
          .catch(err => {
            this._router.navigate(['']);
          })

      }//end of forloop


      }) //end of getquestions then
        .catch(err => {
          this._router.navigate(['']);
      }) // end of catch GETQUESTIONS



  } //End of on init



  submitGame(){
      console.log('game submited');

      console.log('this.answers = ', this.answers);

      this._triviaService.checkAnswers(this.answers)
        .then(data => {
          console.log('checked answers back in component!!!', data);


        })
        .catch(err => {
          this._router.navigate(['play']);
      }) //end of getuser









      this._router.navigate(['']);
  }
  cancel(){
      console.log('canceled')
      this._router.navigate(['']);
  }

}
