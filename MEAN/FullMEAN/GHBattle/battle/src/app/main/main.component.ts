import { Component, OnInit } from '@angular/core';
import { GitUsersService } from './../git-users.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    form1Filled: Boolean = false;
      form2Filled: Boolean = false;
      battleStarted: Boolean = false;
      player1 = {username: "", score: 0, imagePath: 'https://pbs.twimg.com/profile_images/1990249248/image.jpg'};
      player2 = {username: "", score: 0, imagePath: 'http://www.indiewire.com/wp-content/uploads/2014/08/steve-carell-freeheld.jpg'}
      constructor(private _gitUser: GitUsersService) { }

      ngOnInit() {
      }
      startBattle(){
      	this.battleStarted = true;
      }
      dataFromPlayer1(data){
  	console.log("in dataFromPlayer1", data);
  	this._gitUser.getInfo(data)
  	.then((data)=>{
  		console.log('successfully got api info', data);
  		this._gitUser.addUser(data)
  		.then((data)=>{
  			console.log('added user', data);
  			this.form1Filled = true;
  			this.player1 = data;
            console.log('boom', this.player1);
  		})
  		.catch(errors=>console.log(errors));
  	})
  	.catch(error=>console.log(error))
  }
  dataFromPlayer2(data){
  	console.log("in dataFromPlayer2");
  	this._gitUser.getInfo(data)
  	.then((data)=>{
  		console.log('successfully got api info');
  		this._gitUser.addUser(data)
  		.then((data)=>{
  			console.log('added user');
  			this.form2Filled = true;
  			this.player2 = data;
  		})
  		.catch(errors=>console.log(errors));
  	})
  	.catch(error=>console.log(error))
  }

    }
