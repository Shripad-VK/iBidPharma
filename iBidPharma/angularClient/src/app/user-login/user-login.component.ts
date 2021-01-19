import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  loginForm : FormGroup;
  user : any;
  currentUser : string;
  constructor(private http:HttpClient, private router : Router, private userService:UserService, private formBuilder:FormBuilder) {
    this.loginForm=new FormGroup({
      email:new FormControl(), 
      password: new FormControl()
    });
   }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({ email:[], password:[] });
  }
  
  checkLogin() {

    console.log(this.loginForm.value.email);
    this.userService.checkValidUser(this.loginForm.value.email, this.loginForm.value.passoword).subscribe
    (data=>{this.user = data;
      if(this.user.uid !== 0) {
        if(this.user.email.toString()) {
            sessionStorage.setItem('userLog',this.user.email);
            this.currentUser = JSON.stringify(this.user);
            sessionStorage.setItem('currentUser', this.currentUser);
            if(this.user.utype=="Manufacturer")
            {
              console.log(this.user.utype);
              this.router.navigate(['manufacturerHome',this.user.utype]);
            }
              if(this.user.utype=="Distributor")
            {
              console.log(this.user.utype);
              this.router.navigate(['distributorHome',this.user.utype]);
          
            }
          }
      }
      else if(this.user.utype.equals("Admin"))
      this.router.navigate(['adminHome']);
      else
        this.router.navigate(['login']);
    },
      error=>console.error(error)
    

    
    );
    
  }
}
