import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelPersonPage } from './rel-person.page';

const routes: Routes = [
  {
    path: '',
    component: RelPersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelPersonPageRoutingModule {}
