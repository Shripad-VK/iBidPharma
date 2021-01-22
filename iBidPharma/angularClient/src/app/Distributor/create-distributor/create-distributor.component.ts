import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Address } from '../../address';
import { AddressService } from '../../address.service';
import { Distributor } from '../../Distributor';
import { DistributorService } from '../../distributor.service';


@Component({
  selector: 'app-create-distributor',
  templateUrl: './create-distributor.component.html',
  styleUrls: ['./create-distributor.component.scss']
})
export class CreateDistributorComponent implements OnInit {
  addresses:Observable<Address[]>;
  distributor:any;
  utype:any;
  distributorLoginForm: any;
  isSubmitted:boolean;
  constructor( private distributorService:DistributorService,private addressService:AddressService,private router :Router,private route:ActivatedRoute,private formBuilder: FormBuilder) {
  
   }

  ngOnInit() {
    this.distributor=new Distributor();
    this.getAddressList();
    this.utype=this.route.snapshot.params['utype'];
    this.distributorLoginForm=this.formBuilder.group({
      cname:['',Validators.required]
    });
    cname: new FormControl('', Validators.minLength(4));
    cname: new FormControl('', Validators.maxLength(20));
  }

  get formControls()
  {
    return this.distributorLoginForm.controls;
  }
  
  newDistributor():void { 
    this.distributor=new Distributor();
    
  }
  get cname() {
    return this.distributorLoginForm.get('cname');
  } 
  onSubmit()
  {
    this.isSubmitted=true;
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
