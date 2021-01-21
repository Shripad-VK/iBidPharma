import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {
  private baseUrl='/api';
  constructor(private http:HttpClient) { }

  getManufacturerList():Observable<any>
  {
    return this.http.get(`${this.baseUrl}`+'/manufacturers');
  }
  createManufacturer(manufacturer:Object):Observable<Object>
  {
    return this.http.post(`${this.baseUrl}`+'/manufacturers',manufacturer);
  }
  deleteManufacturer(mid:number):Observable<any>
  {
    return this.http.delete(`${this.baseUrl}`+'/manufacturers/'+mid);
  }
  getManufacturerById(mid:number):Observable<Object>{
    return this.http.get(`${this.baseUrl}`+'/manufacturers/'+mid);
  }
  updateManufacturer(mid:number,value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}`+'/manufacturers/'+mid,value);
  }
  getProductsById(uid:number):Observable<any>{
    return this.http.get(`${this.baseUrl}`+'/manufacturersbyid/'+uid);
  }
}
