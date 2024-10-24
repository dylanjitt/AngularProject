import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { users, User } from '../../app.component';  // Import users from AppComponent

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  // user: User | undefined;

  // constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // const userId = this.route.snapshot.paramMap.get('id');
    // console.log('user: ',userId)
    // if (userId) {
    //   this.user = users[+userId - 1];  // Find the user by ID
    // }
  }
}
