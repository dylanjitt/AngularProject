import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { data } from './data';
import { SearchComponent } from './search/search.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';

//const typedData: { [key: string]: Person } = data;

export interface Person {
  name: string;
  lastName: string;
  type: 'student' | 'professor'; // tipo puede ser 'student' o 'professor'
  averageScore?:number; // opcional, solo para estudiantes
  subject?: string; // opcional, solo para profesores
  address: string;
  country: string;
  province: string;
  messages: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SearchComponent,ItemComponent,ListComponent,CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-course-2024';

  students:Person[]=[]
  professors:Person[]=[]
  persons:Person[]=[]
  person=this.persons[0]

  constructor() {
    this.initializeData();
    this.persons=[...this.students,...this.professors]
    this.person=this.persons[0]
    console.log(this.person)
  }

  initializeData() {
    for (const key in data) {
      const person: any = data[key as keyof typeof data]; // Usar `key as keyof typeof data`
      //console.log(person.name);

      if (person.type === 'student') {
        const averageScore = (person.firstTestScore + person.secondTestScore + person.finalTestScore) / 3;
        
        // Correctly create a Person object and push it into the students array
        this.students.push({
          name: person.name,
          lastName: person.lastName,
          type: person.type,
          averageScore: averageScore, // opcional, solo para profesores
          address: `${person.address.zone} ${person.address.street} ${person.address.number}`,
          country: person.country,
          province: person.province,
          messages: person.messages,
        });
      } else if (person.type === 'professor') {
        this.professors.push({
          name: person.name,
          lastName: person.lastName,
          type: person.type, // opcional, solo para estudiantes
          subject: person.subject, // opcional, solo para profesores
          address: `${person.address.zone} ${person.address.street} ${person.address.number}`,
          country: person.country,
          province: person.province,
          messages: person.messages,
        });
      }
    }
  }



}
