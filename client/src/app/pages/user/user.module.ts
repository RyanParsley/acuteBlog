import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared/material/material.module';
import { MatTableModule } from '@angular/material/table';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { ProfileComponent } from './profile/profile.component';
import { USER_ROUTES } from './user.routes';

@NgModule({
  declarations: [UserEditComponent, UserListComponent, UserCreateComponent, ProfileComponent],
  imports: [CommonModule, FormsModule, MaterialModule, MatTableModule, RouterModule.forChild(USER_ROUTES)]
})
export class UserModule {}
