import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  standalone: false,
  templateUrl: './product-create.html',
  styleUrl: './product-create.css',
})
export class ProductCreateComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [null, [Validators.required, Validators.min(0)]],
      releaseDate: ['', Validators.required],
      inStock: [true],
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
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
