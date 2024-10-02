import { Component,EventEmitter,Input,Output ,OnInit, OnDestroy, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit,OnDestroy,OnChanges, DoCheck, AfterContentInit,AfterViewInit{

  //inputs outputs
  @Input() name:string=''
  @Input() email:string=''

  @Output() sendData = new EventEmitter<string>()

  @ViewChild("buttonTest",{static:true}) buttonTest!: ElementRef // componente para inicializar a posterioridad, no al inicio o creación del componente
  showButton=false//para ver si se renderiza el boton

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
  ngDoCheck(): void {
      //console.log("Do Check USER CARD")// para controlar variables y elementos en tiempo real.
      console.log(this.password)
  }
  ngAfterContentInit(): void {
      console.log("NG AFTER CONTENT INIT")// para ver el ocntenido que entró de afuera
  }

  ngAfterViewInit(): void {
    console.log("NG AFTER VIEW INIT")
    console.log(this.buttonTest)
    console.log(this.buttonTest.nativeElement.textContent)
  }
}
