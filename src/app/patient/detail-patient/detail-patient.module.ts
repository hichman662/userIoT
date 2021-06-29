import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPatientPageRoutingModule } from './detail-patient-routing.module';

import { DetailPatientPage } from './detail-patient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPatientPageRoutingModule
  ],
  declarations: [DetailPatientPage]
})
export class DetailPatientPageModule {}
