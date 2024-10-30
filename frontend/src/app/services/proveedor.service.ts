import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProveedorI } from '../models/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  api_uri_node = 'http://localhost:4000';
  base_path = `${this.api_uri_node}/proveedores`

  constructor(
    private http: HttpClient
  ) { }

  getAllProveedor(): Observable<{ proveedor: ProveedorI[] }> {
    return this.http
      .get<{ proveedor: ProveedorI[] }>(this.base_path)
  }

  getOneProveedor(id: number): Observable<{ proveedor: ProveedorI[] }> {
    return this.http
      .get<{ proveedor: ProveedorI[] }>(`${this.base_path}/${id}`)
  }

  createProveedor(data: any): Observable<ProveedorI> {
    return this.http.post<ProveedorI>(this.base_path, data)
  }

  updateProveedor(id: number, data: any): Observable<ProveedorI> {
    return this.http.put<ProveedorI>(`${this.base_path}/${id}`, data);
  }

  deleteProveedor(id: number): Observable<ProveedorI> {
    return this.http.delete<ProveedorI>(`${this.base_path}/eliminar/${id}`);
  }
}