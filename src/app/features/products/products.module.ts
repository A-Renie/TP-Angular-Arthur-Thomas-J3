import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProductList } from './components/product-list/product-list.component';
import { ProductSearch } from './components/product-search/product-search';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductCreateComponent } from './components/product-create/product-create';

@NgModule({
  declarations: [
    ProductList,
    ProductSearch,
    ProductCreateComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    ProductList,
    ProductSearch
  ]
})
export class ProductsModule { }