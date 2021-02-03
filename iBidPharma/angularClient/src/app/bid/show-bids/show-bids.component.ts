import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManufacturerService } from 'src/app/services/manufacturer.service';
import { Manufacturer } from 'src/app/models/manufacturer';
import { DistributorService } from 'src/app/services/distributor.service';

import * as _ from "lodash"
import { ProductService } from '../../services/product.service';
import { Distributor } from 'src/app/models/distributor';
import { BidService } from 'src/app/services/bid.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-show-bids',
  templateUrl: './show-bids.component.html',
  styleUrls: ['./show-bids.component.scss']
})
export class ShowBidsComponent implements OnInit {
  readonly APP_URL = '/api';
  myresponse: any;
  constructor(private userService:UserService,private http: HttpClient,private bidService:BidService,private productService:ProductService,private distributorService:DistributorService,private manufacturerService:ManufacturerService,private router:ActivatedRoute,private route:Router) { }
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
  disObjectUid:any;
  userObject:any;
  ngOnInit() {
        this.pid=this.router.snapshot.params['pid'];
        this.currentUser=JSON.parse(sessionStorage.getItem('currentUser'));
        this.getMid(this.currentUser.uid);
        this.getProductsById(this.pid);
}

  getMid(uid:number) {
    this.manufacturerService.getManufactureByUId(uid).subscribe(data=> {
        //alert(data);
        this.mid=data;
       // this.getManufacturerBids(data);
       this.getManufacturerBids();
      });
  }

  getManufacturerBids(){
   alert(this.pid);
  this.currentManufacturer=JSON.parse(sessionStorage.getItem('currentDistributor'));
  this.manufacturerService.showManufacturerBids(this.pid).subscribe(
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
        //alert(this.disObject.cname);
        this.disName[this.i]=this.disObject.cname;
       // alert(this.disName);
      
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
// getDistributorById(d_id:number)
// {
//  this.distributorService.getDistributorrById(d_id).subscribe(data=>this.distributornm=data,error=>console.log(error));

// }

chooseBid(bid:any)
{
    this.userObject=new User();
    this.disObjectUid=new Distributor();
  this.distributorService.getDistributorrById(bid.d_id).subscribe(data=>{
  
    this.disObject=data;
  console.log(this.disObject.uid);
  this.userService.getUserById(this.disObject.uid).subscribe(data=>{console.log(data),
    this.userObject=new User();
    this.userObject=data;
  
    var data1={to:this.userObject.email,subject:"Bid Approved",message:this.disObject.cname+" Your bid approved...Thank you!!!!"};
    this.http.post(this.APP_URL +'/maill', JSON.stringify(data1))
        .subscribe(res => {
               console.log('inside postmehtod of sub.function', res);//only objects
            });
 
  },error=>console.log(error));
 
  })
       
  //this.bidService.deleteBidById(bid.id).subscribe(data=>console.log(data),error=>console.log(error));
  this.route.navigate(['manufacturerHome']);
}

 
}
