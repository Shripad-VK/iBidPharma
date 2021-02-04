import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { jsPDF } from 'jspdf';
import { AdminService } from 'src/app/services/admin.service';
import { BidService } from 'src/app/services/bid.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-report',
  templateUrl: './admin-report.component.html',
  styleUrls: ['./admin-report.component.scss']
})
export class AdminReportComponent implements OnInit {

  currentList:any;

  constructor(private adminService:AdminService,private bidservice:BidService,private router:ActivatedRoute,private route:Router,private location:Location) { }
  ngOnInit() {
    this.getTransactions();
  }

  getTransactions(){
    this.adminService.getAllTransactions().subscribe(data=>this.currentList=data,error=>console.log(error));
  console.log(this.currentList);
  
  }

  goBack() {
    this.location.back();
  }

  setPreviousURL() {
    sessionStorage.setItem('previousURL',"/adminReports");
  }
  

  download() {
    let doc = new jsPDF();
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0'); //add padding of Zeros at start for single digit date
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is starts from Zero so + 1
    var yyyy = today.getFullYear();
    doc.setFontSize(12);
    doc.text('Report Date : ' + dd + '/' + mm + '/' + yyyy, 150, 10);    doc.setFontSize(20);
    doc.setFontSize(20);
    doc.text('Report Generation', 30, 20);
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

  logOut() {  
    sessionStorage.clear();
  }

}
