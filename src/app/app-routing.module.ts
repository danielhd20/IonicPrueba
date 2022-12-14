import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'perfiles/:id',
    loadChildren: () => import('./perfiles/perfiles.module').then( m => m.PerfilesPageModule)
  },
  {
    path: 'detallesep/:id',
    loadChildren: () => import('./detallesep/detallesep.module').then( m => m.DetallesepPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
