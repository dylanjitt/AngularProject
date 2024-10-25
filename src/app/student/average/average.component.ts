import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { ExamService } from '../exam.service';
@Component({
  selector: 'app-average',
  // standalone: true,
  // imports: [],
  templateUrl: './average.component.html',
  styleUrl: './average.component.scss'
})
export class AverageComponent {

  constructor(private auth: AuthService,private exam:ExamService){}

  login(){
    console.log('Logged user: ',this.auth.login())
  }
  send(){
    this.exam.sendNewScore([79,80,60])
  }
}
