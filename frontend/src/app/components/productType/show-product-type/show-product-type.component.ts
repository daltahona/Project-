import { Component, OnInit } from '@angular/core';
import { ProductTypeI } from '../../../models/productType';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProductTypeService } from '../../../services/product-type.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-product-type',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule, FormsModule],
  templateUrl: './show-product-type.component.html',
  styleUrls: ['./show-product-type.component.css']
})
export class ShowProductTypeComponent implements OnInit {
  public productTypes: ProductTypeI[] = [];
  public filteredProductTypes: ProductTypeI[] = [];
  public searchProductTypeTerm: string = '';

  constructor(
    private productTypeService: ProductTypeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.showProductTypes();
  }

  showProductTypes() {
    this.productTypeService.getAllProductTypes()
      .subscribe({
        next: (data) => {
          this.productTypes = data.productType;
          this.filteredProductTypes = [...this.productTypes]; // Inicializa con todos los datos
        }
      });
  }

  filterProductTypes(): void {
    const term = this.searchProductTypeTerm.trim().toLowerCase();
    this.filteredProductTypes = this.productTypes.filter(productType =>
      productType.name.toLowerCase().includes(term) ||
      productType.description.toLowerCase().includes(term)
    );
  }

  delete(id: number): void {
    this.router.navigateByUrl('/productTypes');
    this.productTypeService.deleteProductType(id).subscribe(
      () => {
        this.showProductTypes();
      },
      err => {
        console.log('error');
        this.router.navigateByUrl('/productTypes');
      }
    );
  }
}

