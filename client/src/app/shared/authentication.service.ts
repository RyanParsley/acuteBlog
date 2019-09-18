import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from './storage';
import { User } from '../pages/user/user';
import { AuthResponse } from './authresponse';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    @Inject(BROWSER_STORAGE) private storage: Storage,
    private dataService: DataService
  ) { }

  public getToken(): string {
    return this.storage.getItem('loc8r-token') || '';
  }

  public saveToken(token: string): void {
    this.storage.setItem('user-token', token);
  }

  public login(user: User): Promise<any> {
    return this.dataService.login(user)
      .then((authResp: AuthResponse) => this.saveToken(authResp.token));
  }

  public logout(): void {
    this.storage.removeItem('user-token');
  }

  public register(user: User): Promise<any> {
    return this.dataService.register(user)
      .then((authResp: AuthResponse) => this.saveToken(authResp.token));
  }
}


