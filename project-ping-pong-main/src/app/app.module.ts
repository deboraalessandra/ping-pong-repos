import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { RankingComponent } from './ranking/ranking.component';
import { ChampionshipComponent } from './championship/championship.component';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { PlayerService } from './services/player.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ // todos os componentes da aplicação estão aqui
    AppComponent,
    DashboardComponent,
    ScoreboardComponent,
    RankingComponent,
    ChampionshipComponent,
    HomeComponent,
    ResultsComponent
  ],
  // é aqui que os componentes estão para ser registrado dentro do
  // módulo antes de ser utilizado
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // quando tem um serviço que precisa injetar em outro componente
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
