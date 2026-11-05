import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListaPensamentoComponent } from './components/pensamentos/lista-pensamento/lista-pensamento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listaPensamento',
    pathMatch: 'full',
  },
  {
    path: 'criarPensamento',
    component: CriarPensamentoComponent,
  },
  {
    path: 'listaPensamento',
    component: ListaPensamentoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
