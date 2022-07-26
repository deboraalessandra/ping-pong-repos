//Toda a navegação do site está baseada aqui e depois tem que importar
// o AppRoutingModule no módulo principal
import { NgModule, ModuleWithProviders  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionshipComponent } from './championship/championship.component';
import { HomeComponent } from './home/home.component';
import { RankingComponent } from './ranking/ranking.component';
import { ResultsComponent } from './results/results.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';


const routes: Routes = [
  { path: 'results', component: ResultsComponent },
  { path: 'championship', component: ChampionshipComponent },
  { path: 'scoreboard', component: ScoreboardComponent },
  { path: 'ranking', component: RankingComponent },
  { path: '', component: HomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
