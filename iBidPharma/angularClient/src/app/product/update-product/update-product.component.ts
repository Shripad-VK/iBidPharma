import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  pid:number;
  product:any;
  categories = ["Vaccine", "Syrup", "Tablet", "Drops", "Injection", "Capsule"];
  constructor(private productService:ProductService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.product=new Product();
    this.pid=this.route.snapshot.params['pid'];
    this.productService.getProductById(this.pid).
    subscribe(data=>{console.log(data)
     this.product=data;
     },
     error=>console.log(error));
    
  }
onUpdate(){

this.productService.updateProduct(this.pid,this.product).subscribe(data=>{console.log(data)
this.product=data;
this.goToList();
},
error=>console.log(error));
}
goToList()
{
  this.router.navigate(['/manufacturer']);
}
}
