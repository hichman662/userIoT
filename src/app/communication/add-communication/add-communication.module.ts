import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCommunicationPageRoutingModule } from './add-communication-routing.module';

import { AddCommunicationPage } from './add-communication.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCommunicationPageRoutingModule
  ],
  declarations: [AddCommunicationPage]
})
export class AddCommunicationPageModule {}
