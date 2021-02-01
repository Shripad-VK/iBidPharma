import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DistributorTransactionService {

  private baseUrl='/api';
  constructor(private http:HttpClient) { }
  getDistributorTransactionById(dist_id:number):Observable<Object> {
    return this.http.get(`${this.baseUrl}`+'/transaction/'+dist_id);
  }
}
