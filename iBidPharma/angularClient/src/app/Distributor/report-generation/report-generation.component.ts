import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { bid } from 'src/app/bid';
import { BidService } from 'src/app/bid.service';
import { Distributor } from 'src/app/Distributor';

import { DistributorService } from 'src/app/distributor.service';

@Component({
  selector: 'app-report-generation',
  templateUrl: './report-generation.component.html',
  styleUrls: ['./report-generation.component.scss']
})
export class ReportGenerationComponent implements OnInit {

  constructor(private distributorService:DistributorService,private bidservice:BidService,private router:ActivatedRoute,private route:Router) { }
  currentUser:any;
  currentDistributor:any;
  currentList:any;
  d_id:number;
  ngOnInit() 
  {
    this.currentDistributor=new Distributor();
    this.currentList=new bid();
    this.currentUser=JSON.parse(sessionStorage.getItem('currentUser'));
    console.log(this.currentUser.uid);
   this.getDid();
   this.getBid();
    
  }
 getDid()
 {
  this.distributorService.getDistributorByUId(this.currentUser.uid).subscribe(data=>{console.log(data);this.currentDistributor=data as Distributor,console.log(this.currentDistributor.d_id); this.d_id=this.currentDistributor.d_id as number;},
    error=>console.log(error));
    
 }
getBid()
{
  console.log(this.d_id);
 this.bidservice.getDistributorBidById(this.d_id).subscribe(data=>this.currentList=data,error=>console.log(error));
}


}