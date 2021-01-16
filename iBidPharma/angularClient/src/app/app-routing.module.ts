import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressListComponent } from './address-list/address-list.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { CreateAddressComponent } from './create-address/create-address.component';
import { CreateDistributorComponent } from './create-distributor/create-distributor.component';
import { CreateManufacturerComponent } from './create-manufacturer/create-manufacturer.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DistributorListComponent } from './distributor-list/distributor-list.component';
import { ManufacturerListComponent } from './manufacturer-list/manufacturer-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateManufacturerComponent } from './update-manufacturer/update-manufacturer.component';
import { UpdateProductComponent } from './update-product/update-product.component';


const routes: Routes = [
  {path :'products', component:ProductListComponent},
  {path: 'addProduct', component:CreateProductComponent},
  {path: 'updateProduct/:pid', component:UpdateProductComponent},
  {path: 'manufacturers', component:ManufacturerListComponent},
  {path: 'addManufacturer',component:CreateManufacturerComponent},
  {path: 'updateManufacturer/:mid',component:UpdateManufacturerComponent},
  {path: 'address', component:AddressListComponent},
  {path: 'addAddress', component:CreateAddressComponent},
  {path: 'distributors', component:DistributorListComponent},
  {path: 'addDistributor',component:CreateDistributorComponent},
  {path: 'adminHome',component:AdminHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
