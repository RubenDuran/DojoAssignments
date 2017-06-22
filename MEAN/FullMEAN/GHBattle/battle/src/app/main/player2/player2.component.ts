import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-player2',
  templateUrl: './player2.component.html',
  styleUrls: ['./player2.component.css']
})
export class Player2Component implements OnInit {

  player = {username: ""};
  @Output() player2Event = new EventEmitter();
  @Input() playerInfo;
  constructor() { }

  ngOnInit() {
  }
  player2Submit(){
  	console.log(this.player.username);
  	this.player2Event.emit(this.player);
  }

}
