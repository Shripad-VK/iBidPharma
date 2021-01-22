import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
utype:any;
user:any;
currentUser : string;
  constructor(private userService : UserService,private router:ActivatedRoute,private route: Router) { 
    this.utype = ["Manufacturer", "Distributor"];
  }

  ngOnInit() {
    this.newUser();
  }

  newUser():void {
    this.user = new User();
  }

  onSubmit(){
    this.userService.createUser(this.user).subscribe(data=>{console.log(data);
    this.user=data;
    if(this.user.uid !== 0) {
      if(this.user.email.toString()) {
          console.log(this.user.passoword);
          sessionStorage.setItem('userLog',this.user.email);
          this.currentUser = JSON.stringify(this.user);
          sessionStorage.setItem('currentUser', this.currentUser);

          if(this.user.utype=="Manufacturer")
            this.route.navigate(['addManufacturer']);
          if(this.user.utype=="Distributor")
          this.route.navigate(['addDistributor']);
          console.log(this.user);
      }
    }
  },error=>console.error(error));
    
  }

}
