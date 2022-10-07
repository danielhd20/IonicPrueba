import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesepPage } from './detallesep.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesepPageRoutingModule {}
