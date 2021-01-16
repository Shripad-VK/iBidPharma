import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user-login/user-login.component';
import { CreateManufacturerComponent } from './create-manufacturer/create-manufacturer.component';
import { ManufacturerListComponent } from './manufacturer-list/manufacturer-list.component';
import { UpdateManufacturerComponent } from './update-manufacturer/update-manufacturer.component';
import { CreateAddressComponent } from './create-address/create-address.component';
import { AddressListComponent } from './address-list/address-list.component';
import { UpdateAddressComponent } from './update-address/update-address.component';

import { ViewOrderHistoryComponent } from './manufacturer-home/view-order-history/view-order-history.component';
import { ReporGenerationComponent } from './manufacturer-home/repor-generation/repor-generation.component';
import { ManufacturerHomeComponent } from './manucturer/manufacturer-home/manufacturer-home.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    ProductListComponent,
    UpdateProductComponent,
    UserLoginComponent,
    CreateManufacturerComponent,
    ManufacturerListComponent,
    UpdateManufacturerComponent,
    CreateAddressComponent,
    AddressListComponent,
    UpdateAddressComponent,
    
    ViewOrderHistoryComponent,
    ReporGenerationComponent,
    ManufacturerHomeComponent,

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
