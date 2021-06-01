import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmaciaPageRoutingModule } from './farmacia-routing.module';

import { FarmaciaPage } from './farmacia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FarmaciaPageRoutingModule,
    HttpClientModule
  ],
  declarations: [FarmaciaPage]
})
export class FarmaciaPageModule {}
