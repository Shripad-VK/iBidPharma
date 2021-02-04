import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Manufacturer } from 'src/app/models/manufacturer';
import { ManufacturerService } from '../../services/manufacturer.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-manufacturer-list',
  templateUrl: './manufacturer-list.component.html',
  styleUrls: ['./manufacturer-list.component.scss']
})
export class ManufacturerListComponent implements OnInit {

  manufacturers:Observable<Manufacturer[]>
  constructor(private manufacturerService:ManufacturerService, private router:Router, private location:Location ) { }

  ngOnInit() {
    this.reloadManufacturerList();
  }

  reloadManufacturerList()
  {
    this.manufacturers=this.manufacturerService.getManufacturerList();
    
  }

  goBack() {
    this.location.back();
  }
  
  logOut() {  
    sessionStorage.clear();
  }
}
