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

  getProductList():Observable<any> {
    return this.http.get(`${this.baseUrl}`+'/products');
  }

  getAvailableProductList():Observable<any> {
    return this.http.get(`${this.baseUrl}`+'/availableProducts');
  }


  createProduct(product:Object):Observable<Object> {
    return this.http.post(`${this.baseUrl}`+'/products',product);
  }
  deleteProduct(pid:number):Observable<any> {
    return this.http.delete(`${this.baseUrl}`+'/products/'+pid);
  }
  updateProduct(pid:number,value:any):Observable<Object> {
    return this.http.put(`${this.baseUrl}`+'/products/'+pid,value);
  }
  getProductById(pid:number):Observable<Object> {
    return this.http.get(`${this.baseUrl}`+'/products/'+pid);
  }
  getProductByManufacturerId(mid:number):Observable<any>
  {
  return this.http.get(`${this.baseUrl}`+'/products/manufacturer/'+mid);
  }
  getProductListWithBidValue(bid : number):Observable<any> {
    return this.http.get(`${this.baseUrl}`+'/products/bidValue/'+bid);
  }
  getManufacturerProductsWithBidValue(mid : number, bid : number):Observable<any> {
    return this.http.get(`${this.baseUrl}`+'/products/manufacturer/'+ mid +'/'+ bid);
  }
  getAddresObjectByaddId(addr_id:number):Observable<any>
  {
    return this.http.get(`${this.baseUrl}`+'/addresses/'+ addr_id );
  }
  updateProductStock(pid:number,value:any):Observable<Object> {
    return this.http.put(`${this.baseUrl}`+'/updateProductStock/'+pid,value);
  }
  
}
