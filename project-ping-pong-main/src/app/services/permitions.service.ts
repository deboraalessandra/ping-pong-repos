import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

// Serve para prover essa classe para outras de forma automática
// é o que chamamos de injeção de dependência
@Injectable({
  providedIn: 'root'
})

export class PermitionsService {

  constructor(private _http:HttpClient ) { } //ele vai fazer as requisições da api

  public setTokenHeaders(): HttpHeaders {
    return new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', 'localhost:4200');
  }
}
