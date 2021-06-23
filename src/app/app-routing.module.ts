import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
/*   {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }, */
  {
    path: 'patient',
    loadChildren: () => import('./patient/patient.module').then( m => m.PatientPageModule)
  },
  {
    path: 'scenarios',
    loadChildren: () => import('./scenarios/scenarios.module').then( m => m.ScenariosPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tab0/tab0.module').then( m => m.Tab0PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
