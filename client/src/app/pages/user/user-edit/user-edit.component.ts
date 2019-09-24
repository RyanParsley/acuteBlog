import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
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
        this.errors = 'Error loading';
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
        this.errors = 'Error saving';
      }
    );
  }
}
