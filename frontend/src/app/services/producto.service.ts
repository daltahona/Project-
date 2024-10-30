import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoI } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUriNode = 'http://localhost:4000';
  private basePath = `${this.apiUriNode}/productos`;

  constructor(private http: HttpClient) {}

  /**
   * Obtiene todos los productos.
   */
  getAllProductos(): Observable<{ producto: ProductoI[] }> {
    return this.http.get<{ producto: ProductoI[] }>(this.basePath);
  }

  /**
   * Obtiene un producto por ID.
   * @param productoId ID del producto.
   */
  getOneProducto(productoId: number): Observable<{ producto: ProductoI }> {
    return this.http.get<{ producto: ProductoI }>(`${this.basePath}/${productoId}`);
  }

  /**
   * Crea un nuevo producto.
   * @param producto Datos del producto a crear.
   */
  createProducto(producto: ProductoI): Observable<ProductoI> {
    return this.http.post<ProductoI>(this.basePath, producto);
  }

  /**
   * Actualiza un producto existente.
   * @param productoId ID del producto a actualizar.
   * @param producto Datos del producto a actualizar.
   */
  updateProducto(productoId: number, producto: ProductoI): Observable<ProductoI> {
    return this.http.put<ProductoI>(`${this.basePath}/${productoId}`, producto);
  }

  /**
   * Elimina un producto.
   * @param productoId ID del producto a eliminar.
   */
  deleteProducto(productoId: number): Observable<ProductoI> {
    return this.http.delete<ProductoI>(`${this.basePath}/${productoId}`);
  }
}
