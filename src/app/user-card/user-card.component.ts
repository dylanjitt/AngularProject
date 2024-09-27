import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {

  //inputs outputs
  @Input() name:string=''
  @Input() email:string=''

  @Output() sendData = new EventEmitter<string>()

  public onSendData(){
    this.sendData.emit("los skibidi se pusieron toilet")
  }
}