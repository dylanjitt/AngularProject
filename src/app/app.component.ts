import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from "./user-card/user-card.component";
import { CalculatorComponent } from './calculator/calculator.component';
import { CommonModule } from '@angular/common';
//interfaces
interface IPerson{
  name:string
  latName:string
  age?:number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserCardComponent,CalculatorComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:number=30;
  animals:string[]=['loro','gato','mono']
  //interfaz completa
  person: IPerson={
    name:"Kendrick",
    latName:"Lester",
    age:20
  }
  //interfaz con solo lo obligatorio
  person2: IPerson={
    name:"Drake",
    latName:"Josh"
  }

  students:number[]=[1,2,3,4,5,6]
  parents:number[]=[7,8,9,10]

  var1=0
  var2=null
  var3='hola'
// creación de Variable para probar NgIf y ngSwitch
  togg:boolean=false

  constructor(){

    
    // console.log("subtract",this.subtract(8,4))
    // console.log("MAP",this.animals.map((animal)=>(animal+ ' peruano')   ))//genera nuevo array
    // console.log("FOREACH",this.animals.forEach((animal)=>(animal+ ' argentino')   ))//usa elementos del viejo array
    // console.log("FIND",this.animals.find((animal)=>animal==='mono' ))//busca en la lista
    // console.log("FILTER",this.animals.find((animal)=>animal==='mono' ))//devuelve array con los items filtrados de otra lista
    // console.log("INDEXOFF",this.animals.indexOf('mono' ))//devuelve en que posicion en la lista esta un item a especificar

    //desestructuración
    const {name,age} = this.person

    console.log('desestructuracion: ',name,age)

    let both =[...this.students,...this.parents]//street var, para que analice variable por variable en la lista 
    console.log("spreed operator: ",both)// tambien sirve para unir 2 objetos json
    console.log("REST operator", this.sum(2,4))
    console.log("REDUCE operator", this.reduce(2,4,6))

    console.log("Nullish Coalesing: ",this.var2 ?? this.var3)
    console.log("OR: ",this.var2 || this.var1)

  }

  public toggle(){
    this.togg=!this.togg
  }
  public sum2(...persons:number[]){
    return persons[0]+persons[1]
  }

  public reduce(...persons:number[]){
    return persons.reduce(
      (acumulador,valorActual)=>(acumulador+valorActual),0
    )//una función que recorre todos los elementos del array, puedes indicarle de donde comienza
  }

  //llamado de funciones TS para ángular.
  public sum(num1:number,num2:number):number{
    return num1+num2;
  }

  public subtract(num1:number,num2:number):number{
    return num1-num2;
  }

  public getArray():void{
    const persons:number[]=[1,2,3,4,5]
    for(let i=0;i<persons.length;i++){
      if (persons[i]%2==0){
        console.log("person =",persons[i])
      }
      
    }
  }

  public recieveData(data:any){
    console.log("Taylor Swift Sucks")
    console.log(data)

  }
  result:number=0

  public setRes(data:any){
    this.result=data
  }

  // function sumer(){
  //   return 1+2
  // }

  // const suma = (): number => {
  //   return 1+2
  // }

  // function rester(){
  //   return 3-1
  // }

  // const resta = (): number => 2-1
  

}
