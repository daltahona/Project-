import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProductService } from '../../../services/product.service';
import { ProductI } from '../../../models/product';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-show-products',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule, FormsModule],
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  public products: ProductI[] = [];
  public filteredProducts: ProductI[] = [];
  public employees: any[] = [];
  public suppliers: any[] = [];
  public categories: any[] = [];
  public productTypes: any[] = [];
  public productDetails: any[] = [];

  public searchTerm = '';  // Término de búsqueda global para todos los campos

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadAllData();
  }

  // Método para cargar todos los datos al presionar el botón
  loadAllData(): void {
    this.productService.getAllProducts()
      .subscribe({
        next: (data) => {
          this.products = data.products;
          this.filteredProducts = [...this.products];  // Inicializamos con todos los productos
        },
        error: (err) => {
          console.error('Error al cargar los datos de productos', err);
        }
      });
  }

  // Método para buscar productos
  onSearch(): void {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      product.employee_id.toString().includes(this.searchTerm) ||
      product.supplier_id.toString().includes(this.searchTerm) ||
      product.category_id.toString().includes(this.searchTerm) ||
      product.productType_id.toString().includes(this.searchTerm) ||
      product.productDetail_id.toString().includes(this.searchTerm)
    );
  }

  delete(id: number): void {
    this.router.navigateByUrl('/products');
    this.productService.deleteProduct(id).subscribe(
      () => {
        this.loadAllData();
      },
      (err: unknown) => {
        console.log('error');
        this.router.navigateByUrl('/products');
      }
    );
  }
}
