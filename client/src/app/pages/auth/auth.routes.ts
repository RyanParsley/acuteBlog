import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { AnonymousGuard } from '../../shared/authentication/anonymous.guard';

export const AUTH_ROUTES: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [AnonymousGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AnonymousGuard]
  }
];
