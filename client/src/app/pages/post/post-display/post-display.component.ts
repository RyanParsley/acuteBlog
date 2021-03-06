import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  template: `
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  `
})
export class PostDisplayComponent implements OnInit {
  id = -1;
  post: Post = { id: -1, title: '', authorId: -1, body: '' };
  errors = '';

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit() {
    this.route.params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          return this.postService.load(id);
        })
      )
      .subscribe(
        post => {
          this.post = post;
          this.errors = '';
        },
        err => {
          this.errors = `Error loading: ${err}`;
        }
      );
  }
}
