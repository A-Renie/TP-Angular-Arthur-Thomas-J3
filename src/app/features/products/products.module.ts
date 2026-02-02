import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductList } from './components/product-list/product-list.component';
import { ProductSearchComponent } from './components/product-search/product-search';
import { ProductCreate } from './components/product-create/product-create';


@NgModule({
  declarations: [
    ProductList,
    ProductSearchComponent,
    ProductCreate
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    ProductList,
    ProductSearchComponent,
    ProductCreate
  ]
})
export class ProductsModule { }