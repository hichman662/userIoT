import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScenariosPage } from './scenarios.page';

const routes: Routes = [
  {
    path: '',
    component: ScenariosPage
  },  {
    path: 'add-scenario',
    loadChildren: () => import('./add-scenario/add-scenario.module').then( m => m.AddScenarioPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScenariosPageRoutingModule {}
