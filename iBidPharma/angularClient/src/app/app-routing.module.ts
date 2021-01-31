import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressListComponent } from './address/address-list/address-list.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CreateAddressComponent } from './address/create-address/create-address.component';
import { CreateDistributorComponent } from './distributor/create-distributor/create-distributor.component';
import { CreateManufacturerComponent } from './manufacturer/create-manufacturer/create-manufacturer.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { DistributorListComponent } from './distributor/distributor-list/distributor-list.component';
import { DistributorHomeComponent } from './distributor/distributor-home/distributor-home.component';
import { ManufacturerListComponent } from './manufacturer/manufacturer-list/manufacturer-list.component';
import { ManufacturerHomeComponent } from './manufacturer/manufacturer-home/manufacturer-home.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { UpdateManufacturerComponent } from './manufacturer/update-manufacturer/update-manufacturer.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ReportGenerationComponent } from './Distributor/report-generation/report-generation.component';
import { MaufacturerProductListComponent } from './manufacturer/maufacturer-product-list/maufacturer-product-list.component';
import { PlaceBidComponent } from './bid/place-bid/place-bid.component';
import { ShowBidsComponent } from './bid/show-bids/show-bids.component';
import { DistributorBidListComponent } from './distributor/distributor-bid-list/distributor-bid-list.component';



const routes: Routes = [
  {path :'products', component:ProductListComponent},
  {path: 'addProduct', component:CreateProductComponent},
  {path: 'updateProduct/:pid', component:UpdateProductComponent},
  {path: 'manufacturers', component:ManufacturerListComponent},
  {path: 'addManufacturer',component:CreateManufacturerComponent},
  {path: 'updateManufacturer/:mid',component:UpdateManufacturerComponent},
  {path: 'address', component:AddressListComponent},
  {path: 'addAddressManufacturer/:mid', component:CreateAddressComponent},
  {path: 'addAddress/:d_id', component:CreateAddressComponent},
  {path: 'manufacturerHome',component:ManufacturerHomeComponent},
  {path:  'distributorHome',component:CreateDistributorComponent},
  {path: 'distributorsList', component:DistributorListComponent},
  {path: 'addDistributor',component:CreateDistributorComponent},
  {path: 'adminHome',component:AdminHomeComponent},
  {path: 'login',component:UserLoginComponent},
  {path: 'register',component:UserRegisterComponent},
  {path: 'manufacturer',component:ManufacturerHomeComponent},
  {path: 'distributor',component:DistributorHomeComponent},
  {path: 'reportDistributor',component:ReportGenerationComponent},
  {path: 'maufacturerProductList',component:MaufacturerProductListComponent},
  {path: 'distributorBidList',component:DistributorBidListComponent},
  {path: 'reportMaufacturer',component:ReportGenerationComponent},
  {path: 'bids',component:ShowBidsComponent},
  {path:'placebid/:products',component:PlaceBidComponent},
  {path: 'placebid',component:PlaceBidComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
