import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header>
      <router-outlet></router-outlet>
    </app-header>
    <app-footer></app-footer>
  `
})
export class AppComponent {
  title = 'Acute Blog';
}
