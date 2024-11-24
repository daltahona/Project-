import { Component, OnInit, inject } from '@angular/core';
import { ProductDetailService } from '../../../services/product-detail.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './delete-product-detail.component.html',
  styleUrls: ['./delete-product-detail.component.css']
})
export class DeleteProductDetailComponent implements OnInit {

  productDetailService = inject(ProductDetailService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  constructor() { }

  ngOnInit(): void { }

  deleteProductDetail(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') ?? '');
    if (confirm('Are you sure you want to delete this product detail?')) {
      this.productDetailService.deleteProductDetail(id).subscribe({
        next: () => {
          console.log('Product detail deleted successfully');
          this.router.navigate(['/product_details']);
        },
        error: (err) => {
          console.log(err);
          console.log('Error deleting product detail');
        }
      });
    }
  }
}
