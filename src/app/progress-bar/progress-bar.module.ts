import { RouterModule } from '@angular/router';
import { ProgressBarComponent } from 'src/app/progress-bar/progress-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ProgressBarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProgressBarComponent
  ]
})
export class ProgressBarModule { }
