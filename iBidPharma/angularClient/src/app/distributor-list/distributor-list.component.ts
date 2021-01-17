import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Distributor } from '../Distributor';
import { DistributorService } from '../distributor.service';
@Component({
  selector: 'app-distributor-list',
  templateUrl: './distributor-list.component.html',
  styleUrls: ['./distributor-list.component.scss']
})
export class DistributorListComponent implements OnInit {
  distributors:Observable<Distributor[]>
  constructor(private distributorService:DistributorService, private router:Router) { }

  ngOnInit() {
    this.reloadDistributorList();

  }
  reloadDistributorList()
  {
    this.distributors=this.distributorService.getDistributorList();
    
  }
 
  delete(d_id:number)
  {
    this.distributorService.deleteDistributor(d_id).subscribe(data=>console.log(data),error=>console.log(error));
  }

  update(d_id:number)
  {
    this.router.navigate(['updateDistributor',d_id]);
  }

}
