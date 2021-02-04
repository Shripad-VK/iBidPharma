import { Component, OnInit, ɵɵPipeDefWithMeta } from '@angular/core';
import { ProductListComponent } from 'src/app/product/product-list/product-list.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { UserService } from '../../services/user.service';
import { ManufacturerService } from 'src/app/services/manufacturer.service';
import { Location } from '@angular/common';
import { pid } from 'process';

@Component({
  selector: 'app-manufacturer-home',
  templateUrl: './manufacturer-home.component.html',
  styleUrls: ['./manufacturer-home.component.scss']
})
export class ManufacturerHomeComponent implements OnInit {
  products : Observable<Product[]>;
  mid:number;
  user : any;
  currentUser:any;
  uid:number;
  bvalue : number;
  currentManufacturer:any;
  currentList:any;
  categories = ["Vaccine", "Syrup", "Tablet", "Drops", "Injection", "Capsule"];
  constructor(private productService : ProductService,private router : Router,private manufacturerService:ManufacturerService, private location: Location) { 
  }

  ngOnInit() {
    this.bvalue = null;
    this.currentUser=JSON.parse(sessionStorage.getItem('currentUser'));
    this.getMid(this.currentUser.uid);   
    this.setManufacturer();
  } 

  setManufacturer() {
    this.manufacturerService.getManufactureObjectByuid(this.currentUser.uid)
    .subscribe(data=>{
              this.currentManufacturer = JSON.stringify(data);
              sessionStorage.setItem('currentManufacturer', this.currentManufacturer);
            },
      error=>console.log(error));
  }
      
  ProductByManufacturerId(mid:number) {
    this.products = this.productService.getProductByManufacturerId(mid);
  }

  getMid(uid:number) {
    this.manufacturerService.getManufactureByUId(uid).subscribe(data=> {
        console.log(data);
        this.mid=data;
        this.ProductByManufacturerId(this.mid);
      });
   }

  goBack() {
    this.location.back();
  }

  handleBidInput() {
    this.products = this.productService.getManufacturerProductsWithBidValue(this.mid, this.bvalue);
  }
  update(pid:number)
  {
    this.router.navigate(['updateProduct',pid] );
  }
  // showBids(pid:number)
  // {
  //  this.currentManufacturer=JSON.parse(sessionStorage.getItem('currentDistributor'));
  //   // console.log(this.currentManufacturer.mid);
  //  this.manufacturerService.showManufacturerBids(pid).subscribe(data=>this.currentList=data,error=>console.log(error));
 
  // }

  showBids(pid:number)
  {
    this.router.navigate(['bids',pid] );
    // ,{queryParams:{products:JSON.stringify(pid)},skipLocationChange: true, replaceUrl: false}
  }

  logOut() {  
    sessionStorage.clear();
  }
  delete(pid:number)
  {
    console.log(pid);
    this.manufacturerService.deleteManufacturer(pid).subscribe(data=>console.log(data));
    this.router.navigate(['/manufacturer']);
  }
}
