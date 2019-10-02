import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupComponent } from './signup/signup.component';
import { MaterialModule } from '../../shared/material/material.module';
import { AUTH_ROUTES } from './auth.routes';

@NgModule({
  declarations: [LoginComponent, SignupComponent, LoginFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(AUTH_ROUTES)
  ]
})
export class AuthModule { }
