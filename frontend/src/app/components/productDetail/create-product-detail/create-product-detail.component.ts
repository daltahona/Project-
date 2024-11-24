import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailService } from '../../../services/product-detail.service';
import { Router } from '@angular/router';
import { ProductDetailI } from '../../../models/productDetail';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-create-product-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './create-product-detail.component.html',
  styleUrls: ['./create-product-detail.component.css']
})
export class CreateProductDetailComponent implements OnInit {

  public form: FormGroup;

  productDetailService = inject(ProductDetailService);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      description: ['', [Validators.required]],
      value: ['', [Validators.required]],
      isbn: ['', [Validators.required]],
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    const formValue: ProductDetailI = this.form.value;
    console.log(formValue);
    this.productDetailService.createProductDetail(formValue).subscribe(
      () => {
        console.log(formValue);
        this.router.navigateByUrl('product_details');
      },
      err => {
        console.log(err);
        console.log('It was not created successfully');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/product_details');
  }

  get description() { return this.form.get('description'); }
  get value() { return this.form.get('value'); }
  get isbn() { return this.form.get('isbn'); }
}
