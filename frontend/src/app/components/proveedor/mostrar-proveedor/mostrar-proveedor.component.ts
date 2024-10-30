import { Component, OnInit } from '@angular/core';
import { ProveedorI } from '../../../models/proveedor';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProveedorService } from '../../../services/proveedor.service'

@Component({
  selector: 'app-mostrar-proveedor',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './mostrar-proveedor.component.html',
  styleUrl: './mostrar-proveedor.component.css'
})
export class MostrarProveedorComponent implements OnInit {
  public proveedores: ProveedorI[] = [];

  constructor(
    private proveedorService: ProveedorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarProveedores();
  }

  mostrarProveedores() {
    this.proveedorService.getAllProveedor()
      .subscribe({
        next: (data) => {
          this.proveedores = data.proveedor;
        }
      });
  }

  eliminar(id: number): void {
    this.router.navigateByUrl('/proveedores');
    this.proveedorService.deleteProveedor(id).subscribe(
      () => {
        this.mostrarProveedores();
      },
      err => {
        console.log('error');
        this.router.navigateByUrl('/proveedores');
      }
    );
  }
}
