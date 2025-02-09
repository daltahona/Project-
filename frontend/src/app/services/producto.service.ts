import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoI } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  api_uri_node = 'http://localhost:4000';
  base_path = `${this.api_uri_node}/productos`
  create_path = `${this.api_uri_node}/producto`; 

  constructor(
    private http: HttpClient
  ) { }

  getAllProductos(): Observable<{ productos: ProductoI[] }> {
    return this.http
      .get<{ productos: ProductoI[] }>(this.base_path)
  }

  getOneProducto(id: number): Observable<{ producto: ProductoI[] }> {
    return this.http
      .get<{ producto: ProductoI[] }>(`${this.base_path}/${id}`)
  }

  createProducto(data: any): Observable<ProductoI> {
    return this.http.post<ProductoI>(this.create_path, data)
  }

  updateProducto(id: number, data: any): Observable<ProductoI> {
    return this.http.put<ProductoI>(`${this.base_path}/${id}`, data);
  }

  deleteProducto(id: number): Observable<ProductoI> {
    return this.http.delete<ProductoI>(`${this.base_path}/producto/${id}`);
  }
}

