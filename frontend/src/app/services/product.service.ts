import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductI } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api_uri_node = 'http://localhost:4000';
  basePath = `${this.api_uri_node}/products`;
  createPath = `${this.api_uri_node}/product`; 

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(): Observable<{ products: ProductI[] }> {
    return this.http
      .get<{ products: ProductI[] }>(this.basePath);
  }

  getOneProduct(id: number): Observable<{ product: ProductI[] }> {
    return this.http
      .get<{ product: ProductI[] }>(`${this.basePath}/${id}`);
  }

  createProduct(data: any): Observable<ProductI> {
    return this.http.post<ProductI>(this.createPath, data);
  }

  updateProduct(id: number, data: any): Observable<ProductI> {
    return this.http.put<ProductI>(`${this.basePath}/${id}`, data);
  }

  deleteProduct(id: number): Observable<ProductI> {
    return this.http.delete<ProductI>(`${this.basePath}/product/${id}`);
  }
  
}


