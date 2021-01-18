import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Manufacturer } from 'src/manufacturer';
import { Address } from '../../address';
import { AddressService } from '../../address.service';
import { ManufacturerService } from '../../manufacturer.service';
import { Distributor } from '../../Distributor';
import { DistributorService } from '../../distributor.service';


@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.scss']
})
export class CreateAddressComponent implements OnInit {

  address:any;
  mid:number;
  d_id:number;
  manufacturer:any;
  distributor:any;
  constructor(private addressService:AddressService,private router:Router,private route:ActivatedRoute,private http:HttpClient,private manufacturerService: ManufacturerService,private distributorService: DistributorService) { }

  ngOnInit() {
    this.newAddress();
  }

  newAddress():void
  {
    this.address=new Address();
    this.mid=this.route.snapshot.params['mid'];
    console.log(this.mid);
  }
  onSubmit()
  {
    this.addressService.createAddress(this.address).subscribe(data=>{this.address=data;
    this.manufacturer=new Manufacturer();
    this.manufacturer.addr_id=this.address.addr_id;
    
    this.manufacturerService.updateManufacturer(this.mid,this.manufacturer).subscribe(data=>console.log(data),error=>console.log(error));
    },error=>console.error(error));
    
  }
}
