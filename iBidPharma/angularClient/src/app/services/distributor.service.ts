import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Distributor } from '../models/distributor';

@Injectable({
  providedIn: 'root'
})
export class DistributorService {
  checkValidPname(pname: any) {
    throw new Error('Method not implemented.');
  }
  checkValidUser(pname: any) {
    throw new Error('Method not implemented.');
  }
  private baseUrl='/api';
  constructor(private http:HttpClient ) { }
  getDistributorList():Observable<any>
  {
    return this.http.get(`${this.baseUrl}`+'/distributors');
  }
  createDistributor(distributor:Object):Observable<Object>
  {
    return this.http.post(`${this.baseUrl}`+'/distributors',distributor);
  }
  deleteDistributor(d_id:number):Observable<any>
  {
    return this.http.delete(`${this.baseUrl}`+'/distributors/'+d_id);
  }
  getDistributorrById(d_id:number):Observable<Object>{
    return this.http.get(`${this.baseUrl}`+'/distributors/'+d_id);
  }
  updateDistributor(d_id:number,value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}`+'/distributors/'+d_id,value);
  }
  getDistributorByUId(uid:number):Observable<any>{
    return this.http.get(`${this.baseUrl}`+'/distributorsByUID/'+uid);
  }
  
  getDistributorById(uid:number):Observable<any>{
    return this.http.get(`${this.baseUrl}`+'/distributorsbyid/'+uid);
  }
  getDistributorBids(d_id:number):Observable<any> {
    return this.http.get(`${this.baseUrl}`+'/distributorBids/'+d_id);
  }
}
