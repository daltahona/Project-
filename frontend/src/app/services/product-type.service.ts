import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductTypeI } from '../models/productType';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {
  api_uri_node = 'http://localhost:4000';
  basePath = `${this.api_uri_node}/product_types`;
  createPath = `${this.api_uri_node}/product_type`;

  constructor(private http: HttpClient) {}

  getAllProductTypes(): Observable<{ productType: ProductTypeI[] }> {
    return this.http.get<{ productType: ProductTypeI[] }>(this.basePath);
  }

  getOneProductType(id: number): Observable<{ productType: ProductTypeI[] }> {
    return this.http.get<{ productType: ProductTypeI[] }>(`${this.basePath}/${id}`);
  }

  createProductType(data: any): Observable<ProductTypeI> {
    return this.http.post<ProductTypeI>(this.createPath, data);
  }

  updateProductType(id: number, data: any): Observable<ProductTypeI> {
    return this.http.put<ProductTypeI>(`${this.basePath}/${id}`, data);
  }

  deleteProductType(id: number): Observable<ProductTypeI> {
    return this.http.delete<ProductTypeI>(`${this.api_uri_node}/product_type/${id}`);
  }
}

