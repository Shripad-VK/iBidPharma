import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
utype:any;
user:any;
currentUser : string;
myInput:Boolean;
emailRegx:any;
isSubmitted:boolean;
regForm : FormGroup;
//passwordNotMatch:boolean;

  constructor(private formBuilder:FormBuilder,private userService : UserService,private router:ActivatedRoute,private route: Router) { 
    this.utype = ["Manufacturer", "Distributor"];
    this.regForm=new FormGroup({
      email:new FormControl(), 
      password: new FormControl(),
      utypes:new FormControl(),
      contact_no:new FormControl()
    });
  }

  ngOnInit() {
    this.newUser();

    this.user=new User();
    this.regForm  =  this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      //,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
       password: ['',[Validators.required]],
       contact_no:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      utype:['',[Validators.required]],
      confirmPassword:['',[Validators.required] ]
     },
      { 
      validator: this.ConfirmedValidator('password', 'confirmPassword')
   
          });
 
          password: new FormControl('', Validators.minLength(5));
          password: new FormControl('', Validators.maxLength(10));

  }

  ConfirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}



//   ConfirmedValidator(controlName: string, matchingControlName: string){
//     return (formGroup: FormGroup) => {
//         const control = formGroup.controls[controlName];
//         const matchingControl = formGroup.controls[matchingControlName];
//         if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
//             return;
//         }
//         if (control.value !== matchingControl.value) {
//             matchingControl.setErrors({ confirmedValidator: true });
//         } else {
//             matchingControl.setErrors(null);
//         }
//     }
// }

  get formControls()
  {
     return this.regForm.controls; 
 }

 get password() {
   return this.regForm.get('password');
 } 
 get email() {
   return this.regForm.get('email');
} 
get utypes() {
  return this.regForm.get('utypes');
} 
get contact_no() {
  return this.regForm.get('contact_no');
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
    
  this.isSubmitted=true;
  }

}
