import { Component, OnInit } from '@angular/core';
import { ScoreboardCoreModel } from '../model/scoreboard.model';
import { PlayerCoreModel } from '../model/player.model';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  valorPlayer1: number = 0;
  valorPlayer2: number = 0;
  setPointPlayer1: number = 0;
  setPointPlayer2: number = 0;
  namePlayer: string='';

  public scoreboardCoreModel:ScoreboardCoreModel= new ScoreboardCoreModel();
  public playerCoreModel:PlayerCoreModel= new PlayerCoreModel();
  // método construtor utilizado para a ingestão de dependência
  constructor(private _playerService:PlayerService) { }
  //constructor() { }

// ele é chamado quando todas as informações dos componentes estiverem
// carregadas CALLBACK
  ngOnInit(): void {
    this.getPlayer();
  }

  incrementarPlayer1(){
    this.valorPlayer1+=1

    if(this.valorPlayer1 === 11){
      this.setPointPlayer1+=1;
      this.valorPlayer1 = 0;
      this.valorPlayer2 = 0;
    }
  }

  incrementarPlayer2(){
    this.valorPlayer2+=1

    if(this.valorPlayer2 === 11){
      this.setPointPlayer2+=1;
      this.valorPlayer2 = 0;
      this.valorPlayer1 = 0;
    }
  }

  decrementarPlayer1(){
    this.valorPlayer1-=1
  }

  decrementarPlayer2(){
    this.valorPlayer2-=1
  }
   public getPlayer(): void{
    this.scoreboardCoreModel.IdScoreboard=1;
    this.scoreboardCoreModel.SetPoints=11;
    this.scoreboardCoreModel.PlayerPoints=1;
    this.scoreboardCoreModel.GamePoints=1111;
    this.scoreboardCoreModel.GamePlayed=1111;
    this.playerCoreModel.NamePlayer='Icaro Cãua';
    this.playerCoreModel.NamePlayer2='Bruno Harlis';


   //this._playerService.getPlayer(namePlayer).then(res => this.playerCoreModel=res)
   }

   finalizarPartida(){
    this.valorPlayer1 = 0;
    this.valorPlayer2 = 0;
    this.setPointPlayer1 = 0;
    this.setPointPlayer2 = 0;
   }
}
