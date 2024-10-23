import { Routes } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { CalculatorComponent } from './calculator/calculator.component';

export const routes: Routes = [
  {
    path:'card/:studentId',
    component:UserCardComponent,
    title:'user card title'
  },
  {
    path:'calculator',
    component:CalculatorComponent
  },
  {
    path:'counter-nav',
    loadComponent:()=>import('./counter/counter.component').then(c=>c.CounterComponent)
  },
  {
    path:'student',
    loadChildren:()=>import("./student/student.module").then(c=>c.StudentModule)
  }
];

// router params localhost:4200/card/4
//query params localhost:4200/card?studentId=4&&name='Pedro'/4