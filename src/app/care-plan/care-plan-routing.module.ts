import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarePlanPage } from './care-plan.page';

const routes: Routes = [
  {
    path: '',
    component: CarePlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarePlanPageRoutingModule {}
