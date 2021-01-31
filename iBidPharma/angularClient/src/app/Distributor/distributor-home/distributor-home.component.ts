import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../product';
import { ProductService } from '../../product.service';
import { UserService } from '../../user.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-distributor-home',
  templateUrl: './distributor-home.component.html',
  styleUrls: ['./distributor-home.component.scss']
})
export class DistributorHomeComponent implements OnInit {
  products : Observable<Product[]>;
  bvalue : number;
  categories = ["Vaccine", "Syrup", "Tablet", "Drops", "Injection", "Capsule"];
  states = ["Andhra Pradesh", "Assam", "Arunachal Pradesh", "Bihar", "Goa", "Gujarat", 
  "Jammu and Kashmir", "Jharkhand", "West Bengal", "Karnataka", "Kerala", "Madhya Pradesh", 
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Punjab", "Rajasthan", "Sikkim", 
  "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "Haryana", "Himachal Pradesh", "Chhattisgarh", 
  "Andaman and Nicobar", "Pondicherry", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", 
  "Chandigarh", "Lakshadweep"];
  constructor(private productService : ProductService, private router : Router, private userService : UserService, private location: Location) { }

  ngOnInit() {
    this.bvalue = null;
    this.reloadProductList();
  }
  reloadProductList() {
    this.products = this.productService.getProductList();
    //this.products.subscribe((v) => console.log('Product List: ', v));
  }
  
  placeBid() {
    this.router.navigate(['/placebid']);
  }

  goBack() {
    this.location.back();
  }

  handleBidInput() {
    this.products = this.productService.getProductListWithBidValue(this.bvalue);
  }
}
