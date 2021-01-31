import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery'
import { Observable } from 'rxjs';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  users:Observable<User[]>
  constructor(private userService:UserService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit() {
   
   this.userService.getInValidUser().subscribe(data=>{this.users=data,console.log(data)});

}

valid(user:object)
{
  user["status"]=1;
  this.userService.updateUserStatus(user["uid"],user).subscribe(data=>{console.log(data),
  this.route.navigate[('/adminHome')];
}
,error=>console.log(error));
}
}
