import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { data,socialNetworks } from './data (1)';
import { CommonModule } from '@angular/common';
import { from } from 'rxjs/internal/observable/from';
import { filter, map, tap } from 'rxjs/operators';
// import { UserComponent } from './uuser/user.component';



export interface User {
  name: string;
  user_id:string;
  age: number;
  status: string;
  subscriptionType: string;
  amountAvailable: number;
  subscriptions: number[];   // List of integers (IDs of subscribed platforms)
  notifications: string[];   // List of notification messages
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterLink
    // UserComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-course-2024';

  socials=Object.entries(socialNetworks)
  users: User[] = Object.entries(data).map(([key, value]) => value as User);

  constructor(){
    console.log(this.users)
    console.log(this.socials)
  }

}

export const users = new AppComponent().users;
