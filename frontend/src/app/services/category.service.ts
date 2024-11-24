import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryI } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  api_uri_node = 'http://localhost:4000';
  base_path = `${this.api_uri_node}/categories`;
  create_path = `${this.api_uri_node}/category`; 

  constructor(
    private http: HttpClient
  ) { }

  getAllCategory(): Observable<{ category: CategoryI[] }> {
    return this.http
      .get<{ category: CategoryI[] }>(this.base_path);
  }

  getOneCategory(id: number): Observable<{ category: CategoryI[] }> {
    return this.http
      .get<{ category: CategoryI[] }>(`${this.base_path}/${id}`);
  }

  createCategory(data: any): Observable<CategoryI> {
    return this.http.post<CategoryI>(this.create_path, data);
  }

  updateCategory(id: number, data: any): Observable<CategoryI> {
    return this.http.put<CategoryI>(`${this.base_path}/${id}`, data);
  }

  deleteCategory(id: number): Observable<CategoryI> {  // Update method to English
    return this.http.delete<CategoryI>(`${this.api_uri_node}/category/${id}`);
  }
}
