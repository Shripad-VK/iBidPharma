import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductService } from '../../services/product.service';
import { HttpClient } from '@angular/common/http';
import { ManufacturerService } from 'src/app/services/manufacturer.service';
import { Manufacturer } from 'src/app/models/manufacturer';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Address } from 'src/app/models/address';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
 // addProductForm : FormGroup;
  product : Product;
  categories = ["Vaccine", "Syrup", "Tablet", "Drops", "Injection", "Capsule"];
  selectedLevel:any;
  selectedFile: File;
  currentUser:any;
  currentManufacturer:any;
  mid:any;
  isSubmitted:boolean;
  addressObject:any;
  pstate:string;
  sesionObject:any;
  constructor(private location: Location,private productService : ProductService, private http : HttpClient,private manufacturerService:ManufacturerService,private router:ActivatedRoute,private route :Router) { 
  }
  
  ngOnInit() {
    this.currentManufacturer=new Manufacturer();
    this.addressObject=new Address();
    this.currentUser=JSON.parse(sessionStorage.getItem('currentUser'));
    console.log(this.currentUser.uid);
    this.newProduct();
    this.manufacturerService.getManufactureObjectByuid(this.currentUser.uid).subscribe(data=>{console.log(data),this.currentManufacturer=data;
      this.product.mid=this.currentManufacturer.mid;
      this.product.addr_id=this.currentManufacturer.addr_id;
    this.productService.getAddresObjectByaddId(this.currentManufacturer.addr_id).subscribe(data=>
      {
        
        this.addressObject=data;
        console.log(this.addressObject.state);
        console.log(data["state"]);
     
      },error=>console.log(error));
    
    
    });

  }

  goBack() {
    this.location.back();
  }

  newProduct():void {
    this.product = new Product();
    
  }
  save(){
    
    this.product.state=this.addressObject.state;
    this.productService.createProduct(this.product).subscribe(data=>{console.log(data);
    this.location.back();
    },error=>console.error(error));
    this.product = new Product();
  }
  onSubmit(){

    this.isSubmitted=true;
    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
    console.log(this.selectedFile.name);
    this.product.pimage = this.selectedFile.name;
    this.http.post('http://localhost:8080/api/products/image', uploadData).subscribe(data=>console.log(data),error=>console.error(error));
    this.save();
  }

  handleFileInput(event){
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    
  }

  logOut(){
    sessionStorage.clear();
  }
}
