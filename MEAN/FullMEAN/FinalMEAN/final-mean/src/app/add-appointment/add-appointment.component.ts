import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AptService } from './../apt.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  constructor(private _aptService: AptService, private _router: Router) { }

  ngOnInit() {
  }
  cancel() {
    //   this.user["name"] = ""
    //   this._router.navigate(['']);
    // this._aptService.logout()
    //   .then((data) => {
    //       console.log("data - ",data)
        // var arr = [];
        // if (data.errors) {
        //   for (var key in data.errors) {
        //     arr.push(data.errors[key].message);
        //     this.errors = arr;
        //   }
        // } else {
          this._router.navigate(['']);
        // }
      }
  //)
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }

}
