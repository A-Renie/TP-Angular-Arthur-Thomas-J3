import { Component } from '@angular/core';

@Component({
  selector: 'app-product-search',
  standalone: false,
  templateUrl: './product-search.html',
  styleUrl: './product-search.css',
})
export class ProductSearch {
  // La variable de stockage
  searchTerm: string = '';
  search(): void {
    console.log(this.searchTerm);
  }
}
