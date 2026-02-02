import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { App } from './app';
import { Header } from './shared/components/header/header';

import { UserDemoModule } from './features/user-demo/user-demo.module'
import { ProductsModule } from './features/products/products.module'


@NgModule({
  declarations: [
    App,
    Header,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserDemoModule,
    ProductsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
