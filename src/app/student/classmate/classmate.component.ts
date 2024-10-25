import { Component } from '@angular/core';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-classmate',
  // standalone: true,
  // imports: [],
  templateUrl: './classmate.component.html',
  styleUrl: './classmate.component.scss'
})
export class ClassmateComponent {

  newScore:number[]=[]
  constructor (
    private exam:ExamService
  ){
    this.exam.getScores().subscribe(scores=> {
      console.log('SCORES:',scores)
      this.newScore=scores
    })
  }
}
