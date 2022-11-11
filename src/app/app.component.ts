import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <nav >
        <a [routerLink]="['','home']">Home page</a>
        <a [routerLink]="['','user','list']">User</a>
      </nav>
  <router-outlet></router-outlet>
  `,
  styles: [`
  `]
})
export class AppComponent {
  
}
