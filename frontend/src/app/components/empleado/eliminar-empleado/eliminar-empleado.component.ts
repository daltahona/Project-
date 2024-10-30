import { Component, OnInit, inject } from '@angular/core';
import { EmpleadoService } from '../../../services/empleado.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eliminar-empleado',
  standalone: true,
  imports: [],
  templateUrl: './eliminar-empleado.component.html',
  styleUrls: ['./eliminar-empleado.component.css']
})
export class EliminarEmpleadoComponent implements OnInit {

  empleadoService = inject(EmpleadoService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  constructor() { }

  ngOnInit(): void { }

  eliminarEmpleado(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') ?? '');
    if (confirm('¿Estás seguro de que quieres eliminar este empleado?')) {
      this.empleadoService.deleteEmpleado(id).subscribe({
        next: () => {
          console.log('Empleado eliminado correctamente');
          this.router.navigate(['/empleados']);
        },
        error: (err) => {
          console.log(err);
          console.log('Error al eliminar el empleado');
        }
      });
    }
  }
}
