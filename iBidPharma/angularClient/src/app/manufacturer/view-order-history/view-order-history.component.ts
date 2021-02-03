import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManufacturerService } from 'src/app/manufacturer.service';
import { Location } from '@angular/common';
import { Manufacturer } from 'src/manufacturer';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-view-order-history',
  templateUrl: './view-order-history.component.html',
  styleUrls: ['./view-order-history.component.scss']
})
export class ViewOrderHistoryComponent implements OnInit {

  currentUser:any;
  currentManufacturer:any;
  currentList:any;
  mid:number;

  constructor(private manufacturerService:ManufacturerService,private router:ActivatedRoute,private route:Router,private location: Location) { }

    ngOnInit() {
    this.currentManufacturer=new Manufacturer();
    this.currentUser=JSON.parse(sessionStorage.getItem('currentUser'));
    //console.log(this.currentUser.uid);
    this.getMid();
    this.getTransaction();
    
  }
  getMid() {
   this.manufacturerService.getManufactureObjectByuid(this.currentUser.uid)
   .subscribe(data=>{console.log(data);
             this.currentManufacturer = JSON.stringify(data);
             console.log(this.currentManufacturer);
             sessionStorage.setItem('currentManufacturer', this.currentManufacturer);
           },
     error=>console.log(error));
     
  }
  getTransaction() {
   this.currentManufacturer=JSON.parse(sessionStorage.getItem('currentManufacturer'));
   this.mid = this.currentManufacturer.mid;
   console.log("MID :  "+this.currentManufacturer.mid);
    this.manufacturerService.getManufacturerTransactions(this.mid)
                  .subscribe(data=>this.currentList=data,error=>console.log(error));
   
 }
 
  goBack() {
    this.location.back();
  }

  download() {
    let doc = new jsPDF();
    //var doc = new jsPDF();
   
    doc.setFontSize(20);
    doc.text('Transaction Details', 30, 20);
    doc.setFontSize(14);
    doc.setTextColor(100);

    //(doc as any).autoTable({ html: '#content' });
    (doc as any).autoTable({ 
      tableLineColor: [189, 195, 199],
      tableLineWidth: 0.75,
      startY: 40,
      margin: {
        top: 40
      },
       head: [['TID', 'Product', 'Category', 'Bid Value', 'Quantity', 'Manufacturer', 'Distributor',
       'Location','Date']],
      body: this.currentList,
      theme: 'grid'
      });

    // below line for Open PDF document in new tab
    doc.output('dataurlnewwindow');
    // below line for Download PDF document  
    doc.save('reports.pdf');
  }


}
