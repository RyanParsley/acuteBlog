import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
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
