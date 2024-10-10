import { Component, Input } from '@angular/core';
import { Person } from '../app.component';
import { ItemComponent } from '../item/item.component';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input()persons:Person[]=[]



  
}
