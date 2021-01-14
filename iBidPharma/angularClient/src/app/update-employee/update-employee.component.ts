import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  id : number;
  employee : any;
  constructor(private employeeService : EmployeeService,private router : Router, private route : ActivatedRoute) { }

  ngOnInit() {
    this.employee = new Employee();
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).
    subscribe(
      data=>{ console.log(data)
      this.employee = data;
     },
    error => console.error(error));
  }
  onUpdate() { 
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(
      data=>{ console.log(data)
      this.employee = data;
      this.employee = new Employee();
      this.goToList();
     },
    error => console.error(error));
  }
  goToList(){
    this.router.navigate(['/employees']);
  }
}
