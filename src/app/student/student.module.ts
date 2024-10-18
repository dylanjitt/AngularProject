import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ScoreComponent } from './score/score.component';
import { AverageComponent } from './average/average.component';
import { ClassmateComponent } from './classmate/classmate.component';
import { RouterOutlet,RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    ScoreComponent,
    AverageComponent,
    ClassmateComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    
    // RouterLink
  ]
})
export class StudentModule { }
