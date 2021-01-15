import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private baseUrl='/api';
  constructor(private http:HttpClient) { }
  getAddresList():Observable<any>
  {
    return this.http.get(`${this.baseUrl}`+'/addresses');
  }
  createAddress(address:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`+'/addresses',address);
  }
  getAddressById(addr_id:number):Observable<Object>
  {
    return this.http.get(`${this.baseUrl}`+'/addresses/'+addr_id);
  }
  updateAddress(addr_id:number,value:any):Observable<Object>
  {
    return this.http.put(`${this.baseUrl}`+'/addresses/'+addr_id,value);
  }
  deleteAddress(addr_id:number):Observable<Object>
  {
    return this.http.delete(`${this.baseUrl}`+'/addresses/'+addr_id);
  }
}
