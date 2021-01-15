import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Address } from '../address';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit {
addresses:Observable<Address[]>
  constructor(private addressService:AddressService,private router:Router) { }

  ngOnInit() 
  {
    this.reloadAddressList();
  }

  reloadAddressList()
  {
    this.addresses=this.addressService.getAddresList();
  }

}
