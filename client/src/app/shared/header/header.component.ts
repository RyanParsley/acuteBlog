import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface NavItem {
  icon: string;
  text: number;
  link: string;
  condition?: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  events: string[] = [];
  opened = false;

  navItems = [
    { icon: 'home', text: 'Home', link: '/' },
    { icon: 'dashboard', text: 'Users', link: '/user', condition: 'onlyAuth'},
    { icon: 'dashboard', text: 'Posts', link: '/post' },
    { icon: 'input', text: 'Log In', link: '/login', condition: 'onlyAnon' }
  ];

  showItem(item: NavItem) {
    if (!this.isLoggedIn() && item.condition === 'onlyAuth') { return false; }
    if (this.isLoggedIn() && item.condition === 'onlyAnon') { return false; }
    return true;
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/post']);
  }

  isLoggedIn() {
    return localStorage.getItem('currentUser');
  }
}
