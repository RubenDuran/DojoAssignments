import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  @Output() newMessageEvent = new EventEmitter();
  message: object = { name: "", content: "" };
  constructor() { }

  ngOnInit() {
  }
  newMessage() {
    console.log(this.message)
    this.newMessageEvent.emit(this.message);
  }
}
