import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  template: `
    <app-login-form title="Welcome to the party pal!"></app-login-form>
  `,
  styles: [``]
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
