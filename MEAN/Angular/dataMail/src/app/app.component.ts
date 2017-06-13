import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  emails = [
    {
      address: 'bill@gates.com',
      importance: true,
      subject: 'New Windows',
      content: 'Windows XI will launch in year 2100'
    },
    {
      address: 'gabe@newel.com',
      importance: false,
      subject: 'HL3!',
      content: 'Just Kiding...'
    }
  ];
}
