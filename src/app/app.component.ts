import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//interfaces
interface IPerson{
  name:string
  latName:string
  age?:number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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

  constructor(){
    console.log("subtract",this.subtract(8,4))
    console.log("MAP",this.animals.map((animal)=>(animal+ ' peruano')   ))//genera nuevo array
    console.log("FOREACH",this.animals.forEach((animal)=>(animal+ ' argentino')   ))//usa elementos del viejo array
    console.log("FIND",this.animals.find((animal)=>animal==='mono' ))//busca en la lista
    console.log("FILTER",this.animals.find((animal)=>animal==='mono' ))//devuelve array con los items filtrados de otra lista
    console.log("INDEXOFF",this.animals.indexOf('mono' ))//devuelve en que posicion en la lista esta un item a especificar
  }

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
