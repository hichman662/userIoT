import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddScenarioPage } from './add-scenario.page';

const routes: Routes = [
  {
    path: '',
    component: AddScenarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddScenarioPageRoutingModule {}
