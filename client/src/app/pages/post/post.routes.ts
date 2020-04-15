import { PostListComponent } from './post-list/post-list.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostDisplayComponent } from './post-display/post-display.component';
import { AuthGuard } from '../../shared/authentication/authentication.guard';
import { Routes } from '@angular/router';

export const POST_ROUTES: Routes = [
  {
    path: '',
    component: PostListComponent
  },
  {
    path: 'new',
    component: PostCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id',
    component: PostDisplayComponent
  },
  {
    path: ':id/edit',
    component: PostEditComponent,
    canActivate: [AuthGuard]
  }
];
