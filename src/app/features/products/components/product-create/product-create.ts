import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-create',
  standalone: false,
  templateUrl: './product-create.html',
  styleUrl: './product-create.css',
})
export class ProductCreateComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder , private productService: ProductService) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [null, [Validators.required, Validators.min(0)]],
      releaseDate: ['', Validators.required],
      inStock: [true],
    });
    
  }
  

   onSubmit(): void {
    if (this.productForm.valid) {
      const product: Product = this.productForm.value;
      this.productService.addProduct(product); 
      this.productForm.reset({ inStock: true }); 
    }
  }
  get name() {
    return this.productForm.get('name');
  }
  get price() {
    return this.productForm.get('price');
  }
  get releaseDate() {
    return this.productForm.get('releaseDate');
  }
}
