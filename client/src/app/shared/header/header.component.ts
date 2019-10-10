import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  events: string[] = [];
  opened = false;

  navItems = [
    { icon: 'input', text: 'LogOut', link: '/' },
    { icon: 'dashboard', text: 'User', link: '/user' },
    { icon: 'home', text: 'Home', link: '/' },
    { icon: 'input', text: 'Login', link: '/login' }
  ];
}
