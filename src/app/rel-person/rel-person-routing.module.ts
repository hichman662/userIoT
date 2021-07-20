import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelPersonPage } from './rel-person.page';

const routes: Routes = [
  {
    path: '',
    component: RelPersonPage
  },
  {
    path: 'detail-rel-person/:Id',
    loadChildren: () => import('./detail-rel-person/detail-rel-person.module').then( m => m.DetailRelPersonPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelPersonPageRoutingModule {}
