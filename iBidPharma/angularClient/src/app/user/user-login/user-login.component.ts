import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  loginForm : FormGroup;
  user : any;
  currentUser : string;
  myInput:Boolean;
  emailRegx:any;
  isSubmitted:boolean;


  constructor(private http:HttpClient, private router : Router, private userService:UserService, private formBuilder:FormBuilder) {
    this.loginForm=new FormGroup({
      email:new FormControl(), 
      password: new FormControl()
    });
   
   }

  ngOnInit() {
    this.user=new User();
    this.loginForm  =  this.formBuilder.group({
      primaryEmail: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required]
  });
  password: new FormControl('', Validators.minLength(5));
  password: new FormControl('', Validators.maxLength(10));
  
  }

  get formControls()
   {
      return this.loginForm.controls; 
  }

  get password() {
    return this.loginForm.get('password');
  } 
  get primaryEmail() {
    return this.loginForm.get('primaryEmail');
} 



  checkLogin() 
  {
    this.isSubmitted=true;
    console.log(this.loginForm.value.primaryEmail);
    this.userService.checkValidUser(this.loginForm.value.primaryEmail, this.loginForm.value.password).subscribe
    (data=>{this.user = data;
      if(this.user.uid !== 0) {
        if(this.user.email.toString()) {
          
            this.currentUser = JSON.stringify(this.user);
            sessionStorage.setItem('currentUser', this.currentUser);
            if(this.user.utype=="Manufacturer")
            {
              console.log(this.user.utype);
              this.router.navigate(['manufacturer']);
            }
              if(this.user.utype=="Distributor")
            {
              console.log(this.user.utype);
              this.router.navigate(['distributor']);
          
            }
          
          }
      }
      else if(this.user.utype=="Admin")
      this.router.navigate(['adminHome']);
      else
      {
        alert("Login Failed.. Invalid Credentials...");
        this.router.navigate(['login']);
        
      }
    },
      error=>console.error(error)
    

    
    );
    
  }

  login(){
    console.log(this.loginForm.value);
    this.isSubmitted=true;
    this.checkLogin();
  }
}
