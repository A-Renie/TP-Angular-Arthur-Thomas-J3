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
selectedProduct?: Product;

onSubmit(): void {
  if (this.productForm.valid) {
    const productFormValue = this.productForm.value;

    if (this.selectedProduct) {
      // 🔁 UPDATE
      const updatedProduct: Product = {
        id: this.selectedProduct.id,
        ...productFormValue,
      };

      this.productService.updateProduct(updatedProduct);
    } else {
      // ➕ CREATE
      this.productService.addProduct(productFormValue);
    }

    this.productForm.reset({ inStock: true });
    this.selectedProduct = undefined;
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
