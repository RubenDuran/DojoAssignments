import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentsComponent } from './appointments/appointments.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';

const routes: Routes = [
  {
      path: '',
        children: [],
        component: AppointmentsComponent
    },
    {
        path: 'new_appointment',
        children: [],
        component: AddAppointmentComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
