import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ResultComponent } from './result/result.component';
import { RankingComponent } from './ranking/ranking.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', component: MainComponent },
  { path: 'battle', component: MainComponent },
  { path: 'ranking', component: RankingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
