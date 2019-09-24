import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
