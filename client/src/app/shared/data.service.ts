import { Injectable } from '@angular/core';
import { User } from '../pages/user/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}

  public login(user: User): Promise<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
        console.log('Logged in as: ', user);
        return true;
      }, 2000);
    });
  }
  public register(user: User): Promise<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
        console.log('Registered user: ', user);
        return true;
      }, 2000);
    });
  }
}
