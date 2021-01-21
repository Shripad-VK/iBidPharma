import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularClient';

  constructor(private router:Router,private routr:ActivatedRoute) { }

  someFunc() {
    console.log("button clicked..!!");
  }
  
  ngOnInit() {
    this.login();
  }
  login()
  {
    this.router.navigate(['login']);
  }
}
