import { ScenariosPageModule } from './../scenarios/scenarios.module';
import { ScenariosPage } from './../scenarios/scenarios.page';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
     {
        path: '',
        loadChildren: () => import('../tab0/tab0.module').then(m => m.Tab0PageModule)
      },
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'patient',
        loadChildren: () => import('../patient/patient.module').then(m => m.PatientPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '**',
        redirectTo: '/tabs',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
