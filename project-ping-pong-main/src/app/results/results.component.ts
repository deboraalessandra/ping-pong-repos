import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
// método construtor utilizado para a ingestão de dependência
  constructor() { }
// ele é chamado quando todas as informações dos componentes estiverem
// carregadas CALLBACK
  ngOnInit(): void {
  }

}
