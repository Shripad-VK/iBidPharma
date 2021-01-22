import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductService } from '../../product.service';
import { HttpClient } from '@angular/common/http';
import { ManufacturerService } from 'src/app/manufacturer.service';

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
  currentUser:any;
  mid:any;
  

  constructor(private productService : ProductService, private http : HttpClient,private manufacturerService:ManufacturerService) { 
    this.categories = ["Vaccine", "Syrup", "Tablet", "Drops", "Injection", "Capsule"];
  }
  
  ngOnInit() {
    this.currentUser=JSON.parse(sessionStorage.getItem('currentUser'));
    console.log(this.currentUser.uid);
    this.getMid(this.currentUser.uid);
    this.newProduct();
  }

  getMid(uid:number)
  {
    console.log(uid);
    this.manufacturerService.getProductsById(uid).subscribe(data=>console.log(data));
    // this.manufacturerService.getProductsById(uid).subscribe(data=>
    //   {
    //     this.mid=data;
    //     console.log(this.mid);
    //     this.manufacturerService.getManufacturerById(this.mid).subscribe(data=>console.log(data));
    //   });
     
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
    uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.product.pimage = this.selectedFile.name;
    this.http.post('http://localhost:8080/api/products/image', uploadData).subscribe(data=>console.log(data),error=>console.error(error));
    this.save();
  }

  handleFileInput(event){
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    
  }

}
