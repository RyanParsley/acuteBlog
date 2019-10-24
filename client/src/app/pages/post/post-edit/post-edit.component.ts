import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  template: `
    <div class="container">
      <h1 class="title">Edit Post</h1>
      <p>edit works!</p>
    </div>
  `,
  styles: [`
    .container {
      max-width: 960px;
      margin: 0 auto;
      padding: 1em;
    }
  `]
})
export class PostEditComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
