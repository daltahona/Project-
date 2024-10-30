import { Component, OnInit } from '@angular/core';
import { ProductoI } from '../../../models/producto';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-mostrar-producto',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './mostrar-producto.component.html',
  styleUrl: './mostrar-producto.component.css'
})
export class MostrarProductoComponent implements OnInit {
  public productos: ProductoI[] = [];

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarProductos();
  }

  /**
   * Muestra todos los productos.
   */
  mostrarProductos() {
    this.productoService.getAllProductos().subscribe(data => {
      console.log(data);
      this.productos = data.producto;
      console.log(this.productos);
    });
  }

  /**
   * Elimina un producto.
   * @param productoId ID del producto a eliminar.
   */
  eliminar(productoId: number): void {
    this.router.navigateByUrl('/productos');
    this.productoService.deleteProducto(productoId).subscribe(
      () => {
        this.mostrarProductos();
      },
      err => {
        console.log('error');
        this.router.navigateByUrl('/productos');
      }
    );
  }
}