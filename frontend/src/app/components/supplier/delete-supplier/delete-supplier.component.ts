import { Component, OnInit, inject } from '@angular/core';
import { SupplierService } from '../../../services/supplier.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-supplier',
  standalone: true,
  imports: [],
  templateUrl: './delete-supplier.component.html',
  styleUrls: ['./delete-supplier.component.css']
})
export class DeleteSupplierComponent implements OnInit {

  supplierService = inject(SupplierService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  constructor() { }

  ngOnInit(): void { }

  deleteSupplier(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') ?? '');
    if (confirm('Are you sure you want to delete this supplier?')) {
      this.supplierService.deleteSupplier(id).subscribe({
        next: () => {
          console.log('Supplier deleted successfully');
          this.router.navigate(['/suppliers']);
        },
        error: (err) => {
          console.log(err);
          console.log('Error deleting the supplier');
        }
      });
    }
  }
}

