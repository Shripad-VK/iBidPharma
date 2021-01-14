import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  employee : Employee=new Employee();
  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {

  }

  newEmployee() : void{
    this.employee = new Employee();
  }
  save(){
    this.employeeService.createEmployee(this.employee).subscribe(data=>console.log(data),error=>console.error(error));
    this.employee = new Employee();
  }
  onSubmit() {
    this.save();
  }
}
