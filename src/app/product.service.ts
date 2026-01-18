import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getAllProducts(): Observable<any>{    
    return this.http.get('http://localhost:3000/products');
  }
  addProduct(productData: any):Observable<any>{
    const url='http://localhost:3000/products';
    return this.http.post(url,productData);
  }
  deleteProduct(productData: any):Observable<any>{
    const url='http://localhost:3000/products';
    return this.http.delete(`${url}/${productData}`);
  }
}
