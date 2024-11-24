import { Component, OnInit } from '@angular/core';
import { CategoryI } from '../../../models/category';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CategoryService } from '../../../services/category.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-category',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule, FormsModule],
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent implements OnInit {
  public categories: CategoryI[] = [];
  public filteredCategories: CategoryI[] = []; // Para almacenar las categorías filtradas
  public searchCategoryTerm: string = ''; // Para el término de búsqueda

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showCategories();
  }

  // Método para cargar todas las categorías
  showCategories(): void {
    this.categoryService.getAllCategory()
      .subscribe({
        next: (data) => {
          this.categories = data.category;
          this.filteredCategories = [...this.categories]; // Inicializa el filtro con todas las categorías
        }
      });
  }

  // Método para filtrar las categorías basadas en el término de búsqueda
  filterCategories(): void {
    if (this.searchCategoryTerm) {
      this.filteredCategories = this.categories.filter(category =>
        category.name.toLowerCase().includes(this.searchCategoryTerm.toLowerCase()) ||
        category.description.toLowerCase().includes(this.searchCategoryTerm.toLowerCase())
      );
    } else {
      this.filteredCategories = [...this.categories]; // Muestra todas las categorías si no hay búsqueda
    }
  }

  // Método para eliminar una categoría
  delete(id: number): void {
    this.router.navigateByUrl('/categories');
    this.categoryService.deleteCategory(id).subscribe(
      () => {
        this.showCategories(); // Recarga las categorías después de eliminar una
      },
      err => {
        console.log('Error occurred while deleting');
        this.router.navigateByUrl('/categories');
      }
    );
  }
}

