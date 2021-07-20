import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'patient',
    loadChildren: () => import('./patient/patient.module').then( m => m.PatientPageModule)
  },
  {
    path: 'scenarios',
    loadChildren: () => import('./scenarios/scenarios.module').then( m => m.ScenariosPageModule)
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'practitioner',
    loadChildren: () => import('./practitioner/practitioner.module').then( m => m.PractitionerPageModule)
  },
  {
    path: 'rel-person',
    loadChildren: () => import('./rel-person/rel-person.module').then( m => m.RelPersonPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
