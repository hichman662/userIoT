/* eslint-disable @typescript-eslint/quotes */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCarePlanPage } from './add-care-plan.page';

const routes: Routes = [
  {
    path: '',
    component: AddCarePlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCarePlanPageRoutingModule {}
