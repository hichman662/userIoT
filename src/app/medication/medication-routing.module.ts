import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicationPage } from './medication.page';

const routes: Routes = [
  {
    path: '',
    component: MedicationPage
  },
  {
    path: 'detail-medication/:Id',
    loadChildren: () => import('./detail-medication/detail-medication.module').then( m => m.DetailMedicationPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicationPageRoutingModule {}
