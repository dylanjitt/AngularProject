import { Component,EventEmitter,Input,Output ,OnInit, OnDestroy, OnChanges, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit,OnDestroy,OnChanges{

  //inputs outputs
  @Input() name:string=''
  @Input() email:string=''

  @Output() sendData = new EventEmitter<string>()

  password:string=''
  public onSendData(){
    this.sendData.emit("los skibidi se pusieron toilet")
  }

  constructor(){
    console.log("HOLAAAAA USER CARD")
  }

  ngOnInit(): void {
    console.log("BONJOUR USER CARD OnInit")
    this.password=this.name+this.email+"PASSWORD1234"
  }

  ngOnDestroy(): void {
      console.log("ADIOS NG OnDestroy")
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes)
      this.password=changes['name'].currentValue+changes['email'].currentValue+"PASSWORD1234"
  }
}
