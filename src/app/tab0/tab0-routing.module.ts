import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab0Page } from './tab0.page';

const routes: Routes = [
  {
    path: '',
    component: Tab0Page
  },
  {
    path: 'patient',
    loadChildren: () => import('../patient/detail-patient/detail-patient.module').then( m => m.DetailPatientPageModule)
  },
  {
    path: 'detail-care-plan/:Id',
    loadChildren: () => import('../care-plan/detail-care-plan/detail-care-plan.module').then( m => m.DetailCarePlanPageModule)
  },
  {
    path: 'add-patient',
    loadChildren: () => import('./../patient/add-patient/add-patient.module').then( m => m.AddPatientPageModule)
  },
  {
    path: 'add-careplan',
    loadChildren: () => import('./../care-plan/add-care-plan/add-care-plan.module').then(m => m.AddCarePlanPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab0PageRoutingModule {}
