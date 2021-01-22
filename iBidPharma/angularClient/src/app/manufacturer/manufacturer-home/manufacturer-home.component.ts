import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from 'src/app/product/product-list/product-list.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../product';
import { ProductService } from '../../product.service';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-manufacturer-home',
  templateUrl: './manufacturer-home.component.html',
  styleUrls: ['./manufacturer-home.component.scss']
})
export class ManufacturerHomeComponent implements OnInit {
  products : Observable<Product[]>;
  constructor(private productService : ProductService,private router : Router) { 
  //  let myproduct = new ProductListComponent( ProductService,  Router,  UserService);
  }

  ngOnInit() 
  {
    // productService.getProductByManufacturerId(5);
  // this.ProductByManufacturerId(2);
  }
ProductByManufacturerId(mid:number){
alert(mid);
  this.products = this.productService.getProductByManufacturerId(mid);
}
}
