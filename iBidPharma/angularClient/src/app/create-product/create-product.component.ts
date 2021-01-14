import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  product : Product;
  //categories : any;
  selectedLevel:any;
  
  constructor(private productService : ProductService) { 
  //  this.categories = ["Vaccine", "Syrup", "Tablet", "Drops", "Injection", "Capsule"];
  }
  categories: Array<Object> = [
    {id: 0, name: "Vaccine"},
    {id: 1, name: "Syrup"}
];
  ngOnInit() {
    this.newProduct();
  }

  newProduct():void {
    this.product = new Product();
  }
  selected(){
    console.log(this.selectedLevel);
  }
  save(){
    this.productService.createProduct(this.product).subscribe(data=>console.log(data),error=>console.error(error));
    this.product = new Product();
  }
  onSubmit(){
    this.save();
  }
}
