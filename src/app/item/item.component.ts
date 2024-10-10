import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input() name:string=''
  @Input() role:String=''

  @Output() sendData=new EventEmitter<String>()
  @Output() delete=new  EventEmitter<String>()

  public onShow(){
    this.sendData.emit(this.name)
  }

  public onDelete(){
    this.delete.emit(this.name)
  }
}
