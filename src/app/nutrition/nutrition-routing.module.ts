import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NutritionPage } from './nutrition.page';

const routes: Routes = [
  {
    path: '',
    component: NutritionPage
  },
  {
    path: 'detail-nutrition/:Id',
    loadChildren: () => import('./detail-nutrition/detail-nutrition.module').then( m => m.DetailNutritionPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NutritionPageRoutingModule {}
