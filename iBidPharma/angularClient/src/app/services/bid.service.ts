import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BidService {
  private baseUrl='/api';
  constructor(private http:HttpClient) { }

  getDistributorBidById(d_id:number):Observable<Object>{
    return this.http.get(`${this.baseUrl}`+'/bid/report/'+d_id);
  }
  getDistributorTransactionById(dist_id:number):Observable<Object>{
    return this.http.get(`${this.baseUrl}`+'/transactions/'+dist_id);
  }
  deleteBidById(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}`+'/bid/'+id);
  }
  updateBidById(id:number,value:any):Observable<object>
  {
    return this.http.put(`${this.baseUrl}`+'/bid/'+id,value);
  }
}
