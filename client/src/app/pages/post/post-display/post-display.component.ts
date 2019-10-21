import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-post',
  template: `
    <div class="container">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
  `,
  styles: [`
    .container {
      max-width: 960px;
      margin: 0 auto;
  `]
})
export class PostDisplayComponent implements OnInit {
  id = -1;
  post: Post = { id: -1, title: '', authorId: -1, body: ''};
  errors = '';

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit() {
    this
    .route
    .params
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
        this.errors = 'Error loading';
      }
    );
  }
}
