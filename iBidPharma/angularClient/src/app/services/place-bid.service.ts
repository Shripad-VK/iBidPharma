import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceBidService {
  private baseUrl='/api';
  constructor(private http:HttpClient) { }

  createBid(bid:Object):Observable<Object>
  {
    return this.http.post(`${this.baseUrl}`+'/bid',bid);
  }
}
