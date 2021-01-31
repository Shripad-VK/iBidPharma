import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { bid } from 'src/app/bid';
import { BidService } from 'src/app/bid.service';
import { Distributor } from 'src/app/Distributor';
import { DistributorTransactionService } from 'src/app/distributor-transaction.service';
import { DistributorService } from 'src/app/distributor.service';

@Component({
  selector: 'app-distributor-transactions',
  templateUrl: './distributor-transactions.component.html',
  styleUrls: ['./distributor-transactions.component.scss']
})
export class DistributorTransactionsComponent implements OnInit {

  constructor(private distributorService:DistributorService,private bidservice:BidService,private distributorTransactionservice:DistributorTransactionService,private router:ActivatedRoute,private route:Router) { }
  currentUser:any;
  currentDistributor:any;
  currentList:any;
  d_id:number;
  ngOnInit() {
    this.currentDistributor=new Distributor();
    this.currentList=new bid();
    this.currentUser=JSON.parse(sessionStorage.getItem('currentUser'));
    console.log(this.currentUser.uid);
    this.getDid();
    this.getTransaction();
    
  }
  getDid() {
   this.distributorService.getDistributorByUId(this.currentUser.uid)
   .subscribe(data=>{console.log(data);
             this.currentDistributor = JSON.stringify(data);
             sessionStorage.setItem('currentDistributor', this.currentDistributor);
           },
     error=>console.log(error));
     
  }
  getTransaction() {
   this.currentDistributor=JSON.parse(sessionStorage.getItem('currentDistributor'));
   console.log(this.currentDistributor.d_id);
  this.distributorTransactionservice.getDistributorTransactionById(this.currentDistributor.d_id)
                  .subscribe(data=>this.currentList=data,error=>console.log(error));
   
 
 }
 
  goBack() {
    this.route.navigate([sessionStorage.getItem('previousURL')]);
  }
  
  setPreviousURL() {
    sessionStorage.setItem('previousURL',"/distributorTransaction");
  }
}
