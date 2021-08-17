import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientAccessPage } from './patient-access.page';

const routes: Routes = [
  {
    path: '',
    component: PatientAccessPage
  },
  {
    path: 'detail-patient-access/:Id',
    loadChildren: () => import('./detail-patient-access/detail-patient-access.module').then( m => m.DetailPatientAccessPageModule)
  },  {
    path: 'add-patient-access',
    loadChildren: () => import('./add-patient-access/add-patient-access.module').then( m => m.AddPatientAccessPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientAccessPageRoutingModule {}
