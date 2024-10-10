import { Component,Input } from '@angular/core';
import { Person } from '../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() person:Person|null=null

  personal:boolean=false
  geo:boolean=false
  mess:boolean=false

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
}
