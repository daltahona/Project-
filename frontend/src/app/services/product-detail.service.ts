import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDetailI } from '../models/productDetail';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  api_uri_node = 'http://localhost:4000';
  base_path = `${this.api_uri_node}/product_details`;
  create_path = `${this.api_uri_node}/product_detail`;

  constructor(
    private http: HttpClient
  ) { }

  getAllProductDetail(): Observable<{ productDetail: ProductDetailI[] }> {
    return this.http
      .get<{ productDetail: ProductDetailI[] }>(this.base_path);
  }

  getOneProductDetail(id: number): Observable<{ productDetail: ProductDetailI[] }> {
    return this.http
      .get<{ productDetail: ProductDetailI[] }>(`${this.base_path}/${id}`);
  }

  createProductDetail(data: any): Observable<ProductDetailI> {
    return this.http.post<ProductDetailI>(this.create_path, data);
  }

  updateProductDetail(id: number, data: any): Observable<ProductDetailI> {
    return this.http.put<ProductDetailI>(`${this.base_path}/${id}`, data);
  }

  deleteProductDetail(id: number): Observable<ProductDetailI> {
    return this.http.delete<ProductDetailI>(`${this.api_uri_node}/product_detail/${id}`);
  }
}
