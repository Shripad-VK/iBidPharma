import { Component, OnInit, ɵɵPipeDefWithMeta } from '@angular/core';
import { ProductListComponent } from 'src/app/product/product-list/product-list.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../product';
import { ProductService } from '../../product.service';
import { UserService } from '../../user.service';
import { ManufacturerService } from 'src/app/manufacturer.service';
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
}
