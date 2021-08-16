import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRelPersonPageRoutingModule } from './add-rel-person-routing.module';

import { AddRelPersonPage } from './add-rel-person.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRelPersonPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddRelPersonPage]
})
export class AddRelPersonPageModule {}
