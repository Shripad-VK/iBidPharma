import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Manufacturer } from 'src/manufacturer';
import { Address } from '../address';
import { AddressService } from '../address.service';
import { ManufacturerService } from '../manufacturer.service';

@Component({
  selector: 'app-create-manufacturer',
  templateUrl: './create-manufacturer.component.html',
  styleUrls: ['./create-manufacturer.component.scss']
})
export class CreateManufacturerComponent implements OnInit {
addresses:Observable<Address[]>;
manufacturer:Manufacturer;
  constructor(private manufacturerService:ManufacturerService,private addressService:AddressService) { }

  ngOnInit() {
    this.newManufacturer();
    this.getAddressList();
  }

  newManufacturer():void { 
    this.manufacturer=new Manufacturer();
  }

  onSubmit()
  {
    console.log(this.manufacturer.addr_id);
    this.manufacturerService.createManufacturer(this.manufacturer).subscribe(data=>console.log(data),error=>console.log(error));
  }
  getAddressList()
  {
    
  this.addressService.getAddresList().subscribe(res=>this.addresses=res);
   console.log(this.addresses);
  }
}
