import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-list',
  template: `
    <div class="container">
      <div fxLayout="row" fxLayoutAlign="center center" class="content">
        <mat-card class="card" >
          <mat-card-title fxLayout.gt-xs="row" fxLayout.xs="column">
            <h3>Posts</h3>
            <a *ngIf="isUserLoggedIn" [routerLink]="['/post/new']" mat-raised-button color="primary">
              <mat-icon>add</mat-icon> Add Post
            </a>
          </mat-card-title>
          <mat-card-content>
              <mat-table #table [dataSource]="postList">
                <ng-container matColumnDef="title">
                  <mat-header-cell *matHeaderCellDef> Title </mat-header-cell>
                  <mat-cell *matCellDef="let post">
                    <a [routerLink]="['../post', post.id ]">
                      {{post.title}}
                    </a>
                  </mat-cell>
                </ng-container>
                <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
                <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
              </mat-table>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    mat-cell {
      a {
        text-decoration: none;
        color: inherit;
      }
    }
    .mat-column-name {
      flex: 7;
    }`
  ]
})
export class PostListComponent implements OnInit {

  displayedColumns: string[] = ['title'];

  get postList(): Post[] {
    return this.postService.postList;
  }

  get isUserLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser') || false;
  }

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.loadAll();
  }
}
