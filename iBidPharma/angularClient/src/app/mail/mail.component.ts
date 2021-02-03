import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  constructor(private router: Router,private http: HttpClient) { }
  readonly APP_URL = '/api';
  myresponse: any;
  
  ngOnInit() {
  }
  getMail() {
    this.http.get(this.APP_URL + '/email').subscribe(
      result => {

     console.log('hiii' );
        this.myresponse = result ;
        console.log('this.myresponse', this.myresponse);
      },
     error => {
       console.log('Error occured', error);
    }
  );
  }

  mail(data) {
    console.log(data);
    var data1={to:"neha888800@gmail.com",subject:"hello",message:"hii"};
   this.http.post(this.APP_URL +'/maill', JSON.stringify(data))
     .subscribe(res => {
            console.log('inside postmehtod of sub.function', res);//only objects
         })
     
 }


}




