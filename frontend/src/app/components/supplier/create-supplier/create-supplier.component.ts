import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierService } from '../../../services/supplier.service';
import { Router } from '@angular/router';
import { SupplierI } from '../../../models/supplier';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-create-supplier',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.css']
})
export class CreateSupplierComponent implements OnInit {

  public form: FormGroup;

  supplierService = inject(SupplierService);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      taxId: ['', [Validators.required]],
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    const formValue: SupplierI = this.form.value;
    console.log(formValue);
    this.supplierService.createSupplier(formValue).subscribe(
      () => {
        console.log(formValue);
        this.router.navigateByUrl('suppliers');
      },
      err => {
        console.log(err);
        console.log('Failed to create supplier');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/suppliers');
  }

  get name() { return this.form.get('name'); }
  get phone() { return this.form.get('phone'); }
  get email() { return this.form.get('email'); }
  get taxId() { return this.form.get('taxId'); }
}

