import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl='/api';
  constructor(private http:HttpClient) { }

getProductList():Observable<any>
{
  return this.http.get(`${this.baseUrl}`+'/products');
}
getProductByManufacturerId(mid:number):Observable<any>
{
  return this.http.get(`${this.baseUrl}`+'/products/manufacturer/'+mid);
}

createProduct(product:Object):Observable<Object>{
  return this.http.post(`${this.baseUrl}`+'/products',product);
}
deleteProduct(pid:number):Observable<any>{
  return this.http.delete(`${this.baseUrl}`+'/products/'+pid);
}
updateProduct(pid:number,value:any):Observable<Object>{
  return this.http.put(`${this.baseUrl}`+'/products/'+pid,value);
}
getProductById(pid:number):Observable<Object>{
  return this.http.get(`${this.baseUrl}`+'/products/'+pid);
}
// getProductByManufacturerId(mid:number):Observable<Object>{
//   return this.http.get(`${this.baseUrl}`+'/products/'+pid);
// }


}
