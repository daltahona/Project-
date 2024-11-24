import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTypeService } from '../../../services/product-type.service';
import { Router } from '@angular/router';
import { ProductTypeI } from '../../../models/productType';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-create-product-type',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './create-product-type.component.html',
  styleUrls: ['./create-product-type.component.css']
})
export class CreateProductTypeComponent implements OnInit {

  public form: FormGroup;

  productTypeService = inject(ProductTypeService);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    const formValue: ProductTypeI = this.form.value;
    console.log(formValue);
    this.productTypeService.createProductType(formValue).subscribe(
      () => {
        console.log('Product Type created successfully:', formValue);
        this.router.navigateByUrl('product_types');
      },
      err => {
        console.log('Error creating Product Type:', err);
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/product_types');
  }

  get name() { return this.form.get('name'); }
  get description() { return this.form.get('description'); }
}
