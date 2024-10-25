import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-average',
  // standalone: true,
  // imports: [],
  templateUrl: './average.component.html',
  styleUrl: './average.component.scss'
})
export class AverageComponent {

  constructor(private auth: AuthService){}

  login(){
    console.log('Logged user: ',this.auth.login())
  }
}
