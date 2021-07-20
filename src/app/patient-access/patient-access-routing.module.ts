import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientAccessPage } from './patient-access.page';

const routes: Routes = [
  {
    path: '',
    component: PatientAccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientAccessPageRoutingModule {}
