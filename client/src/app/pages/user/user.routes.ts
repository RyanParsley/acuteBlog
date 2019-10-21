import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { AuthGuard } from '../../shared/authentication/authentication.guard';
import { Routes } from '@angular/router';

export const USER_ROUTES: Routes = [
  {
    path: 'user',
    component: UserListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/:id',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/:id/edit',
    component: UserEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/new',
    component: UserCreateComponent
  }
];
