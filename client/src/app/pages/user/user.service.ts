import { User } from './user';
import { UserFilter } from './user-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: User[] = [];

  constructor(private http: HttpClient) {}

  findById(id: string): Observable<User> {
    const url = `${environment.baseUrl}/users/${id}`;
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<User>(url, { headers });
  }

  load(): void {
    const url = `${environment.baseUrl}/users/`;
    const headers = new HttpHeaders().set('Accept', 'application/json');

    this.http.get<User[]>(url, { headers }).subscribe(
      result => {
        this.userList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  search(filter: UserFilter): void {
    this.find(filter).subscribe(
      result => {
        this.userList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: UserFilter): Observable<User[]> {
    const url = `${environment.baseUrl}/users`;
    const headers = new HttpHeaders().set('Accept', 'application/json');

    const params = {
      id: filter.id.toString()
    };

    return this.http.get<User[]>(url, { params, headers });
  }

  save(entity: User): Observable<User> {
    const url = `${environment.baseUrl}/users`;
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.post<User>(url, entity, { headers });
  }
}
