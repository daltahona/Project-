import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeI } from '../models/employee';  // Update import to match English model

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {  // Update service name to follow English naming conventions
  api_uri_node = 'http://localhost:4000';
  base_path = `${this.api_uri_node}/employees`;  // Update path to use 'employees'
  create_path = `${this.api_uri_node}/employee`;  // Update path to use 'employee'

  constructor(
    private http: HttpClient
  ) { }

  getAllEmployee(): Observable<{ employee: EmployeeI[] }> {  // Update method and response to English
    return this.http
      .get<{ employee: EmployeeI[] }>(this.base_path);  // Update to English variable name
  }

  getOneEmployee(id: number): Observable<{ employee: EmployeeI[] }> {  // Update method to English
    return this.http
      .get<{ employee: EmployeeI[] }>(`${this.base_path}/${id}`);
  }

  createEmployee(data: any): Observable<EmployeeI> {  // Update method to English
    return this.http.post<EmployeeI>(this.create_path, data);
  }

  updateEmployee(id: number, data: any): Observable<EmployeeI> {  // Update method to English
    return this.http.put<EmployeeI>(`${this.base_path}/${id}`, data);
  }

  deleteEmployee(id: number): Observable<EmployeeI> {  // Update method to English
    return this.http.delete<EmployeeI>(`${this.api_uri_node}/employee/${id}`);
  }
}
