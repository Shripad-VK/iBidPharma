import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistributorService {
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
  deleteDistributor(mid:number):Observable<any>
  {
    return this.http.delete(`${this.baseUrl}`+'/distributors/'+mid);
  }
  getDistributorrById(mid:number):Observable<Object>{
    return this.http.get(`${this.baseUrl}`+'/distributors/'+mid);
  }
  updateDistributor(mid:number,value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}`+'/distributors/'+mid,value);
  }
}
