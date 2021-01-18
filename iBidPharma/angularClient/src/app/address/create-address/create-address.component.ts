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
  utype:any;
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
    this.d_id=this.route.snapshot.params['d_id'];
    this.utype=this.route.snapshot.params['utype'];
    console.log(this.mid);
  }
  onSubmit()
  {
    this.addressService.createAddress(this.address).subscribe(data=>{this.address=data;
    
    if(this.mid!=0 && this.utype=="Manufacturer")
    {
      console.log(this.mid);
    this.manufacturer=new Manufacturer();
    this.manufacturer.addr_id=this.address.addr_id;  
    this.manufacturerService.updateManufacturer(this.mid,this.manufacturer).subscribe(data=>console.log(data),error=>console.log(error));
    }
    if(this.d_id!=0 && this.utype=="Distributor")
    {
        this.distributor=new Distributor();
        this.distributor.addr_id=this.address.addr_id;
        this.distributorService.updateDistributor(this.d_id,this.distributor).subscribe(data=>console.log(data),error=>console.log(error));
    }
  
  },error=>console.error(error));
    
  }
}
