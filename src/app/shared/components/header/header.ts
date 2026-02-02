import { Component,Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title: string = 'Projet fil rouge';
   searchTerm = '';

  @Output() searchChanged = new EventEmitter<string>();

  emitSearch(): void {
    this.searchChanged.emit(this.searchTerm);
  }
  
}
