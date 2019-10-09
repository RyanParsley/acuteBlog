import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <app-login-form title="Welcome Back!" [submit]="submitLogin"></app-login-form>
  `,
  styles: [``]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitLogin(): void {
    alert('Login form submitted!');
  }
}
