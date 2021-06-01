import { ProdutosFormComponent } from './produtos-form/produtos-form.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutosPageRoutingModule } from './produtos-routing.module';

import { ProdutosPage } from './produtos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutosPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [ProdutosPage,ProdutosFormComponent]
})
export class ProdutosPageModule {}
