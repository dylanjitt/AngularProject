import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { data,socialNetworks } from './data (1)';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { from } from 'rxjs/internal/observable/from';
import { filter, map, tap } from 'rxjs/operators';
import { UserComponent } from './uuser/user.component';



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
  imports: [RouterOutlet,CommonModule,RouterLink,
    UserComponent
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

  addNewContent(id: number, platform: string, type: string, platformType: string) {
    const socialStream$ = of({ id, platform, type, platformType }); // Wrapping social parameters in an observable

    socialStream$.pipe(
      tap(() => console.log(`New content added: ${platform}, Type: ${type}`)),
      map(() => {
        // Filter users who are subscribed to the given platform (based on id)
        return this.users.filter((user: User) => user.subscriptions.includes(id));
      }),
      tap(users => console.log('Users subscribed to this platform:', users)),
      tap(users => {
        this.users.forEach(user => {
          if (platformType === 'premium' && user.subscriptionType !== 'premium') {
            console.log(`${user.name} does not have premium access to ${platform}`);
            return; // Skip if the user doesn't have premium access
          }

          if (user.amountAvailable > 0) {
            const notification = `${platform} added a new ${type}`;
            user.notifications.push(notification);
            console.log(`Notification for ${user.name}: ${notification}`);

            if (platformType === 'premium') {
              user.amountAvailable -= 5; // Deduct 5 if it's premium content
              console.log(`${user.name} now has ${user.amountAvailable} amount available.`);
            }
          } else {
            console.log(`${user.name} has no amount available.`);
          }
        });
      })
    ).subscribe();
  }

}

export const users = new AppComponent().users;
