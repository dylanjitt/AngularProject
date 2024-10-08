import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [AlertComponent,CardComponent,NavbarComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModuleModule { }
