import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { bid } from 'src/app/bid';
import { BidService } from 'src/app/bid.service';
import { Distributor } from 'src/app/Distributor';
import { DistributorTransactionService } from 'src/app/distributor-transaction.service';
import { DistributorService } from 'src/app/distributor.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-distributor-transactions',
  templateUrl: './distributor-transactions.component.html',
  styleUrls: ['./distributor-transactions.component.scss']
})
export class DistributorTransactionsComponent implements OnInit {

  constructor(private distributorService:DistributorService,private bidservice:BidService,private distributorTransactionservice:DistributorTransactionService,private router:ActivatedRoute,private route:Router) { }
  currentUser:any;
  currentDistributor:any;
  currentList:any;
  d_id:number;
  header : [{
    "tid": "Transaction ID",
    "mid": "Manufacturer ID",
    "mname": "Manufacturer Name",
    "pid": "Product ID",
    "pname": "Product Name",
    "category": "Product Category",
    "dist_id": "Distributor ID",
    "dname": "Distributor Name",
    "bid": "Bid ID",
    "bvalue": "Bid Value",
    "quantity": "Quantity",
    "state": "Location",
    "tdate": "Transaction Date"
}];
  headers: [['Transaction ID', 'Manufacturer ID', 'Manufacturer Name', 'Product ID', 'Product Name', 
    'Product Category', 'Distributor ID', 'Distributor Name', 'Bid ID', 'Bid Value', 'Quantity', 
    'Location','Transaction Date']];

  ngOnInit() {
    this.currentDistributor=new Distributor();
    this.currentList=new bid();
    this.currentUser=JSON.parse(sessionStorage.getItem('currentUser'));
    console.log(this.currentUser.uid);
    this.getDid();
    this.getTransaction();
    
  }
  getDid() {
   this.distributorService.getDistributorByUId(this.currentUser.uid)
   .subscribe(data=>{console.log(data);
             this.currentDistributor = JSON.stringify(data);
             sessionStorage.setItem('currentDistributor', this.currentDistributor);
           },
     error=>console.log(error));
     
  }
  getTransaction() {
   this.currentDistributor=JSON.parse(sessionStorage.getItem('currentDistributor'));
   console.log(this.currentDistributor.d_id);
  this.distributorTransactionservice.getDistributorTransactionById(this.currentDistributor.d_id).subscribe(data=>this.currentList=data,error=>console.log(error));
 
 }
 
  goBack() {
    this.route.navigate([sessionStorage.getItem('previousURL')]);
  }

  setPreviousURL() {
    sessionStorage.setItem('previousURL',"/distributorTransaction");
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
       head: [['TID', 'Product', 'Category', 'Bid Value', 'Quantity', 'Manufacturer', 
       'State','Date']],
      body: this.currentList,
      theme: 'grid'
      });

    // below line for Open PDF document in new tab
    doc.output('dataurlnewwindow');
    // below line for Download PDF document  
    doc.save('reports.pdf');
  }

}
