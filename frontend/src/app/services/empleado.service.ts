import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpleadoI } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  api_uri_node = 'http://localhost:4000';
  base_path = `${this.api_uri_node}/empleados`

  constructor(
    private http:HttpClient
  ) { }

  getAllEmpleado():Observable<{empleado:EmpleadoI[]}>{
    return this.http
      .get<{empleado:EmpleadoI[]}>(this.base_path)
  }

  getOneEmpleado(id: number):Observable<{empleado:EmpleadoI[]}>{
    return this.http
      .get<{empleado:EmpleadoI[]}>(`${this.base_path}/${id}`)
  }



  createEmpleado(data: any):Observable<EmpleadoI>{
    return this.http.post<EmpleadoI>(this.base_path, data)
  }

  updateEmpleado(id: number, data: any): Observable<EmpleadoI> {
    return this.http.put<EmpleadoI>(`${this.base_path}/${id}`, data);
  }

  deleteEmpleado(id: number): Observable<EmpleadoI> {
    return this.http.delete<EmpleadoI>(`${this.base_path}/eliminar1/${id}`);
  }
}
