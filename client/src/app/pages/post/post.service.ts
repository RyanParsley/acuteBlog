import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) {}

  postList: Post[] = [];

  displayedColumns: string[] = ['title'];

  load(id: string) {
    const url = `${environment.baseUrl}/posts/${id}`;
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<Post>(url, { headers });
  }

  loadAll() {
    const url = `${environment.baseUrl}/posts/`;
    const headers = new HttpHeaders().set('Accept', 'application/json');

    this.http.get<Post[]>(url, { headers }).subscribe(
      result => {
        this.postList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  save(entity: Post): Observable<Post> {
    const url = `${environment.baseUrl}/posts`;
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.post<Post>(url, entity, { headers });
  }

  delete(id: string) {
    console.log('delete: ', id);
  }
}
