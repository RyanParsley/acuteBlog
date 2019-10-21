import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-create',
  template: `
    <div class="card">
      <div class="header">
        <h1 class="title">Create a User</h1>
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
  `,
  styles: ['']
})
export class UserCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
