import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { RankingCoreModel } from '../model/ranking.model';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

// Serve para prover essa classe para outras de forma automática
// é o que chamamos de injeção de dependência
@Injectable({
  providedIn: 'root'
})

export class RankingService {

  public baseUrl: string = 'http://localhost:54291/' //url da API


  constructor(private _http: HttpClient) { } //ele vai fazer as requisições da api
  // onde vou chamar o endpoint
  public putPlayer(namePlayer: string): Observable<RankingCoreModel> {
    return this._http.put<RankingCoreModel>(`${this.baseUrl}/ranking`, { namePlayer });
  }
  public getPlayer(namePlayer: string): Observable<Array<RankingCoreModel>> {
    return this._http.get<RankingCoreModel[]>(`${this.baseUrl}/ranking/${namePlayer}`);
  }
  //teste
}
