import { Routes } from '@angular/router';
import { Clientes } from './clientes/clientes';
import { Pedidos } from './pedidos/pedidos';
import { Produtos } from './produtos/produtos';

export const routes: Routes = [
  { path: '', redirectTo: 'clientes', pathMatch: 'full' },
  { path: 'clientes', component: Clientes },
  { path: 'pedidos', component: Pedidos },
  { path: 'produtos', component: Produtos },
];
