import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../product';
import { ProductService } from '../../product.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-distributor-home',
  templateUrl: './distributor-home.component.html',
  styleUrls: ['./distributor-home.component.scss']
})
export class DistributorHomeComponent implements OnInit {
  products : Observable<Product[]>;
  constructor(private productService : ProductService, private router : Router, private userService : UserService) { }

  ngOnInit() {
    this.reloadProductList();
  }
  reloadProductList(){
    this.products = this.productService.getProductList();
    this.products.subscribe((v) => console.log('Product List: ', v));
  }
placeBid()
{
  this.router.navigate(['/placebid']);
}
}
