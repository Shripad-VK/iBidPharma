import { Component, OnInit } from '@angular/core';
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
  distributor:Distributor;
  constructor(private distributorService:DistributorService,private addressService:AddressService) { }

  ngOnInit() {
    this.newDistributor();
    this.getAddressList();
  }
  newDistributor():void { 
    this.distributor=new Distributor();
  }

  onSubmit()
  {
    console.log(this.distributor.addr_id);
    this.distributorService.createDistributor(this.distributor).subscribe(data=>console.log(data),error=>console.log(error));
  }
  getAddressList()
  {
    
  this.addressService.getAddresList().subscribe(res=>this.addresses=res);
   console.log(this.addresses);
  }
}
