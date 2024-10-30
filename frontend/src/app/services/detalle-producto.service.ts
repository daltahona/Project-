import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetalleProductoI } from '../models/detalle_producto';

@Injectable({
  providedIn: 'root'
})
export class DetalleProductoService {
  api_uri_node = 'http://localhost:4000';
  base_path = `${this.api_uri_node}/detalle_productos`

  constructor(
    private http: HttpClient
  ) { }

  getAllDetalleProducto(): Observable<{ detalleProducto: DetalleProductoI[] }> {
    return this.http
      .get<{ detalleProducto: DetalleProductoI[] }>(this.base_path)
  }

  getOneDetalleProducto(id: number): Observable<{ detalleProducto: DetalleProductoI[] }> {
    return this.http
      .get<{ detalleProducto: DetalleProductoI[] }>(`${this.base_path}/${id}`)
  }

  createDetalleProducto(data: any): Observable<DetalleProductoI> {
    return this.http.post<DetalleProductoI>(this.base_path, data)
  }

  updateDetalleProducto(id: number, data: any): Observable<DetalleProductoI> {
    return this.http.put<DetalleProductoI>(`${this.base_path}/${id}`, data);
  }

  deleteDetalleProducto(id: number): Observable<DetalleProductoI> {
    return this.http.delete<DetalleProductoI>(`${this.base_path}/eliminar/${id}`);
  }
}
