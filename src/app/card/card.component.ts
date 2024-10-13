import { Component,Input, OnChanges, SimpleChanges } from '@angular/core';
import { Person } from '../app.component';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,ItemComponent,SearchComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnChanges {
  @Input() person:Person|null=null

  personal:boolean=true
  geo:boolean=false
  mess:boolean=false

  messages:String[]|undefined[]=[]
  
  constructor() {
    if (this.person?.messages) {
      this.messages = this.person.messages; // Assuming person.messages is also a `string[]`
      console.log(this.messages)
    }
  }

  public onPersonal(){
    this.personal=true
    this.geo=false
    this.mess=false
  }
  public onGeo(){
    this.personal=false
    this.geo=true
    this.mess=false
  }
  public onMess(){
    this.personal=false
    this.geo=false
    this.mess=true
    
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log('changes: ',changes['person'].currentValue['messages'])
      this.messages = changes['person'].currentValue['messages']; // Assuming person.messages is also a `string[]`
      console.log(this.messages)
  }

  search(data: string) {  // Cambiar el tipo de `data` a `string`
    console.log('search: ', data);
    if (this.person && this.person.messages) {  // Asegúrate de que `person` y `messages` existan
      if(data!==''){
        const filteredMessages = this.person.messages.filter((message) => message.includes(data)); // Cambiar para filtrar según `data`
        this.person.messages = filteredMessages;  // Asignar el nuevo array
      }else{
        this.person.messages=[...this.messages.map(String)]
      }
    }
  }
}
