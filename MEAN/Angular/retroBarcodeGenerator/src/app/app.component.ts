import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  colors=["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Black","Blue","BlueViolet","Brown","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Crimson","DarkCyan","DarkGreen","DarkRed","DarkSlateGrey","DimGray","DodgerBlue","FireBrick","Gold","GreenYellow","LightBlue","LightCoral","LightSeaGreen","LightSkyBlue","Magenta","Maroon","MediumTurquoise","MediumVioletRed","Orange","OrangeRed","PaleVioletRed","RebeccaPurple","Tan","Turquoise"];

   myrandom= Array.from({length:10},()=>this.colors[Math.floor(Math.random()*this.colors.length)]);

}
