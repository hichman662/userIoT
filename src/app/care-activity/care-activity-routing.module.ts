import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CareActivityPage } from './care-activity.page';

const routes: Routes = [
  {
    path: '',
    component: CareActivityPage
  },
  {
    path: 'detail-care-activity',
    loadChildren: () => import('./detail-care-activity/detail-care-activity.module').then( m => m.DetailCareActivityPageModule)
  },
  {
    path: 'nutrition/:Id',
    loadChildren: () => import('../nutrition/nutrition.module').then( m => m.NutritionPageModule)
  },
  {
    path: 'appointment/:Id',
    loadChildren: () => import('../appointment/appointment.module').then( m => m.AppointmentPageModule)
  },
  {
    path: 'communication/:Id',
    loadChildren: () => import('../communication/communication.module').then( m => m.CommunicationPageModule)
  },
  {
    path: 'medication/:Id',
    loadChildren: () => import('../medication/medication.module').then( m => m.MedicationPageModule)
  },  {
    path: 'add-care-activity',
    loadChildren: () => import('./add-care-activity/add-care-activity.module').then( m => m.AddCareActivityPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CareActivityPageRoutingModule {}
