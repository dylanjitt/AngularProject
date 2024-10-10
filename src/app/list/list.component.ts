import { Component, Input,Output,EventEmitter } from '@angular/core';
import { Person } from '../app.component';
import { ItemComponent } from '../item/item.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemComponent,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input()persons:Person[]=[]

  @Output() sendData=new EventEmitter<String>()
  @Output() delete=new  EventEmitter<String>()

  public onShow(data:string){
    this.sendData.emit(data)
  }

  public onDelete(data:string){
    this.delete.emit(data)
  }

  
}
