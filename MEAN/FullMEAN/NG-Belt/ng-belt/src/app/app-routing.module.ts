import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { PollComponent } from './poll/poll.component';


const routes: Routes = [
  {
    path: '',
    children: [],
    component: LoginComponent
},
{
  path: 'dashboard',
  children: [],
  component: DashboardComponent
},
{
  path: 'create',
  children: [],
  component: CreateComponent
},
{
  path: 'poll/:id',
  children: [],
  component: PollComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
