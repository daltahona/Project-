import { Component, OnInit } from '@angular/core';
import { TipoProductoI } from '../../../models/tipo_Producto';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TipoProductoService } from '../../../services/tipo-producto.service'

@Component({
  selector: 'app-mostrar-tipo-producto',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './mostrar-tipo-producto.component.html',
  styleUrl: './mostrar-tipo-producto.component.css'
})
export class MostrarTipoProductoComponent implements OnInit{
  public tipoProductos:TipoProductoI[] = []
  constructor(
    private tipoProductoService: TipoProductoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarTipoProductos()
  }

  mostrarTipoProductos() {
    this.tipoProductoService.getAllTipoProducto()
      .subscribe({
        next: (data) => {
          this.tipoProductos = data.tipoProducto
          // console.log(this.tipo_Producto)
        }
      })
  }


  eliminar(id: number): void{
    this.router.navigateByUrl('/tipoProductos');
    this.tipoProductoService.deleteTipoProducto(id).subscribe(
      () => {
        // this.messageService.add({severity:'warn', summary: 'Notificación', detail: 'Empleado Eliminado', life:5000});
        this.mostrarTipoProductos();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/tipoProductos');

      }
    );
  }
}
