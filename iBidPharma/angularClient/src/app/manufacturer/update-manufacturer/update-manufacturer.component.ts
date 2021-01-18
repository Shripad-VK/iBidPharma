import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Manufacturer } from 'src/manufacturer';
import { Address } from '../../address';
import { AddressService } from '../../address.service';
import { ManufacturerService } from '../../manufacturer.service';

@Component({
  selector: 'app-update-manufacturer',
  templateUrl: './update-manufacturer.component.html',
  styleUrls: ['./update-manufacturer.component.scss']
})
export class UpdateManufacturerComponent implements OnInit {

  mid:number;
  manufacturer:any;
  addresses:Observable<Address[]>;
  constructor(private manufactuereService:ManufacturerService,private addressService:AddressService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.manufacturer=new Manufacturer();
    this.mid=this.route.snapshot.params['mid'];
    this.manufactuereService.getManufacturerById(this.mid).subscribe(data=>this.manufacturer=data,error=>console.log(error));
    this.getAddressList();
  }


  onUpdate()
  {
   this.manufactuereService.updateManufacturer(this.mid,this.manufacturer).subscribe(data=>{console.log(data)
   this.manufacturer=data;
  //this.manufacturer=new this.manufacturer();
  this.goToList();
},
  error=>console.log(error)
  )
 
  }
  getAddressList()
  {
    
  this.addressService.getAddresList().subscribe(res=>this.addresses=res);
   console.log(this.addresses);
  }
  goToList()
  {
    this.router.navigate[('/manufacturers')];
  }
}
