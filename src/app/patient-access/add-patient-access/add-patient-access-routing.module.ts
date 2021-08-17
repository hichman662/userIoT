import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPatientAccessPage } from './add-patient-access.page';

const routes: Routes = [
  {
    path: '',
    component: AddPatientAccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPatientAccessPageRoutingModule {}
