import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="container">
      <h1>Oh no!</h1>
      <p>Page not found</p>
    </div>
  `,
  styles: [``]
})
export class NotFoundComponent {
  constructor() { }
}
