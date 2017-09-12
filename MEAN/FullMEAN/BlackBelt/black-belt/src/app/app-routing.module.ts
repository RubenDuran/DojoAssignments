import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayComponent } from './play/play.component';
import { AddQComponent } from './add-q/add-q.component';


const routes: Routes = [
  {
    path: '',
    children: [],
    component: DashboardComponent
},
{
  path: 'play',
  children: [],
  component: PlayComponent
},
{
  path: 'add',
  children: [],
  component: AddQComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
