import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { ScoreboardCoreModel } from '../model/scoreboard.model';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

// Serve para prover essa classe para outras de forma automática
// é o que chamamos de injeção de dependência
@Injectable({
  providedIn: 'root'
})

export class ScoreboardService {

  public baseUrl:string='http://iatechamp.com' //url da API


  constructor(private _http:HttpClient ) { } //ele vai fazer as requisições da api
  // onde vou chamar o endpoint
  public putPoints(playerPoints:string):Observable<ScoreboardCoreModel>{
    return this._http.put<ScoreboardCoreModel>(`${this.baseUrl}/add-set-points`,{playerPoints});
  }
  public getPoints(playerPoints:string):Observable<Array<ScoreboardCoreModel>>{
    return this._http.get<ScoreboardCoreModel[]>(`${this.baseUrl}/add-game-points/${playerPoints}`);
  }
}
