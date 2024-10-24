import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { data,socialNetworks } from './data (1)';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { from } from 'rxjs/internal/observable/from';
import { filter, map, tap } from 'rxjs/operators';
import { UserComponent } from './uuser/user.component';

export interface SocialItem {
  id: number;
  value: string;
}


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
  socialNames: SocialItem[] = [];
  constructor(){
    console.log(this.users)
    console.log(this.socials)
    this.socialNames = this.socials.map(item => ({id:item[1].id,value:item[1].platform}));
    //console.log('Social Platform Names:', this.socialNames);
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
        users.forEach(user => {
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

  // Function to handle adding a subscription
  addItem(userId: string, socialId: number) {
    // Find the index of the user in the array
    const userIndex = this.users.findIndex((user) => user.user_id === userId);
    if (userIndex !== -1) {
      const user = this.users[userIndex];
      if (!user.subscriptions.includes(socialId)) {
        // Modify the subscriptions array and update the user object in the array
        this.users[userIndex] = {
          ...user,
          subscriptions: [...user.subscriptions, socialId], // Ensure reactivity by creating a new array
        };
        console.log(`Added subscription to ${socialId} for user ${user.name}`);
        
      }
    }
  }

  // Function to handle removing a subscription
  removeItem(userId: string, socialId: number) {
    // Find the index of the user in the array
    const userIndex = this.users.findIndex((user) => user.user_id === userId);
    if (userIndex !== -1) {
      const user = this.users[userIndex];
      if (user.subscriptions.includes(socialId)) {
        // Modify the subscriptions array and update the user object in the array
        this.users[userIndex] = {
          ...user,
          subscriptions: user.subscriptions.filter((id) => id !== socialId), // Remove the socialId
        };
        console.log(`Removed subscription to ${socialId} for user ${user.name}`);
        
      }
    }
  }

  changeSub(userId: string, value: string) {
    // Find the index of the user in the array
    const userIndex = this.users.findIndex((user) => user.user_id === userId);
    if (userIndex !== -1) {
      const user = this.users[userIndex];
      // Update the subscriptionType based on the value passed ('premium' or 'free')
      this.users[userIndex] = {
        ...user,
        subscriptionType: value // Change the subscriptionType to the new value
      };
      console.log(`Changed subscription type to ${value} for user ${user.name}`);
    }
  }

}

// export const users = new AppComponent().users;
