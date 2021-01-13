import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = '/api';
  constructor(private http:HttpClient) { }
  getEmployeeList():Observable<any> {
    return this.http.get(`${this.baseUrl}`+'/employees');
  }
  createEmployee(employee : Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`+'/employees', employee);
  }
  deleteEmployee(id:any):Observable<any>{
    return this.http.post(`${this.baseUrl}`+'/employees',id);  
  }
}
