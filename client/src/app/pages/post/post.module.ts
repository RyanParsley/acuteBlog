import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';
import { MatTableModule } from '@angular/material/table';
import { PostDisplayComponent } from './post-display/post-display.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostListComponent } from './post-list/post-list.component';
import { POST_ROUTES } from './post.routes';

@NgModule({
  declarations: [PostCreateComponent, PostEditComponent, PostListComponent, PostDisplayComponent],
  imports: [CommonModule, FormsModule, MatTableModule, MaterialModule, RouterModule.forChild(POST_ROUTES)]
})
export class PostModule {}
