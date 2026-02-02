import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProductList } from './components/product-list/product-list.component';
import { ProductSearch } from './components/product-search/product-search';

@NgModule({
  declarations: [
    ProductList,
    ProductSearch
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ProductList,
    ProductSearch
  ]
})
export class ProductsModule { }