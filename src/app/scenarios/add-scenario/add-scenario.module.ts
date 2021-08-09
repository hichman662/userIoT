import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddScenarioPageRoutingModule } from './add-scenario-routing.module';

import { AddScenarioPage } from './add-scenario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddScenarioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddScenarioPage]
})
export class AddScenarioPageModule {}
