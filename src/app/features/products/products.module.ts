import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProductList } from './components/product-list/product-list.component';
import{ProductCreateComponent} from './components/product-create/product-create'
import { ProductSearchComponent } from './components/product-search/product-search';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductList,
    ProductSearchComponent,
    ProductCreateComponent
    
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    ProductList,
    ProductSearchComponent,
    ProductCreateComponent
  ]
})
export class ProductsModule { }