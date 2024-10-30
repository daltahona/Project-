import { Component, OnInit } from '@angular/core';
import { DetalleProductoI } from '../../../models/detalle_producto';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DetalleProductoService } from '../../../services/detalle-producto.service'

@Component({
  selector: 'app-mostrar-detalle-producto',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './mostrar-detalle-producto.component.html',
  styleUrl: './mostrar-detalle-producto.component.css'
})
export class MostrarDetalleProductoComponent implements OnInit{
  public detalleProductos: DetalleProductoI[] = []
  constructor(
    private detalleProductoService: DetalleProductoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarDetalleProductos()
  }

  mostrarDetalleProductos() {
    this.detalleProductoService.getAllDetalleProducto()
      .subscribe({
        next: (data) => {
          this.detalleProductos = data.detalleProducto
        }
      })
  }

  eliminar(id: number): void{
    this.router.navigateByUrl('/detalle_productos');
    this.detalleProductoService.deleteDetalleProducto(id).subscribe(
      () => {
        this.mostrarDetalleProductos();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/detalle_productos');
      }
    );
  }
}
