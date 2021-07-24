import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunicationPage } from './communication.page';

const routes: Routes = [
  {
    path: '',
    component: CommunicationPage
  },
  {
    path: 'detail-communication',
    loadChildren: () => import('./detail-communication/detail-communication.module').then( m => m.DetailCommunicationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunicationPageRoutingModule {}
