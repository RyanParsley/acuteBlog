import { Component, OnInit } from '@angular/core';
import { UserFilter } from '../user-filter';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  template: `
    <div fxLayout="row" fxLayoutAlign="center center" class="content">
      <mat-card class="card">
        <mat-card-title fxLayout.gt-xs="row" fxLayout.xs="column">
          <h3>Users</h3>
          <a [routerLink]="['/user/new']" mat-raised-button color="primary"> <mat-icon>add</mat-icon> Add User </a>
        </mat-card-title>
        <mat-card-content>
          <mat-table #table [dataSource]="userList">
            <ng-container matColumnDef="id">
              <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>
              <mat-cell *matCellDef="let user"> {{ user.id }} </mat-cell>
            </ng-container>
            <ng-container matColumnDef="name">
              <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
              <mat-cell *matCellDef="let user">
                <a [routerLink]="['../user', user.id]">
                  {{ user.name }}
                </a>
              </mat-cell>
            </ng-container>
            <ng-container matColumnDef="actions">
              <mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>
              <mat-cell *matCellDef="let user">
                <a [routerLink]="['../user', user.id, 'edit']" type="button">
                  <mat-icon class="icon">update</mat-icon>
                </a>
                <a type="button">
                  <mat-icon class="icon">delete</mat-icon>
                </a>
              </mat-cell>
            </ng-container>
            <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
            <mat-row *matRowDef="let row; columns: displayedColumns"></mat-row>
          </mat-table>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [
    `
      mat-cell {
        a {
          text-decoration: none;
          color: inherit;
        }
      }
      .mat-column-name {
        flex: 7;
      }
    `
  ]
})
export class UserListComponent implements OnInit {
  filter = new UserFilter();
  selectedUser: User = { id: -1, name: '', email: '', image: '' };
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
