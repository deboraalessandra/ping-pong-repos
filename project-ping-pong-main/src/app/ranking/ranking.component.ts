import { Component, OnInit } from '@angular/core';
import { PlayerCoreModel } from '../model/player.model';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
// método construtor utilizado para a ingestão de dependência
  constructor() { }
  public playerCoreModel:PlayerCoreModel= new PlayerCoreModel();
// ele é chamado quando todas as informações dos componentes estiverem
// carregadas CALLBACK
  ngOnInit(): void {
    this.fake();
  }
  public fake(): void{
    this.playerCoreModel.IdPlayer=1;
    this.playerCoreModel.NamePlayer='Ícaro Caua';
   }

}
