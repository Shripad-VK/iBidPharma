import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManufacturerService } from 'src/app/manufacturer.service';
import { Manufacturer } from 'src/manufacturer';
import { DistributorService } from 'src/app/distributor.service';

import * as _ from "lodash"
import { ProductService } from '../../product.service';
import { Distributor } from 'src/app/Distributor';
@Component({
  selector: 'app-show-bids',
  templateUrl: './show-bids.component.html',
  styleUrls: ['./show-bids.component.scss']
})
export class ShowBidsComponent implements OnInit {

  constructor(private productService:ProductService,private distributorService:DistributorService,private manufacturerService:ManufacturerService,private router:ActivatedRoute,private route:Router) { }
  currentUser:any;
  product : any;
  currentManufacturer:any;
  currentList:any;
  mid:number;
  distributor:any;
  pid:number;
  d_id:number;
  distributornm:any;
  i:number;
  size:number;
  disName:any[];
  disObject:any;
  ngOnInit() {
    //this.currentManufacturer=new Manufacturer();
    //this.currentList=new bid();
    this.pid=this.router.snapshot.params['pid'];
    this.currentUser=JSON.parse(sessionStorage.getItem('currentUser'));
   // alert(this.currentUser.uid);
  this.getMid(this.currentUser.uid);
  //alert(this.pid);

   this.getProductsById(this.pid);

    

  }

  getMid(uid:number) {
    this.manufacturerService.getManufactureByUId(uid).subscribe(data=> {
        //alert(data);
        this.mid=data;
        this.getManufacturerBids(data);
      });
  }

  getManufacturerBids(mid:number){
   
  this.currentManufacturer=JSON.parse(sessionStorage.getItem('currentDistributor'));
  this.manufacturerService.showManufacturerBids(mid).subscribe(
    (data:any)=>{
      this.size= data.length;
      console.log(this.size);
      this.currentList=data;
      console.log(this.currentList);
    for(this.i=0;this.i<this.size;this.i++)
    {
      console.log(this.currentList[this.i].d_id);
      this.distributorService.getDistributorrById(this.currentList[this.i].d_id).subscribe(data=>{
        this.disObject=new Distributor();
        this.disObject=data;
        alert(this.disObject.cname);
        this.disName[this.i]=this.disObject.cname;
      
      })
    }

    error=>console.log(error)
    });
   
   
    console.log(this.size);
  
  
}

getProductsById(pid:number)
{
 this.productService.getProductById(pid).subscribe(data=>this.product=data,error=>console.log(error));

}
getDistributorById(d_id:number)
{
 this.distributorService.getDistributorrById(d_id).subscribe(data=>this.distributornm=data,error=>console.log(error));

}

}
