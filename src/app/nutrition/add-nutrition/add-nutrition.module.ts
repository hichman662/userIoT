import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNutritionPageRoutingModule } from './add-nutrition-routing.module';

import { AddNutritionPage } from './add-nutrition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNutritionPageRoutingModule
  ],
  declarations: [AddNutritionPage]
})
export class AddNutritionPageModule {}
