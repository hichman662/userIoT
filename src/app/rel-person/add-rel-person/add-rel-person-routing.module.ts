import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRelPersonPage } from './add-rel-person.page';

const routes: Routes = [
  {
    path: '',
    component: AddRelPersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRelPersonPageRoutingModule {}
