import { Component, OnInit } from '@angular/core';
import { ProductDetailI } from '../../../models/productDetail';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProductDetailService } from '../../../services/product-detail.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-product-detail',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule, FormsModule],
  templateUrl: './show-product-detail.component.html',
  styleUrl: './show-product-detail.component.css'
})
export class ShowProductDetailComponent implements OnInit {
  public productDetails: ProductDetailI[] = []; // Lista completa de detalles de producto
  public filteredProductDetails: ProductDetailI[] = []; // Lista filtrada
  public searchProductDetailTerm: string = ''; // Término de búsqueda

  constructor(
    private productDetailService: ProductDetailService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.showProductDetails();
  }

  showProductDetails(): void {
    this.productDetailService.getAllProductDetail().subscribe({
      next: (data) => {
        this.productDetails = data.productDetail;
        this.filteredProductDetails = [...this.productDetails]; // Inicialmente, muestra todos
      }
    });
  }

  delete(id: number): void {
    this.router.navigateByUrl('/product_details');
    this.productDetailService.deleteProductDetail(id).subscribe(
      () => {
        this.showProductDetails();
      },
      (err) => {
        console.log('error');
        this.router.navigateByUrl('/product_details');
      }
    );
  }

  filterProductDetails(): void {
    const term = this.searchProductDetailTerm.toLowerCase();
    this.filteredProductDetails = this.productDetails.filter((productDetail) =>
      productDetail.description.toLowerCase().includes(term) ||
      productDetail.value.toString().includes(term) ||
      productDetail.isbn.toLowerCase().includes(term)
    );
  }
}

