import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'post',
    loadChildren: () => import('./pages/post/post.module').then(mod => mod.PostModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then(mod => mod.UserModule)
  },
  { path: '', pathMatch: 'full', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
