import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductI } from '../../../models/product'; // Modelo del producto
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ProductService } from '../../../services/product.service'; // Servicio de productos

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './create-product.component.html', // Plantilla correspondiente
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  public form: FormGroup;

  productService = inject(ProductService);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      employee_id: [0, [Validators.required, Validators.min(1)]],
      supplier_id: [0, [Validators.required, Validators.min(1)]],
      category_id: [0, [Validators.required, Validators.min(1)]],
      productType_id: [0, [Validators.required, Validators.min(1)]],
      productDetail_id: [0, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    const formValue: ProductI = this.form.value;
    console.log(formValue);
    this.productService.createProduct(formValue).subscribe(
      () => {
        console.log('Product created successfully:', formValue);
        this.router.navigateByUrl('products');
      },
      err => {
        console.log(err);
        console.log('Failed to create product');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/products');
  }

  get name() { return this.form.get('name'); }
  get quantity() { return this.form.get('quantity'); }
  get employee_id() { return this.form.get('employee_id'); }
  get supplier_id() { return this.form.get('supplier_id'); }
  get category_id() { return this.form.get('category_id'); }
  get productType_id() { return this.form.get('productType_id'); }
  get productDetail_id() { return this.form.get('productDetail_id'); }
}

