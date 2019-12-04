import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-edit',
  template: `
    <div class="card">
      <div class="header">
        <h1 class="title">Profile</h1>
      </div>
      <div class="content">
        <p *ngIf="errors">{{ errors }}</p>
        <form *ngIf="user">
          <label>Id:</label>
          <input [(ngModel)]="user.id" name="id" class="form-control">
          <label>Name:</label>
          <input [(ngModel)]="user.name" name="name" class="form-control">
          <button (click)="save()">Save</button>
        </form>
      </div>
    </div>
  `,
  styles: [``]
})
export class UserEditComponent implements OnInit {
  id = -1;
  user: User = { id: -1, name: '', email: '', image: ''};
  errors = '';

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this
    .route
    .params
    .pipe(
      map(p => p.id),
        switchMap(id => {
        return this.userService.findById(id);
      })
    )
    .subscribe(
      user => {
        this.user = user;
        this.errors = '';
      },
      err => {
        this.errors = `Error loading: ${err}`;
      }
    );
  }

  save() {
    this.userService.save(this.user).subscribe(
      user => {
        this.user = user;
        this.errors = 'Save was successful!';
      },
      err => {
        this.errors = `Error saving: ${err}`;
      }
    );
  }
}
