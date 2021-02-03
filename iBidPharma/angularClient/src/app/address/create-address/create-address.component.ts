import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Manufacturer } from 'src/app/models/manufacturer';
import { Address } from '../../models/address';
import { AddressService } from '../../services/address.service';
import { ManufacturerService } from '../../services/manufacturer.service';
import { Distributor } from '../../models/distributor';
import { DistributorService } from '../../services/distributor.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


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
  currentUser:any;
  addressForm: FormGroup;
  isSubmitted:boolean;
  states = ["Andhra Pradesh", "Assam", "Arunachal Pradesh", "Bihar", "Goa", "Gujarat", 
  "Jammu and Kashmir", "Jharkhand", "West Bengal", "Karnataka", "Kerala", "Madhya Pradesh", 
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Punjab", "Rajasthan", "Sikkim", 
  "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "Haryana", "Himachal Pradesh", "Chhattisgarh", 
  "Andaman and Nicobar", "Pondicherry", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", 
  "Chandigarh", "Lakshadweep"];
  constructor(private addressService:AddressService,private router:Router,private route:ActivatedRoute,private http:HttpClient,private manufacturerService: ManufacturerService,private distributorService: DistributorService,private formBuilder:FormBuilder) { 
    this.addressForm=new FormGroup({
      line1:new FormControl(),
      line2:new FormControl(),
      area:new FormControl(),
      pin_code:new FormControl(),
      city:new FormControl(),
      state:new FormControl()
    });
  }

  ngOnInit() {
    this.address=new Address();
    this.currentUser=JSON.parse(sessionStorage.getItem('currentUser'));
    console.log(this.currentUser.utype);
    this.addressForm=this.formBuilder.group({
      line1:['',Validators.required],
      line2:['',Validators.required],
      area:['',Validators.required],
      pin_code:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required]
    });
  }

  get formControls()
  {
    return this.addressForm.controls;
  }
  newAddress():void
  {
    this.address=new Address();
    this.mid=this.route.snapshot.params['mid'];
    this.d_id=this.route.snapshot.params['d_id'];
    this.utype=this.route.snapshot.params['utype'];
    console.log(this.mid);
  }
  get line1(){
    return this.addressForm.get('line1');
  }
  get line2(){
    return this.addressForm.get('line2');
  }
  get area(){
    return this.addressForm.get('area');
  }
  get pin_code(){
    return this.addressForm.get('pin_code');
  }
  get city(){
    return this.addressForm.get('city');
  }
  get state(){
    return this.addressForm.get('state');
  }
  onSubmit()
  {
    this.isSubmitted=true;
    this.addressService.createAddress(this.address).subscribe(data=>{this.address=data;
    
    if(this.mid!=0 && this.currentUser.utype=="Manufacturer")
    {
      console.log(this.mid);
    this.manufacturer=new Manufacturer();
    this.manufacturer.addr_id=this.address.addr_id;  
    this.manufacturerService.updateManufacturer(this.mid,this.manufacturer).subscribe(data=>console.log(data),error=>console.log(error));
      this.router.navigate(['login']);
  }
    if(this.d_id!=0 && this.currentUser.utype=="Distributor")
    {
        this.distributor=new Distributor();
        this.distributor.addr_id=this.address.addr_id;
        this.distributorService.updateDistributor(this.d_id,this.distributor).subscribe(data=>console.log(data),error=>console.log(error));
        this.router.navigate(['login']);
      }
  
  },error=>console.error(error));
    
  }
}
