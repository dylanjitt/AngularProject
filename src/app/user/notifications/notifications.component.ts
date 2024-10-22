import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { users, User } from '../../app.component'; 
@Component({
  selector: 'app-notifications',
  // standalone: true,
  // imports: [],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent implements OnInit {
  user: User | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const userId = this.route.parent?.snapshot.paramMap.get('id');
    console.log('notif user: ',userId)
    if (userId) {
      this.user = users[+userId - 1];  // Find the user by ID
    }
  }
}
