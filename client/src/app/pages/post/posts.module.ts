import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostListComponent } from './post-list/post-list.component';



@NgModule({
  declarations: [PostCreateComponent, PostEditComponent, PostListComponent],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
