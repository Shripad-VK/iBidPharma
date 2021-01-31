import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductService } from '../../product.service';
import { HttpClient } from '@angular/common/http';
import { ManufacturerService } from 'src/app/manufacturer.service';
import { Manufacturer } from 'src/manufacturer';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  addProductForm : FormGroup;
  product : Product;
  categories : any;
  selectedLevel:any;
  selectedFile: File;
  currentUser:any;
  currentManufacturer:any;
  mid:any;
  isSubmitted:boolean;

  constructor(private productService : ProductService, private http : HttpClient,private manufacturerService:ManufacturerService,private router:ActivatedRoute,private route :Router) { 
    this.categories = ["Vaccine", "Syrup", "Tablet", "Drops", "Injection", "Capsule"];
  }
  
  ngOnInit() {
    this.currentUser=JSON.parse(sessionStorage.getItem('currentUser'));
    console.log(this.currentUser.uid);
    this.currentManufacturer=new Manufacturer();
    this.manufacturerService.getManufactureObjectByuid(this.currentUser.uid).subscribe(data=>{console.log(data),this.currentManufacturer=data});
    this.newProduct();
  }

 

  newProduct():void {
    this.product = new Product();
  }
  save(){
    this.product.mid=this.currentManufacturer.mid;
    this.product.addr_id=this.currentManufacturer.addr_id;
    this.productService.createProduct(this.product).subscribe(data=>{console.log(data);
      this.route.navigate(['manufacturer']);
    
    },error=>console.error(error));
    this.product = new Product();
  }
  onSubmit(){

    this.isSubmitted=true;
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
