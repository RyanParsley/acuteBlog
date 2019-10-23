import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Credentials } from '../../user/user';

@Component({
  selector: 'app-login-form',
  template: `
    <mat-card>
      <mat-card-title>{{ title }}</mat-card-title>
      <mat-card-content>
        <form id="authForm" [formGroup]="form" (ngSubmit)="submit(form.get('username').value)">
          <p>
            <mat-form-field>
              <input
                name="username"
                type="text"
                matInput
                placeholder="Username"
                formControlName="username"
              />
            </mat-form-field>
          </p>

          <p>
            <mat-form-field>
              <input
                name="password"
                type="password"
                matInput
                placeholder="Password"
                formControlName="password"
              />
            </mat-form-field>
          </p>

          <p *ngIf="errorMessage" class="loginError">
            {{ errorMessage }}
          </p>

          <p class="loginButtons">
            <a href="/signup">Already have an account?</a>
            <button type="submit" mat-button>{{ submitText }}</button>
          </p>
        </form>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        margin: 72px 0;
      }

      .mat-form-field {
        width: 100%;
        min-width: 300px;
      }

      mat-card-title,
      mat-card-content {
        display: flex;
        justify-content: center;
      }

      .loginError {
        padding: 16px;
        width: 300px;
        color: white;
        background-color: red;
      }

      .loginButtons {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
      }
    `,
  ],
})
export class LoginFormComponent {
  @Input()
  set pending(isPending: boolean) {
    if (isPending) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }
  @Input() submit!: () => void;

  @Input() errorMessage = '';
  @Input() submitText = 'Submit';

  @Input() title: string;

  @Output() submitted = new EventEmitter<Credentials>();

  form: FormGroup = new FormGroup({
    username: new FormControl('someUser'),
    password: new FormControl(''),
  });

  constructor(private router: Router) {
    this.title = 'Form Default Title';
  }
}
