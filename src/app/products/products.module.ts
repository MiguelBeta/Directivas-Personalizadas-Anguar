import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductPagesComponent } from './pages/product-pages/product-pages.component';


@NgModule({
  declarations: [

    ProductPagesComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class ProductsModule { }
