import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { bid } from 'src/app/models/bid';
import { BidService } from 'src/app/services/bid.service';
import { Distributor } from 'src/app/models/distributor';

import { Location } from '@angular/common';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { DistributorService } from 'src/app/services/distributor.service';

@Component({
  selector: 'app-distributor-transactions',
  templateUrl: './distributor-transactions.component.html',
  styleUrls: ['./distributor-transactions.component.scss']
})
export class DistributorTransactionsComponent implements OnInit {

  constructor(private distributorService:DistributorService,private bidservice:BidService,private router:ActivatedRoute,private route:Router,private location: Location) { }
  currentUser:any;
  currentDistributor:any;
  currentList:any;
  d_id:number;
  ngOnInit() {
    this.currentDistributor=new Distributor();
    this.currentUser=JSON.parse(sessionStorage.getItem('currentUser'));
    this.getTransaction();
  }

  getTransaction() {
   this.currentDistributor=JSON.parse(sessionStorage.getItem('currentDistributor'));
   this.d_id = this.currentDistributor.d_id;
   console.log(this.d_id);
  this.distributorService.getDistributorTransactionById(this.d_id)
  .subscribe(data=>this.currentList=data,error=>console.log(error));
 }
  
  goBack() {
    this.location.back();
  }

  download() {
    let doc = new jsPDF();
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0'); //add padding of Zeros at start for single digit date
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is starts from Zero so + 1
    var yyyy = today.getFullYear();
    doc.setFontSize(12);
    doc.text('Report Date : ' + dd + '/' + mm + '/' + yyyy, 150, 10);
    doc.setFontSize(20);
    doc.text('Distributor Transaction Details', 30, 20);
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

    // Open PDF document in new tab
    doc.output('dataurlnewwindow');
    // Download PDF  
    doc.save('reports.pdf');
  }

  logOut() {  
    sessionStorage.clear();
  }
  
}
