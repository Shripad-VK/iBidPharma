import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl='/api';
  constructor(private http:HttpClient) { }
  getAllTransactions():Observable<Object> {
    return this.http.get(`${this.baseUrl}`+'/transactions');
  }
}
