import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user : User; 
  private baseUrl = '/api';

  constructor(private http:HttpClient) { }

  checkValidUser(email:string, password : string){
    return this.http.get(`${this.baseUrl}`+'/login?email='+`${email}`+'&password='+`${password}`);
  }

  logOutUser() {
    this.user = JSON.parse(sessionStorage.getItem('currentUser'));
    sessionStorage.removeItem('currentUser');
  }

  createUser(user:Object):Observable<Object> {
    return this.http.post(`${this.baseUrl}`+'/users',user);
  }
  getInValidUser():Observable<any>
  {
    return this.http.get(`${this.baseUrl}`+'/users');
  }
  updateUserStatus(uid:number,value:any):Observable<Object>
  {
    return this.http.put(`${this.baseUrl}`+'/users/'+uid,value);
  }
  getUserById(uid:number):Observable<Object>{
    return this.http.get(`${this.baseUrl}`+'/users/'+uid);
  }
}
