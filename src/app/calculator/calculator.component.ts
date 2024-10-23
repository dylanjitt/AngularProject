import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule,CommonModule],
  // templateUrl: './calculator.component.html',
  template:`
  <div class="body">
  <div class="calculator">
    <p>calculator component!</p>
    <input type="number" [(ngModel)]="box1Value">
    <input type="number" [(ngModel)]="box2Value">
    <div class="button-container">
      <button (click)="onMult(box1Value,box2Value)">Multiplicar</button>
      <button (click)="onSum(box1Value,box2Value)">Sumar</button>
      <button (click)="onReset()">Reset</button>
    </div>
  </div>
  <div class="historial">
    <p>Historial: </p>
    <ul>
      <!-- Use *ngFor to loop through variables array -->
      <li *ngFor="let item of variables">{{ item }}</li>
    </ul>
  </div>
</div>`,
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent implements OnInit{

  box1Value:number=0
  box2Value:number=0

  variables:string[]=[]

  @Output() sum = new EventEmitter<number>()
  @Output() mult = new EventEmitter<number>()
  @Output() reset = new EventEmitter<number>()

  constructor(private router:ActivatedRoute){}

  ngOnInit(): void {
      this.router.queryParams.subscribe(params=>{
        console.log('calculator params route: ',params)//['name'])
      })
  }

  public onSum(a:number,b:number){
    var res=this.box1Value+this.box2Value
    
    this.variables = [...this.variables, "SUM: " + String(res)];
    console.log("listttt",this.variables)
    
    this.sum.emit(res)
  }

  public onMult(a:number,b:number){
    var res=this.box1Value*this.box2Value
    this.variables = [...this.variables, "MULT: " + String(res)];
    console.log("listttt",this.variables)
    
    this.sum.emit(res)
  }
  public onReset(){
    this.reset.emit(0)
    this.box1Value=0
    this.box2Value=0
    this.variables=[]
  }

}
