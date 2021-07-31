import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page
  },
  {
    path: 'carePlan',
    loadChildren: () => import('../care-plan/care-plan.module').then( m => m.CarePlanPageModule)
  },
  {
    path: 'vitalSign',
    loadChildren: () => import('../vital-sign/vital-sign.module').then( m => m.VitalSignPageModule)
  },
  {
    path: 'careActivity',
    loadChildren: () => import('../care-activity/care-activity.module').then( m => m.CareActivityPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
