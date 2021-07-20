import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PractitionerPage } from './practitioner.page';

const routes: Routes = [
  {
    path: '',
    component: PractitionerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PractitionerPageRoutingModule {}
