import { Component, signal } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
  
})
export class App {
  protected readonly title = signal('Projet fil rouge');
   currentView = signal<'products' | 'users'>('products');

  showProducts(): void {
    this.currentView.set('products');
  }

  showUsers(): void {
    this.currentView.set('users');
  }
}
