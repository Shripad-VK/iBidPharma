import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private baseUrl='/api';
  constructor(private http:HttpClient) { }
  createTransaction(transaction:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`+'/transactions',transaction);
  }
}
