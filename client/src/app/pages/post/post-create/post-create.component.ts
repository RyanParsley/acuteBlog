import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  template: `
    <div class="container">
      <div class="card">
        <div class="header">
          <h1 class="title">Create a Post</h1>
        </div>
        <div class="content">
          <p *ngIf="errors">{{ errors }}</p>
          <form >
            <label>Id:</label>
            <input [(ngModel)]="post.id" name="id" class="form-control">
            <label>Name:</label>
            <input [(ngModel)]="post.name" name="name" class="form-control">
            <button (click)="save()">Create</button>
          </form>
        </div>
      </div>
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
export class PostCreateComponent implements OnInit {
  post = { id: '', name: '' };

  constructor() { }

  ngOnInit() { }
}
