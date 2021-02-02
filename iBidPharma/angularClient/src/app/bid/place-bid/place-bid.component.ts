import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { bid } from 'src/app/bid';
import {formatDate} from '@angular/common';
import { DistributorService } from 'src/app/distributor.service';
import { PlaceBidService } from 'src/app/place-bid.service';
@Component({
  selector: 'app-place-bid',
  templateUrl: './place-bid.component.html',
  styleUrls: ['./place-bid.component.scss']
})
export class PlaceBidComponent implements OnInit {

  constructor(private PlacebidService:PlaceBidService, private distributorService:DistributorService,private router:ActivatedRoute,private route: Router,private placeBidService:PlaceBidService) { }
  bid:any;
  addr_id:number;
  pid:number;
  products:any;
  getProducts:any;
  currentUser:any;
  d_id:any;
  myDate:any;
  ngOnInit() 
  {
    this.bid = new bid();
    
    this.currentUser=JSON.parse(sessionStorage.getItem('currentUser'));
    console.log(this.currentUser.uid);
    this.distributorService.getDistributorByUId(this.currentUser.uid)
    .subscribe(data=>{this.d_id=data.d_id,console.log(data);
      console.log(this.d_id);
            },
      error=>console.log(error));
      this.router.queryParams.subscribe(params=>{this.products=JSON.parse(params['products'])});
      console.log(this.products.pid);
      this.myDate = formatDate(new Date(), 'yyyy/MM/dd', 'en');
     
  }
 

  onSubmit(){

    this.bid.d_id=this.d_id;
    this.bid.pid=this.products.pid;
    this.bid.addr_id=this.products.addr_id;
    this.bid.bid_date=this.myDate;
    this.bid.state=this.products.state;
    this.PlacebidService.createBid(this.bid).subscribe(data=>{console.log(data),
    this.route.navigate(['/distributor']);
    },error=>console.log(error));
 }

}
