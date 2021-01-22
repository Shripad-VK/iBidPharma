import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularClient';

  constructor(private router:Router,private routr:ActivatedRoute,private location:Location) { }

  someFunc() {
   this.location.back();
  }
  
  ngOnInit() {
    this.login();
  }
  login()
  {
    this.router.navigate(['login']);
  }
  
}
