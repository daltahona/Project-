import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../../services/category.service';
import { Router } from '@angular/router';
import { CategoryI } from '../../../models/category';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-create-category',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  public form: FormGroup;

  categoryService = inject(CategoryService);
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
    const formValue: CategoryI = this.form.value;
    console.log(formValue);
    this.categoryService.createCategory(formValue).subscribe(
      () => {
        console.log(formValue);
        this.router.navigateByUrl('categories');
      },
      err => {
        console.log(err);
        console.log('Failed to create category');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/categories');
  }

  get name() { return this.form.get('name'); }
  get description() { return this.form.get('description'); }
}
