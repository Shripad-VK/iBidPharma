import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,FormsModule,ReactiveFormsModule } from '@angular/forms';
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
manufacturerLoginForm:any;
isSubmitted:boolean;
  constructor ( private manufacturerService:ManufacturerService,private addressService:AddressService,private router:Router,private route:ActivatedRoute,private formBuilder:FormBuilder){
   this.manufacturerLoginForm=new FormGroup({
     cname:new FormControl()
   });
}

  ngOnInit() {
    this.manufacturer=new Manufacturer();
    this.getAddressList();
    this.utype=this.route.snapshot.params['utype'];
    this.manufacturerLoginForm=this.formBuilder.group({
      cname:['',Validators.required]
    });
    
  
  }

  get formControls()
  {
    return this.manufacturerLoginForm.controls;
  }
  
  get cname() {
    return this.manufacturerLoginForm.get('cname');
  } 
  

  onSubmit()
  {
    this.isSubmitted=true;
    this.manufacturerService.createManufacturer(this.manufacturer).subscribe(data=>{this.manufacturer=data;
     
     console.log(data); this.router.navigate(['addAddressManufacturer',this.manufacturer.mid]);
    },error=>console.log(error));
   
  }
  getAddressList()
  {

  this.addressService.getAddresList().subscribe(res=>this.addresses=res);
   console.log(this.addresses);
  }
}
