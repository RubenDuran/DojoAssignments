import { Component, OnInit } from '@angular/core';
import { MessageboardService } from './../messageboard.service';

@Component({
  selector: 'app-messageboard',
  templateUrl: './messageboard.component.html',
  styleUrls: ['./messageboard.component.css']
})
export class MessageboardComponent implements OnInit {
  messages: object[] = []

  constructor(private _messageboardService: MessageboardService) {
    this._messageboardService.getMessages()
      .then((data) => {
        console.log(data);
        this.messages = data;
      })
      .catch((err) => { console.log(err) })
  }

  ngOnInit() {
  }
  newMsgFromChild(data) {
    // this.messages.push(data);
    console.log("running the service method")
    this._messageboardService.createMessage(data)
      .then(data => { this.messages = data })
      .catch(err => { console.log(err) })
  }

}
