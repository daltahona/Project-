import { Component, OnInit, inject } from '@angular/core';
import { ProductTypeService } from '../../../services/product-type.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-product-type',
  standalone: true,
  imports: [],
  templateUrl: './delete-product-type.component.html',
  styleUrls: ['./delete-product-type.component.css']
})
export class DeleteProductTypeComponent implements OnInit {

  productTypeService = inject(ProductTypeService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  constructor() { }

  ngOnInit(): void { }

  deleteProductType(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') ?? '', 10);
    if (confirm('Are you sure you want to delete this product type?')) {
      this.productTypeService.deleteProductType(id).subscribe({
        next: () => {
          console.log('Product type deleted successfully');
          this.router.navigate(['/product_types']);
        },
        error: (err) => {
          console.error('Error deleting product type:', err);
        }
      });
    }
  }
}
