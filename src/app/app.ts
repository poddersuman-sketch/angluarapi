import { Component, signal } from '@angular/core';
import { RouterModule, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list.component/product-list.component';

@Component({
  selector: 'app-root',
  
  //template: `<app-product></app-product>`,
  template: `<a routerLink="/" routerLinkActive="true">Home</a>  |  
  &nbsp;<a routerLink="/Login" routerLinkActive="true">Login</a>&nbsp; |
  &nbsp;<a routerLink="/Sample" routerLinkActive="true">Sample</a> 
  <p>Fetching via Router <br><router-outlet></router-outlet>`,
  styleUrl: './app.css',
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive]
})
export class App {
  protected readonly title = signal('angular-First-Api-Integration');
}
