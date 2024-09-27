import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

  box1Value:number=0
  box2Value:number=0

  variables:string[]=[]

  @Output() sum = new EventEmitter<number>()
  @Output() mult = new EventEmitter<number>()
  @Output() reset = new EventEmitter<number>()


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
