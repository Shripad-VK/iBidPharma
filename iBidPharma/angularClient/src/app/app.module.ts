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
import { DistributorListComponent } from './distributor-list/distributor-list.component';
import { CreateDistributorComponent } from './create-distributor/create-distributor.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { UpdateAccountComponent } from './Admin/update-account/update-account.component';
import { ReportGenerationComponent } from './Admin/report-generation/report-generation.component';
import { RevenueManagementComponent } from './Admin/revenue-management/revenue-management.component';
import { SearchManufacturerComponent } from './Distributor/search-manufacturer/search-manufacturer.component';
import { SearchProductComponent } from './Distributor/search-product/search-product.component';
import { ViewTransactionHistoryComponent } from './Distributor/view-transaction-history/view-transaction-history.component';


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
    DistributorListComponent,
    CreateDistributorComponent,
   
    AdminHomeComponent,
   
    UpdateAccountComponent,
   
    ReportGenerationComponent,
   
    RevenueManagementComponent,
   
    SearchManufacturerComponent,
   
    SearchProductComponent,
   
    ViewTransactionHistoryComponent
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
