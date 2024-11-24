import { Component, OnInit, inject } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-category',
  standalone: true,
  imports: [],
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {

  categoryService = inject(CategoryService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  constructor() { }

  ngOnInit(): void { }

  deleteCategory(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') ?? '');
    if (confirm('Are you sure you want to delete this category?')) {
      this.categoryService.deleteCategory(id).subscribe({
        next: () => {
          console.log('Category deleted successfully');
          this.router.navigate(['/categories']);
        },
        error: (err) => {
          console.log(err);
          console.log('Error deleting the category');
        }
      });
    }
  }
}
