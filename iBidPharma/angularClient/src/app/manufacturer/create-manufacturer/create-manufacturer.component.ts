import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Manufacturer } from 'src/manufacturer';
import { Address } from '../../address';
import { AddressService } from '../../address.service';
import { ManufacturerService } from '../../manufacturer.service';

@Component({
  selector: 'app-create-manufacturer',
  templateUrl: './create-manufacturer.component.html',
  styleUrls: ['./create-manufacturer.component.scss']
})
export class CreateManufacturerComponent implements OnInit {
addresses:Observable<Address[]>;
manufacturer:any;
utype:any;
  constructor(private manufacturerService:ManufacturerService,private addressService:AddressService,private router:Router,private routr:ActivatedRoute) { }

  ngOnInit() {
    this.newManufacturer();
    this.getAddressList();
    this.utype=this.routr.snapshot.params['utype'];
  }

  newManufacturer():void { 
    this.manufacturer=new Manufacturer();
  }

  onSubmit()
  {
    
    this.manufacturerService.createManufacturer(this.manufacturer).subscribe(data=>{this.manufacturer=data;
      this.router.navigate(['addAddressManufacturer',this.manufacturer.mid]);
    },error=>console.log(error));
   
  }
  getAddressList()
  {

  this.addressService.getAddresList().subscribe(res=>this.addresses=res);
   console.log(this.addresses);
  }
}
