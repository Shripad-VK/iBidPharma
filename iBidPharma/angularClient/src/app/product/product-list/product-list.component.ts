import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../product';
import { ProductService } from '../../product.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  fileToUpload: File = null;
  products : Observable<Product[]>;
  selectedCategory : string;
  categories = [
    { pname : "Vaccine" },
    { pname : "Syrup"},
    { pname : "Tablet"},
    { pname : "Drops"},
    { pname : "Injection"},
    { pname : "Capsule"}
  ];
  constructor(private productService : ProductService, private router : Router, private userService : UserService) { }

  ngOnInit() {
    this.reloadProductList();
  }

  reloadProductList(){
    this.products = this.productService.getProductList();
  }

  delete(pid:number){
    this.productService.deleteProduct(pid).subscribe(data=>console.log(data), error=>console.error(error));    
  }
  update(pid : number){
    this.router.navigate(['updateProduct',pid]);
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  logOut() {
    this.userService.logOutUser();
    alert("Logged Out Successfully..!!");
  }
}
