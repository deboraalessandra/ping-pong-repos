import { RankingComponent } from './ranking/ranking.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    // assim que o usuário entrar em dashboard será redirecionado pra essa rota
    path:'',
    component: DashboardComponent,
    children:[ //children é um elemento de sub rota , é um array de rotas
        {
            path:'',
            component: RankingComponent,
        }
    ] 
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }