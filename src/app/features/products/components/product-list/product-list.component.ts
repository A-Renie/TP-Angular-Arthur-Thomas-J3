import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: false
})
export class ProductList implements OnInit {
  products: Product[] = [];

  ngOnInit(): void {
    // Simulation du chargement des données
    this.products = [
      { 
        id: 1, 
        name: 'Super Widget', 
        price: 19.99, 
        releaseDate: new Date(), 
        inStock: true 
      },
      { 
        id: 2, 
        name: 'Gadget Pro', 
        price: 299.50, 
        releaseDate: new Date('2024-12-01'), 
        inStock: false 
      },
      { 
        id: 3, 
        name: 'Mega Tool', 
        price: 149.99, 
        releaseDate: new Date('2025-01-15'), 
        inStock: true 
      },
      { 
        id: 4, 
        name: 'Ultra Device', 
        price: 89.00, 
        releaseDate: new Date('2024-06-20'), 
        inStock: false 
      }
    ];
  }
}