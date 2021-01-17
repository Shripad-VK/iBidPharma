import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Address } from '../address';
import { AddressService } from '../address.service';
import { Distributor } from '../Distributor';
import { DistributorService } from '../distributor.service';


@Component({
  selector: 'app-create-distributor',
  templateUrl: './create-distributor.component.html',
  styleUrls: ['./create-distributor.component.scss']
})
export class CreateDistributorComponent implements OnInit {
  addresses:Observable<Address[]>;
  distributor:any;
  constructor(private distributorService:DistributorService,private addressService:AddressService,private router:Router) { }

  ngOnInit() {
    this.newDistributor();
    this.getAddressList();
  }
  newDistributor():void { 
    this.distributor=new Distributor();
  }

  onSubmit()
  {
    this.distributorService.createDistributor(this.distributor).subscribe(data=>{this.distributor=data;
      this.router.navigate(['addAddress',this.distributor.d_id]);
    },error=>console.log(error));
  }
  getAddressList()
  {
    
  this.addressService.getAddresList().subscribe(res=>this.addresses=res);
   console.log(this.addresses);

   
  }
}
