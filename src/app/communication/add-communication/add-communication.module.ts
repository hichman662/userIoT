import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCommunicationPageRoutingModule } from './add-communication-routing.module';

import { AddCommunicationPage } from './add-communication.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCommunicationPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddCommunicationPage]
})
export class AddCommunicationPageModule {}
