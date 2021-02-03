import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  fileToUpload: File = null;
  products : Observable<Product[]>;
  selectedCategory : string;
  category : string;
  state : string;
  min_bvalue : number;
  max_bvalue : number;
  bvalue : number;
  categories = ["Vaccine", "Syrup", "Tablet", "Drops", "Injection", "Capsule"];
  states = ["Andhra Pradesh", "Assam", "Arunachal Pradesh", "Bihar", "Goa", "Gujarat", 
  "Jammu and Kashmir", "Jharkhand", "West Bengal", "Karnataka", "Kerala", "Madhya Pradesh", 
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Punjab", "Rajasthan", "Sikkim", 
  "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "Haryana", "Himachal Pradesh", "Chhattisgarh", 
  "Andaman and Nicobar", "Pondicherry", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", 
  "Chandigarh", "Lakshadweep"];
  constructor(private productService : ProductService, private router : Router, private userService : UserService) { }

  ngOnInit() {
    this.reloadProductList();
   // this.ProductByManufacturerId();
  }

  reloadProductList(){
    this.products = this.productService.getProductList();
    this.products.subscribe((v) => console.log('Product List: ', v));
  }
  

  delete(pid:number){
    this.productService.deleteProduct(pid).subscribe(data=>console.log(data), error=>console.error(error));    
  }
  update(pid : number){
    this.router.navigate(['updateProduct',pid]);
  }

  logOut() {
    this.userService.logOutUser();
    alert("Logged Out Successfully..!!");
  }

  handleBidInput() {
    this.products = this.productService.getProductListWithBidValue(this.bvalue);
  }
}
