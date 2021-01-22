import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
utype:any;
user:User;
  constructor(private userService : UserService) { 
    this.utype = ["Manufacturer", "Distributor"];
  }

  ngOnInit() {
    this.newUser();
  }

  newUser():void {
    this.user = new User();
  }

  onSubmit(){
    this.userService.createUser(this.user).subscribe(data=>console.log(data),error=>console.error(error));
    this.user = new User();
  }

}
