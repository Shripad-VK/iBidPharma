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
}
