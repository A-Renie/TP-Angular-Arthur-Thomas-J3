import { Component } from '@angular/core';

@Component({
  selector: 'app-product-search',
  standalone: false,
  templateUrl: './product-search.html',
  styleUrl: './product-search.css',
})
export class ProductSearchComponent  {
  searchTerm: string = '';
  search(): void {
    console.log(this.searchTerm);
  }
}
