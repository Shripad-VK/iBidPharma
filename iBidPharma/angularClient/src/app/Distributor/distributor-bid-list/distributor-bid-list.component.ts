import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Distributor } from 'src/app/models/distributor';
import { BidService } from 'src/app/services/bid.service';
import { DistributorService } from 'src/app/services/distributor.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-distributor-bid-list',
  templateUrl: './distributor-bid-list.component.html',
  styleUrls: ['./distributor-bid-list.component.scss']
})
export class DistributorBidListComponent implements OnInit {

  constructor(private distributorService:DistributorService,private bidservice:BidService,private router:ActivatedRoute,private route:Router,private location: Location) { }
  currentUser:any;
  currentDistributor:any;
  currentList:any;
  d_id:number;
  bids:any;
  ngOnInit() {
    this.currentDistributor=JSON.parse(sessionStorage.getItem('currentDistributor'));
    this.d_id = this.currentDistributor.d_id;
    this.getDistributorBids(this.d_id);

  }
  goBack() {
    this.location.back();
  }

  getDistributorBids(d_id:number){
    this.distributorService.getDistributorBids(d_id).subscribe(data=>this.bids=data,error=>console.log(error));
  
  }

  logOut() {  
    sessionStorage.clear();
  }

}
