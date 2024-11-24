import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EmployeeI } from '../../../models/employee';  // Update to English model
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-create-employee',  // Update selector name for clarity
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './create-employee.component.html',  // Update template name
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {  // Update component class name

  public form: FormGroup;

  employeeService = inject(EmployeeService);  // Update variable name to 'employeeService'
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],  // Update form controls to match English model
      lastName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      position: ['', [Validators.required]],
      email: ['', [Validators.required]],  // Add email validation
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    const formValue: EmployeeI = this.form.value;  // Update to match English model
    console.log(formValue);
    this.employeeService.createEmployee(formValue).subscribe(  // Update service method
      () => {
        console.log(formValue);
        this.router.navigateByUrl('employees');  // Update route name
      },
      err => {
        console.log(err);
        console.log('Failed to create employee');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/employees');  // Update route name
  }

  get firstName() { return this.form.get('firstName'); }  // Update getter names
  get lastName() { return this.form.get('lastName'); }
  get phone() { return this.form.get('phone'); }
  get address() { return this.form.get('address'); }
  get position() { return this.form.get('position'); }
  get email() { return this.form.get('email'); }
}

