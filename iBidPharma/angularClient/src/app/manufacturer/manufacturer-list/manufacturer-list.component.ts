import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Manufacturer } from 'src/manufacturer';
import { ManufacturerService } from '../../manufacturer.service';

@Component({
  selector: 'app-manufacturer-list',
  templateUrl: './manufacturer-list.component.html',
  styleUrls: ['./manufacturer-list.component.scss']
})
export class ManufacturerListComponent implements OnInit {

  manufacturers:Observable<Manufacturer[]>
  constructor(private manufacturerService:ManufacturerService, private router:Router ) { }

  ngOnInit() {
    this.reloadManufacturerList();
  }

  reloadManufacturerList()
  {
    this.manufacturers=this.manufacturerService.getManufacturerList();
    
  }
 
  delete(mid:number)
  {
    this.manufacturerService.deleteManufacturer(mid).subscribe(data=>console.log(data),error=>console.log(error));
  }

  update(mid:number)
  {
    this.router.navigate(['updateManufacturer',mid]);
  }
}
