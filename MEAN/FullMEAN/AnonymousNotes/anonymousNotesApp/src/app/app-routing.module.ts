import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './messageboard/new/new.component';
import { ListComponent } from './messageboard/list/list.component';
import { MessageboardComponent } from './messageboard/messageboard.component';

const routes: Routes = [
  {
    path: 'new',
    component: NewComponent
  },
  {
    path: 'list',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
