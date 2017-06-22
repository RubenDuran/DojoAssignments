import { Component, OnInit } from '@angular/core';
import { GitUsersService } from './../git-users.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
    players: any[] =[];
      constructor(private _gitUser: GitUsersService) {
      	this._gitUser.getAllInfo()
      	.then((data)=>{
      		console.log(data);
      		this.players = data;
      	})
      	.catch(data=>console.log(data));
      }
  ngOnInit() {
  }

}
