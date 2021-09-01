import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelemetryPage } from './telemetry.page';

const routes: Routes = [
  {
    path: '',
    component: TelemetryPage
  },
  {
    path: 'blood-pressure/:systolic/:diastolic',
    loadChildren: () => import('./blood-pressure/blood-pressure.module').then( m => m.BloodPressurePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelemetryPageRoutingModule {}
