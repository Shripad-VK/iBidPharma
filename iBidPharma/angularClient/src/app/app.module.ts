import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user-login/user-login.component';
import { CreateManufacturerComponent } from './manufacturer/create-manufacturer/create-manufacturer.component';
import { ManufacturerListComponent } from './manufacturer/manufacturer-list/manufacturer-list.component';
import { UpdateManufacturerComponent } from './manufacturer/update-manufacturer/update-manufacturer.component';
import { CreateAddressComponent } from './address/create-address/create-address.component';
import { AddressListComponent } from './address/address-list/address-list.component';
import { UpdateAddressComponent } from './address/update-address/update-address.component';
import { DistributorListComponent } from './distributor/distributor-list/distributor-list.component';
import { CreateDistributorComponent } from './distributor/create-distributor/create-distributor.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UpdateAccountComponent } from './admin/update-account/update-account.component';
import { ReportGenerationComponent } from './Distributor/report-generation/report-generation.component';
import { RevenueManagementComponent } from './admin/revenue-management/revenue-management.component';
import { SearchManufacturerComponent } from './distributor/search-manufacturer/search-manufacturer.component';
import { SearchProductComponent } from './distributor/search-product/search-product.component';
import { ViewTransactionHistoryComponent } from './distributor/view-transaction-history/view-transaction-history.component';
import { ViewOrderHistoryComponent } from './manufacturer/view-order-history/view-order-history.component';
import { ManufacturerHomeComponent } from './manufacturer/manufacturer-home/manufacturer-home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DistributorHomeComponent } from './distributor/distributor-home/distributor-home.component';
import { MailComponent } from './mail/mail.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { TableFilterPipe } from './table-filter.pipe';
import { MaufacturerProductListComponent } from './manufacturer/maufacturer-product-list/maufacturer-product-list.component';
import { PlaceBidComponent } from './bid/place-bid/place-bid.component';
import { ShowBidsComponent } from './bid/show-bids/show-bids.component';
import { DistributorBidListComponent } from './distributor/distributor-bid-list/distributor-bid-list.component';



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
    ManufacturerHomeComponent,
    DistributorListComponent,
    CreateDistributorComponent,
    AdminHomeComponent,
    UpdateAccountComponent,
    ReportGenerationComponent,
    RevenueManagementComponent,
    SearchManufacturerComponent,
    SearchProductComponent,
    ViewTransactionHistoryComponent,
    HeaderComponent,
    FooterComponent,
    DistributorHomeComponent,
    MailComponent,
    UserRegisterComponent,
    TableFilterPipe,
    MaufacturerProductListComponent,
    PlaceBidComponent,
    ShowBidsComponent,
    DistributorBidListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
