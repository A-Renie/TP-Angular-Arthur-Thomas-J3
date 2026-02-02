import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProductList } from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    ProductList
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ProductList
  ]
})
export class ProductsModule { }