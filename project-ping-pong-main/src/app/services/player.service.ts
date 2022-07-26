import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { PlayerCoreModel } from '../model/player.model';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { PermitionsService } from './permitions.service';

// Serve para prover essa classe para outras de forma automática
// é o que chamamos de injeção de dependência
@Injectable({
    providedIn: 'root'
})

export class PlayerService {

    public baseUrl: string = 'http://localhost:54291/' //url da API

    constructor(private _http: HttpClient, private permitionService: PermitionsService) { } //ele vai fazer as requisições da api

    // onde vou chamar o endpoint
    public putPlayer(namePlayer: string): Observable<PlayerCoreModel> {
        return this._http.put<PlayerCoreModel>(`${this.baseUrl}/set-players-name`, { namePlayer });
    }

    public createPlayer(namePlayer: string): Observable<PlayerCoreModel> {
        return this._http.post<PlayerCoreModel>(`${this.baseUrl}/post-nameplayer`, namePlayer, {
            headers: this.permitionService.setTokenHeaders()
        });
    }

    public getPlayer(playerName: string) { //requisão de nomes da API e pode ser vazio
        return this._http
            .get(`${this.baseUrl}/players-name`, {
                params: { playerName: String(playerName) },
            })
            .toPromise()
            .then(res => res as any)
            .catch((error: Response) => error);
    }

}
