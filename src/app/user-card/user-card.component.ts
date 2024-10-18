import { Component,EventEmitter,Input,Output ,OnInit, OnDestroy, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterViewInit, ViewChild, ElementRef, AfterContentChecked, AfterViewChecked} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule,FormsModule,SharedModule ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit,OnDestroy,OnChanges, DoCheck, AfterContentInit,AfterViewInit,AfterContentChecked,AfterViewChecked{

  //inputs outputs
  @Input() name:string=''
  @Input() email:string=''

  @Output() sendData = new EventEmitter<string>()

  @ViewChild("buttonTest",{static:false}) buttonTest!: ElementRef // componente para inicializar a posterioridad, no al inicio o creación del componente
  @ViewChild("buttonShow",{static:true}) buttonShow!: ElementRef 

  showButton=true//para ver si se renderiza el boton
  password:string=''

  sub: Subscription=new Subscription

  public onSendData(){
    this.sendData.emit("los skibidi se pusieron toilet")
  }

  constructor(private activatedRouter: ActivatedRoute){
    // console.log("HOLAAAAA USER CARD")

    this.sub.add(this.activatedRouter.params.subscribe((params)=>console.log("Params: ",params)))

    

    console.log('snapshot: ',this.activatedRouter.snapshot.params)
  }

  ngOnInit(): void {
    console.log("BONJOUR USER CARD OnInit")
    this.password=this.name+this.email+"PASSWORD1234"
    this.buttonShow.nativeElement.textContent="button show in OnInit"
  }

  ngOnDestroy(): void {
      console.log("ADIOS NG OnDestroy")
      this.sub.unsubscribe()
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
    if(this.buttonTest){
      this.buttonTest.nativeElement.textContent='Data sent'
    } 
  }

  ngAfterContentChecked(): void {
      console.log("After Content Checked")
  }
  
  ngAfterViewChecked(): void {
    console.log("After View Checked")
  }
}
