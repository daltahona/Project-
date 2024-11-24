import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  standalone: true,
  imports: [],
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  productService = inject(ProductService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  constructor() { }

  ngOnInit(): void { }

  deleteProduct(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') ?? '');
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          console.log('Product deleted successfully');
          this.router.navigate(['/products']);
        },
        error: (err) => {
          console.log(err);
          console.log('Error deleting the product');
        }
      });
    }
  }
}

