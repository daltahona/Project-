import { Component, OnInit } from '@angular/core';
import { CategoriaI } from '../../../models/categoria';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CategoriaService } from '../../../services/categoria.service'

@Component({
  selector: 'app-mostrar-categoria',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './mostrar-categoria.component.html',
  styleUrl: './mostrar-categoria.component.css'
})
export class MostrarCategoriaComponent implements OnInit{
  public categorias:CategoriaI[] = []
  constructor(
    private categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarCategorias()
  }

  mostrarCategorias() {
    this.categoriaService.getAllCategoria()
      .subscribe({
        next: (data) => {
          this.categorias = data.categoria
          // console.log(this.categoria)
        }
      })
  }


  eliminar(id: number): void{
    this.router.navigateByUrl('/categorias');
    this.categoriaService.deleteCategoria(id).subscribe(
      () => {
        // this.messageService.add({severity:'warn', summary: 'Notificación', detail: 'Empleado Eliminado', life:5000});
        this.mostrarCategorias();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/categorias');

      }
    );
  }
}
