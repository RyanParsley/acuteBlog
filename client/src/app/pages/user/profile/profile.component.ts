import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  template: `
    <div class="container" fxLayout="row" fxLayout.xs="column" fxLayoutWrap fxLayoutGap="0.5%" fxLayoutAlign="center">
      <h1>Welcome, {{ user.name }}</h1>
      <div fxFlex="20%">
        <img [src]="user.image" alt="Image of {{ user.name }}" />
      </div>
      <div fxFlex="20%">
        <p>Bio will go here</p>
      </div>
    </div>
  `
})
export class ProfileComponent implements OnInit {
  id = -1;
  user: User = { id: -1, name: '', email: '', image: '' };
  errors = '';

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
    this.route.params
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
}
