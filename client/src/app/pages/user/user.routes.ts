import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { Routes } from '@angular/router';

export const USER_ROUTES: Routes = [
  {
    path: 'user',
    component: UserListComponent
  },
  {
    path: 'user/:id',
    component: ProfileComponent
  },
  {
    path: 'user/:id/edit',
    component: UserEditComponent
  }
];
