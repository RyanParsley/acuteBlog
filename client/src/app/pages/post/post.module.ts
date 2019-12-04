import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';
import { PostDisplayComponent } from './post-display/post-display.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './post.service';
import { POST_ROUTES } from './post.routes';

@NgModule({
  declarations: [PostCreateComponent, PostEditComponent, PostListComponent, PostDisplayComponent],
  providers: [PostService],
  imports: [CommonModule, FormsModule, MaterialModule, RouterModule.forChild(POST_ROUTES)]
})
export class PostModule {}
