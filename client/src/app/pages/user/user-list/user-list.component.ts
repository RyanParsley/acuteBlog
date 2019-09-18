import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserFilter } from '../user-filter';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  filter = new UserFilter();
  selectedUser: User = { id: -1, name: '', email: '' };
  displayedColumns: string[] = ['id', 'name', 'actions'];

  get userList(): User[] {
    return this.userService.userList;
  }

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.load();
  }

  search(): void {
    this.userService.search(this.filter);
  }

  select(selected: User): void {
    this.selectedUser = selected;
  }
}
