import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quote = ''
  author = ''
  onSubmit(){
      this.quote = this.quote;
      console.log(this.quote)
      this.author=this.author;
      console.log(this.author)
}
}
