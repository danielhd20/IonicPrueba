import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesepPageRoutingModule } from './detallesep-routing.module';

import { DetallesepPage } from './detallesep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesepPageRoutingModule
  ],
  declarations: [DetallesepPage]
})
export class DetallesepPageModule {}
