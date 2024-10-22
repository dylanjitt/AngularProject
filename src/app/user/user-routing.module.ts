import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  {
    path: ':id',  // Route for the UserComponent with a dynamic user ID parameter
    component: UserComponent,
    children: [
      {
        path: 'notifications',  // Route for the NotificationsComponent inside the UserComponent
        component: NotificationsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
