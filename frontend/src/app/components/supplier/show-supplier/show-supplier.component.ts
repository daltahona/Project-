import { Component, OnInit } from '@angular/core';
import { SupplierI } from '../../../models/supplier';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SupplierService } from '../../../services/supplier.service'

@Component({
  selector: 'app-show-supplier',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './show-supplier.component.html',
  styleUrl: './show-supplier.component.css'
})
export class ShowSupplierComponent implements OnInit {
  public suppliers: SupplierI[] = [];

  constructor(
    private supplierService: SupplierService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showSuppliers();
  }

  showSuppliers() {
    this.supplierService.getAllSupplier()
      .subscribe({
        next: (data) => {
          this.suppliers = data.supplier;
        }
      });
  }

  delete(id: number): void {
    this.router.navigateByUrl('/suppliers');
    this.supplierService.deleteSupplier(id).subscribe(
      () => {
        this.showSuppliers();
      },
      err => {
        console.log('error');
        this.router.navigateByUrl('/suppliers');
      }
    );
  }
}

