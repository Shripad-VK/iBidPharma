import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductService } from '../../product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  product : Product;
  categories : any;
  selectedLevel:any;
  selectedFile: File;

  constructor(private productService : ProductService, private http : HttpClient) { 
    this.categories = ["Vaccine", "Syrup", "Tablet", "Drops", "Injection", "Capsule"];
  }
  
  ngOnInit() {
    this.newProduct();
  }

  newProduct():void {
    this.product = new Product();
  }
  save(){
    this.productService.createProduct(this.product).subscribe(data=>console.log(data),error=>console.error(error));
    this.product = new Product();
  }
  onSubmit(){
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:8080/api/products/image?imageFile', uploadData).subscribe(data=>console.log(data),error=>console.error(error));
    this.save();
  }

  handleFileInput(event){
    this.selectedFile = event.target.files[0];
  }

}
