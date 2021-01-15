import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../address';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.scss']
})
export class CreateAddressComponent implements OnInit {

  address:Address;
  constructor(private addressService:AddressService,private router:Router,private http:HttpClient) { }

  ngOnInit() {
    this.newAddress();
  }

  newAddress():void
  {
    this.address=new Address();
  }
  onSubmit()
  {
    this.addressService.createAddress(this.address).subscribe(data=>console.log(data),error=>console.error(error));
    
  }
}
