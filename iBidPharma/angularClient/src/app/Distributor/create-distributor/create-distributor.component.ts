import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { Address } from '../../models/address';
import { AddressService } from '../../services/address.service';
import { Distributor } from '../../models/distributor';
import { DistributorService } from '../../services/distributor.service';


@Component({
  selector: 'app-create-distributor',
  templateUrl: './create-distributor.component.html',
  styleUrls: ['./create-distributor.component.scss']
})
export class CreateDistributorComponent implements OnInit {
  addresses:Observable<Address[]>;
  distributor:any;
  utype:any;
  currentUser:any;
  distributorLoginForm: any;
  isSubmitted:boolean;
  constructor(private distributorService:DistributorService,private addressService:AddressService,private router :Router,private route:ActivatedRoute,private formBuilder: FormBuilder) {
    this.distributorLoginForm=new FormGroup({
      cname:new FormControl()
    });
   
   }

  ngOnInit() {
    this.distributor=new Distributor();
    this.getAddressList();
    this.currentUser=JSON.parse(sessionStorage.getItem('currentUser'));
    this.utype=this.route.snapshot.params['utype'];
    this.distributorLoginForm=this.formBuilder.group({
      cname:['',Validators.required]
    });
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
    this.distributor.uid=this.currentUser.uid;
    //alert(this.currentUser.uid);
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
