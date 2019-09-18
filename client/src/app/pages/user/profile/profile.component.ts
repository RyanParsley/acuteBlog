import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
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
        this.errors = 'Error loading';
      }
    );
  }
}
