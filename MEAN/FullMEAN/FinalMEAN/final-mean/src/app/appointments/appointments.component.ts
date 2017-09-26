import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AptService } from './../apt.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  constructor(private _aptService: AptService, private _router: Router) { }
  user: object = { name: "" }
  errors: string[] = [];
  loggedIn: boolean = false;


  ngOnInit() {
      if (this.loggedIn == false){
        var person = prompt("Please enter your name")
        this.loggedIn = true;
        this.user["name"] = person;
        this._aptService.login(this.user)
          .then((data) => {
              console.log(this.user)
              console.log("data - ",data)
            var arr = [];
            if (data.errors) {
              for (var key in data.errors) {
                arr.push(data.errors[key].message);
                this.errors = arr;
              }
            } else {
              this._router.navigate(['']);
            }
          })
          .catch(err => {
            console.log(err);
          })
      }
  }
  login() {
            this._aptService.login(this.user)
              .then((data) => {
                  console.log(this.user)
                  console.log("data - ",data)
                var arr = [];
                if (data.errors) {
                  for (var key in data.errors) {
                    arr.push(data.errors[key].message);
                    this.errors = arr;
                  }
                } else {
                  this._router.navigate(['']);
                }
              })
              .catch(err => {
                console.log(err);
              })
          }

    logout() {
        this.user["name"] = ""
        this._router.navigate(['']);
    }






}
