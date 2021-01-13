import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees : Observable<Employee[]>;
  deleteMsg:any;
  constructor(private employeeService : EmployeeService, private router : Router) { }
  
  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeeList();
  }
  delete(id:number)
  {
    console.log(id);
    this.employeeService.deleteEmployee(id).subscribe(data=>console.log(data),error=>console.error(error));
  }
}
