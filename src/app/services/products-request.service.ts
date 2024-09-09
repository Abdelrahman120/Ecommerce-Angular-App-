import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsRequestService {

  constructor(private http: HttpClient) {}

  getProductsList(): any {
    return this.http.get('https://dummyjson.com/products');
  }

  getProductDetails(id: string): Observable<Product> {
    return this.http.get<Product>(`https://dummyjson.com/products/${id}`);
  }

}
