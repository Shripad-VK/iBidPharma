import { Component, OnInit } from '@angular/core';
import { PlaceBidService } from '../place-bid.service';
import { ActivatedRoute, Router } from '@angular/router';
 import { bid } from '../bid';
@Component({
  selector: 'app-place-bid',
  templateUrl: './place-bid.component.html',
  styleUrls: ['./place-bid.component.scss']
})
export class PlaceBidComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route: Router,private placeBidService:PlaceBidService) { }
  bid:any;
  addr_id:number;
  pid:number;
  products:any;
  ngOnInit() 
  {
    this.newbid();
  }
  newbid():void
  {
    this.bid = new bid();
    this.products=this.router.snapshot.paramMap.get['products'];
  //  this.pid=this.router.snapshot.params['pid'];
    // this.utype=this.route.snapshot.params['utype'];
    alert(this.products);
  }

  onSubmit(){
 }

}
