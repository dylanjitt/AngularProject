import { Component,EventEmitter,Input,Output ,OnInit, OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit,OnDestroy{

  //inputs outputs
  @Input() name:string=''
  @Input() email:string=''

  @Output() sendData = new EventEmitter<string>()

  public onSendData(){
    this.sendData.emit("los skibidi se pusieron toilet")
  }

  constructor(){
    console.log("HOLAAAAA USER CARD")
  }

  ngOnInit(): void {
    console.log("BONJOUR USER CARD OnInit")
  }

  ngOnDestroy(): void {
      console.log("ADIOS NG OnDestroy")
  }
}
