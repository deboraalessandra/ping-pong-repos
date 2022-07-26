import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
// método construtor utilizado para a ingestão de dependência
  constructor() { }
// ele é chamado quando todas as informações dos componentes estiverem
// carregadas CALLBACK
  ngOnInit(): void {
  }

}
