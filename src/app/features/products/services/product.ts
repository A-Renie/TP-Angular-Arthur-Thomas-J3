import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../../core/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private idCounter = 3;
  private productsSubject = new BehaviorSubject<Product[]>([
    {
      id: 0,
      name: 'SUPER WIDGET',
      price: 19.99,
      releaseDate: '2026-02-02',
      inStock: true,
    },
    {
      id: 1,
      name: 'GADGET PRO',
      price: 299.5,
      releaseDate: '2024-12-01',
      inStock: false,
    },
    {
      id: 2,
      name: 'Trotinette électrique',
      price: 300.99,
      releaseDate: '2024-12-01',
      inStock: true,
    },
  ]);

  products$ = this.productsSubject.asObservable();
  addProduct(product: Omit<Product, 'id'>): void {
    const newProduct: Product = {
      id: this.idCounter++,
      ...product,
    };

    this.productsSubject.next([...this.productsSubject.value, newProduct]);
  }
  deleteProduct(id: number): void {
    this.productsSubject.next(this.productsSubject.value.filter((p) => p.id !== id));
  }
  private selectedProductSubject = new BehaviorSubject<Product | null>(null);
  selectedProduct$ = this.selectedProductSubject.asObservable();

  selectProduct(product: Product): void {
    this.selectedProductSubject.next(product);
  }

  updateProduct(updated: Product): void {
    const products = this.productsSubject.value.map((p) => (p.id === updated.id ? updated : p));

    this.productsSubject.next(products);
  }
}
