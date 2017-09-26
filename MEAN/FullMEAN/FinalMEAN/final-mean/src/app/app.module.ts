import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';

import { AptService } from './apt.service';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    AddAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [AptService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
