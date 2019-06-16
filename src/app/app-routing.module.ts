import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CidadeComponent } from './Cadastro/cidade/cidade.component';
import { ClienteComponent } from './Cadastro/cliente/cliente.component';

const routes: Routes = [
  {path: 'cidades',component:CidadeComponent},
  {path: 'clientes',component:ClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
