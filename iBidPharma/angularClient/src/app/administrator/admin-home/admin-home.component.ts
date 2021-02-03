import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  readonly APP_URL = '/api';
  myresponse: any;
  users:Observable<User[]>
  constructor(private http:HttpClient,private userService:UserService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit() {
   this.getUsers();
}
getUsers(){
  this.userService.getInValidUser().subscribe(data=>{this.users=data,console.log(data)});
}

valid(user:object)
{
  user["status"]=1;
  this.userService.updateUserStatus(user["uid"],user).subscribe(data=>{console.log(data);
    var data1={to:user["email"],subject:"iBidPharma - Account successfully created",message:"Thank you for registering with us... You can use your account for online bidding."};
    this.http.post(this.APP_URL +'/maill', JSON.stringify(data1))
        .subscribe(res => {console.log(res);
          this.ngOnInit();          
            });
 
}
,error=>console.log(error));
}
logOut() {  
  sessionStorage.clear();
}
}
