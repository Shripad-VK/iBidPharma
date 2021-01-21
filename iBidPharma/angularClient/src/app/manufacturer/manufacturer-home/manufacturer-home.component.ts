import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from 'src/app/product/product-list/product-list.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../product';
import { ProductService } from '../../product.service';
import { UserService } from '../../user.service';
import { ManufacturerService } from 'src/app/manufacturer.service';

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
  constructor(private productService : ProductService,private router : Router,private manufacturerService:ManufacturerService) { 
 
  }

  ngOnInit() 
  {
   // this.newAddress();
    this.currentUser=JSON.parse(sessionStorage.getItem('currentUser'));
    //this.uid=this.currentUser.uid;
    console.log(this.currentUser.uid);
   // alert(this.currentUser.uid);
    this.getMid(this.currentUser.uid);
  } 
    
  

ProductByManufacturerId(mid:number){
  this.products = this.productService.getProductByManufacturerId(mid);
}

getMid(uid:number)
{
  this.manufacturerService.getProductsById(uid).subscribe(data=>
    {
     // console.log(data);
      this.mid=data;
      this.ProductByManufacturerId(this.mid);
    });
   
}

}
