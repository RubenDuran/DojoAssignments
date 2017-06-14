import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    registered = false;
  user = new User();

  onSubmit(){
    console.log(this.user)
    this.user=this.user;
    this.registered=true;
}
}
