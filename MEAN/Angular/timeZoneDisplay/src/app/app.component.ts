import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currTime: string = '';
  pacific: any;
  mountain = '';
  easter = '';
  central = '';
  num = 1;
  pstSwitch: boolean = false;
  mstSwitch: boolean = false;
  cstSwitch: boolean = false;
  estSwitch: boolean = false;
  pst() {
    this.currTime = Date();
    this.pstSwitch = true;
    this.mstSwitch = false;
    this.cstSwitch = false;
    this.estSwitch = false;
  }
  mst() {
    var offset = 1.0;
    console.log(new Date());
    var mst = new Date().getTime() + (offset * 3600000);
    var mstDate = new Date(mst);
    this.currTime = mstDate.toLocaleString()
    this.pstSwitch = false;
    this.mstSwitch = true;
    this.cstSwitch = false;
    this.estSwitch = false;

  }
  cst() {
    var offset = 2.0;
    console.log(new Date());
    var central = new Date().getTime() + (offset * 3600000);
    var cenDate = new Date(central);
    this.currTime = cenDate.toLocaleString();
    this.pstSwitch = false;
    this.mstSwitch = false;
    this.cstSwitch = true;
    this.estSwitch = false;
  }
  est() {
    var offset = 3.0;
    console.log(new Date());
    var east = new Date().getTime() + (offset * 3600000);
    var estDate = new Date(east);
    this.currTime = estDate.toLocaleString();
    this.pstSwitch = false;
    this.mstSwitch = false;
    this.cstSwitch = false;
    this.estSwitch = true;
  }
  clear() {
    this.pacific = '';
    this.mountain = '';
    this.easter = '';
    this.central = '';
    this.pstSwitch = false;
    this.mstSwitch = false;
    this.cstSwitch = false;
    this.estSwitch = false;
  }
}
