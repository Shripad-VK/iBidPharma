import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Distributor } from '../../models/distributor';
import { DistributorService } from '../../services/distributor.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-distributor-list',
  templateUrl: './distributor-list.component.html',
  styleUrls: ['./distributor-list.component.scss']
})
export class DistributorListComponent implements OnInit {
  distributors:Observable<Distributor[]>
  constructor(private distributorService:DistributorService, private router:Router,private location: Location) { }

  ngOnInit() {
    this.reloadDistributorList();

  }
  reloadDistributorList()
  {
    this.distributors=this.distributorService.getDistributorList();
    
  }
  goBack() {
    this.location.back();
  }

  logOut(){
    sessionStorage.clear();
  }
}
