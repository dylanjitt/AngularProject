import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Person{
  gender:string,
  name:string,
  age:number
}

@Component({
  selector: 'app-persons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.scss'
})
export class PersonsComponent {

  persons:Person[]=[
    {gender:"Female",name:"Yoko Ono",age:19},
    {gender:"Male",name:"Daniel Fernandez",age:15},
    {gender:"Male",name:"Sam Bridges",age:20} 
  ]

  totalMale:number=0
  totalFemale:number=0

  totalDiscount:number=0

  public Males(persons:Person[]):number{
    let total=0
    for (let person of persons){
      if (person.gender=="Male"){
        total++
      }
    }
    return total
  }

  public Females(persons:Person[]):number{
    let total=0
    for (let person of persons){
      if (person.gender=="Female"){
        total++
      }
    }
    return total
  }

  public Disccount(persons:Person[]):number{
    let total=0
    for (let person of persons){
      if (person.age>18){
        total++
      }
    }
    return total
  }

  public removeDiscount(){
    this.persons=this.persons.filter((person)=>person.age<=18)
  }

}
