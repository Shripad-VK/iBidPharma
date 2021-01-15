import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateManufacturerComponent } from './create-manufacturer/create-manufacturer.component';
import { ManufacturerListComponent } from './manufacturer-list/manufacturer-list.component';
import { UpdateManufacturerComponent } from './update-manufacturer/update-manufacturer.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    ProductListComponent,
    UpdateProductComponent,
    CreateManufacturerComponent,
    ManufacturerListComponent,
    UpdateManufacturerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
