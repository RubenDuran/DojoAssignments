import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  p_level= "";
  onSubmit(){
      this.p_level = this.p_level;
      console.log(this.p_level)
}
}
