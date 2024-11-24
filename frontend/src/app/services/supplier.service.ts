import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SupplierI } from '../models/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  api_uri_node = 'http://localhost:4000';
  base_path = `${this.api_uri_node}/suppliers`
  create_path = `${this.api_uri_node}/supplier`

  constructor(
    private http: HttpClient
  ) { }

  getAllSupplier(): Observable<{ supplier: SupplierI[] }> {
    return this.http
      .get<{ supplier: SupplierI[] }>(this.base_path)
  }

  getOneSupplier(id: number): Observable<{ supplier: SupplierI[] }> {
    return this.http
      .get<{ supplier: SupplierI[] }>(`${this.base_path}/${id}`)
  }

  createSupplier(data: any): Observable<SupplierI> {
    return this.http.post<SupplierI>(this.create_path, data)
  }

  updateSupplier(id: number, data: any): Observable<SupplierI> {
    return this.http.put<SupplierI>(`${this.base_path}/${id}`, data);
  }

  deleteSupplier(id: number): Observable<SupplierI> {  // Update method to English
    return this.http.delete<SupplierI>(`${this.api_uri_node}/supplier/${id}`);
  }
}

