import { Component } from '@angular/core';

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
  styles: [``]
})
export class PostCreateComponent {
  post = { id: '', name: '' };

  constructor() { }
}
