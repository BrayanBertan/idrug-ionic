import { ProdutosFormComponent } from './produtos-form/produtos-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosPage } from './produtos.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutosPage
  },
  {
    path: 'edicao/:id',
    component: ProdutosFormComponent
  },

  {
    path: 'cadastro',
    component: ProdutosFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosPageRoutingModule {}
