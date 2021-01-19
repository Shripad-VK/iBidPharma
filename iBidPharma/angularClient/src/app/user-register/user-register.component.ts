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
    
  }

}
