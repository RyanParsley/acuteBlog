import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <app-login-form title="Welcome Back!" [submit]="submitLogin" submitText="Log In"></app-login-form>
  `,
  styles: [``]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  submitLogin(username: string): void {
    alert('Login form submitted!');
    localStorage.setItem('currentUser', username);
    this.router.navigate(['/post']);
  }
}
