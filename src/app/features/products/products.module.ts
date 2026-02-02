import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProductList } from './components/product-list/product-list.component';
import { ProductSearchComponent } from './components/product-search/product-search';

@NgModule({
  declarations: [
    ProductList,
    ProductSearchComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ProductList,
    ProductSearchComponent
  ]
})
export class ProductsModule { }