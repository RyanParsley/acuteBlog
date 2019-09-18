import { Injectable } from '@angular/core';
import { User } from '../pages/user/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public login(user: User): Promise<any> {
    return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
      return true;
    }, 2000);
  });
  }
  public register(user: User): Promise<any> {
    return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
      return true;
    }, 2000);
  });
  }
}
