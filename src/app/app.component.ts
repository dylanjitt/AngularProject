import { ChangeDetectionStrategy,Component } from '@angular/core';
import { RouterOutlet,RouterLink, Router } from '@angular/router';
import { UserCardComponent } from "./user-card/user-card.component";
import { CalculatorComponent } from './calculator/calculator.component';
import { PersonsComponent } from './persons/persons.component';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { from } from 'rxjs/internal/observable/from';
import { filter, map, tap } from 'rxjs/operators';
import { AppColorsDirective } from './app-colors.directive';
import { FormControl, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateHtmlDirective } from './create-html.directive';
import { PurePipe } from './pure.pipe';
import { ImpurePipe } from './impure.pipe';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';

//interfaces
interface IPerson{
  name:string
  latName:string
  age?:number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserCardComponent,CalculatorComponent,PersonsComponent,CommonModule,CounterComponent,AppColorsDirective,CreateHtmlDirective,PurePipe,ImpurePipe,MatCardModule,MatButtonModule,RouterLink,FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  scoreControl=new FormControl<string>('',[Validators.required,Validators.min(1),Validators.max(100)])

  name:string='Patito'
  lastName:string='Fernandez'
  

  users=[{name: 'Marques Keith Brownlee',email:'Mkbhd@yt.net'},{name: 'Linus Sebastian',email:'linustechtips@lttstore.com'}]
  userMode:boolean=true
  selectedUser:any=this.users[0]

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
  youtube=from([1,3,2,4,6,7,8])
// creación de Variable para probar NgIf y ngSwitch
  togg:boolean=true

  constructor(private router:Router){

    this.youtube.subscribe(res=>{console.log('SUB 1: ',res)})

    this.scoreControl.valueChanges.subscribe((res)=>{
      console.log('changes: ',res)
    })
    
    // console.log("subtract",this.subtract(8,4))
    // console.log("MAP",this.animals.map((animal)=>(animal+ ' peruano')   ))//genera nuevo array
    // console.log("FOREACH",this.animals.forEach((animal)=>(animal+ ' argentino')   ))//usa elementos del viejo array
    // console.log("FIND",this.animals.find((animal)=>animal==='mono' ))//busca en la lista
    // console.log("FILTER",this.animals.find((animal)=>animal==='mono' ))//devuelve array con los items filtrados de otra lista
    // console.log("INDEXOFF",this.animals.indexOf('mono' ))//devuelve en que posicion en la lista esta un item a especificar

    //desestructuración
    // const {name,age} = this.person

    // console.log('desestructuracion: ',name,age)

    // let both =[...this.students,...this.parents]//street var, para que analice variable por variable en la lista 
    // console.log("spreed operator: ",both)// tambien sirve para unir 2 objetos json
    // console.log("REST operator", this.sum(2,4))
    // console.log("REDUCE operator", this.reduce(2,4,6))

    // console.log("Nullish Coalesing: ",this.var2 ?? this.var3)
    // console.log("OR: ",this.var2 || this.var1)

  }

  public toggle(){
    this.togg=!this.togg
  }
  public toggleuser(){
    this.userMode=!this.userMode
    if (this.userMode){
      this.selectedUser=this.users[0]
    }else if (this.userMode==false){
      this.selectedUser=this.users[1]
    }
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

  public getArray(){
    const persons:number[]=[1,2,3,4,5]
    let odd:string[]=[]
    for(let i=0;i<persons.length;i++){
      if (persons[i]%2==0){
        console.log("person ="+persons[i])
        odd=[...odd,"person ="+persons[i]] 
      }
      
    }
    return odd
  }

  public recieveData(data:any){
    console.log("Taylor Swift Sucks")
    console.log(data)

  }
  result:number=0

  public setRes(data:any){
    this.result=data
  }

  addVideo(){
    this.youtube.pipe(
      map((res: number)=>{
        //console.log('MAP OPERATOR RXJS: ',res)
        if(res%2==0){
          return res
        }else{
          return null
        }
      }),
      tap((res)=>{console.log('VALUE: ',res)}),
      filter((res:number|null)=> res !== null)
    ).subscribe(res=>console.log("SUB 2: ",res))
  }
  //2DO PARCIAL:
  public getColor(value:string){
    console.log(value)
  }

  userCardCreated:boolean=true

  //funciones puras
  public sumPure(a:number,b:number):number{
    return a+b
  }

  public sumImpure(a:number,b:number):number{
    return a+b+Math.random()
  }
  public addNumber(){
    this.students=[...this.students,12]
  }

  public goToStudentModule(){
    this.router.navigate(['student'])
  }

  public goToCard(){
    this.router.navigate(['card',1])
  }
  
  public onCalc(){
    this.router.navigate(['calculator'],{queryParams:{name:'eminem',lastName:'mathers'}})
  }

  public onSubmit(data:any){
    console.log('submit: ',data)
  }

  public onPrnt(){
    console.log('score control: ',this.scoreControl)
  }

}
