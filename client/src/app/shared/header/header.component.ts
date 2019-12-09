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
  template: `
    <mat-sidenav-container>
      <mat-sidenav
        opened
        #sidenav
        role="navigation"
        mode="side"
        [(opened)]="opened"
        (opened)="events.push('open!')"
        (closed)="events.push('close!')"
      >
        <mat-nav-list>
          <a *ngFor="let item of navItems" mat-list-item [routerLink]="[item.link]">
            <mat-icon class="icon">{{ item.icon }}</mat-icon>
            <span class="label">{{ item.text }}</span>
          </a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar color="primary">
          <div fxHide.gt-xs>
            <button (click)="sidenav.toggle()" mat-icon-button>
              <mat-icon>menu</mat-icon>
            </button>
          </div>
          <div>
            <a id="header-title">Acute Blog </a>
          </div>
          <div fxFlex fxLayout fxLayoutAlign="flex-end" fxHide.xs>
            <ul fxLayout fxLayoutGap="20px" class="navigation-items">
              <ng-container *ngFor="let item of navItems">
                <li *ngIf="showItem(item)">
                  <a [routerLink]="[item.link]">
                    <mat-icon class="icon">{{ item.icon }}</mat-icon>
                    <span class="label">{{ item.text }}</span>
                  </a>
                </li>
              </ng-container>
              <li *ngIf="isLoggedIn()">
                <a (click)="logOut()">
                  <mat-icon class="icon">input</mat-icon>
                  <span class="label">Log Out</span>
                </a>
              </li>
            </ul>
          </div>
        </mat-toolbar>
        <main>
          <router-outlet></router-outlet>
        </main>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
      a {
        text-decoration: none;
        color: white;
      }

      a:hover,
      a:active {
        color: lightgray;
      }

      .navigation-items {
        list-style: none;
        padding: 0;
        margin: 0;
        cursor: pointer;
      }

      .icon {
        display: inline-block;
        height: 30px;
        margin: 0 auto;
        padding-right: 15px;
        text-align: center;
        vertical-align: middle;
        width: 15%;
      }

      .label {
        display: inline-block;
        line-height: 30px;
        margin: 0;
        width: 85%;
      }
      .mat-drawer-container {
        min-height: 70vh;
      }
    `
  ]
})
export class HeaderComponent {
  constructor(private router: Router) {}

  events: string[] = [];
  opened = false;

  navItems = [
    { icon: 'home', text: 'Home', link: '/' },
    { icon: 'dashboard', text: 'Users', link: '/user', condition: 'onlyAuth' },
    { icon: 'dashboard', text: 'Posts', link: '/post' },
    { icon: 'input', text: 'Log In', link: '/login', condition: 'onlyAnon' },
    { icon: 'input', text: 'Sign Up', link: '/signup', condition: 'onlyAnon' }
  ];

  showItem(item: NavItem) {
    if (!this.isLoggedIn() && item.condition === 'onlyAuth') {
      return false;
    }
    if (this.isLoggedIn() && item.condition === 'onlyAnon') {
      return false;
    }
    return true;
  }

  logOut(): void {
    localStorage.clear();
    this.router.navigate(['/post']);
  }

  isLoggedIn(): string | null {
    return localStorage.getItem('currentUser');
  }
}
