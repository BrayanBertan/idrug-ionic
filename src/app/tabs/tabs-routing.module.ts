import { ProdutosPageModule } from './../produtos/produtos.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'farmacia',
        loadChildren: () => import('../farmacia/farmacia.module').then(m => m.FarmaciaPageModule)
      },
      {
        path: 'produtos',
        loadChildren: () => import('../produtos/produtos.module').then(m => m.ProdutosPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/farmacia',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/farmacia',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
