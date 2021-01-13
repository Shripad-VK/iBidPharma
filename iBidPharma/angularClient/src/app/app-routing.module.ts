import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { Employee } from './employee';
import { EmployeeListComponent } from './employee-list/employee-list.component';


const routes: Routes = [
  {path:'employees', component : EmployeeListComponent}, 
  {path:'add', component :CreateEmployeeComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
