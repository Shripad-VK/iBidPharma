import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-maufacturer-product-list',
  templateUrl: './maufacturer-product-list.component.html',
  styleUrls: ['./maufacturer-product-list.component.scss']
})
export class MaufacturerProductListComponent implements OnInit {
  products : Observable<Product[]>;
  constructor(private productService : ProductService,private router : Router) { }

  ngOnInit() {
     this.ProductByManufacturerId(2);
  }

  ProductByManufacturerId(mid:number){
      this.products = this.productService.getProductByManufacturerId(mid);
    }
}
