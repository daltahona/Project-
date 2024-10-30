import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoService } from '../../../services/empleado.service';
import { Router } from '@angular/router';
import { EmpleadoI } from '../../../models/empleado';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-crear-empleado',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  public form: FormGroup;

  empleadoService = inject(EmpleadoService);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      cargo: ['', [Validators.required]],
      correo: ['', [Validators.required]],
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    const formValue: EmpleadoI = this.form.value;
    console.log(formValue);
    this.empleadoService.createEmpleado(formValue).subscribe(
      () => {
        console.log(formValue);
        this.router.navigateByUrl('empleados');
      },
      err => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/empleados');
  }

  get nombre() { return this.form.get('nombre'); }
  get apellido() { return this.form.get('apellido'); }
  get telefono() { return this.form.get('telefono'); }
  get direccion() { return this.form.get('direccion'); }
  get cargo() { return this.form.get('cargo'); }
  get correo() { return this.form.get('correo'); }
}
