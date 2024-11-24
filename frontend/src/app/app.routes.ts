
import { Routes } from '@angular/router';

import { ShowCategoryComponent } from './components/category/show-category/show-category.component';
import { CreateCategoryComponent } from './components/category/create-category/create-category.component';
import { UpdateCategoryComponent } from './components/category/update-category/update-category.component';

import { ShowEmployeeComponent } from './components/employee/show-employee/show-employee.component';
import { CreateEmployeeComponent } from './components/employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/employee/update-employee/update-employee.component';

import { ShowSupplierComponent } from './components/supplier/show-supplier/show-supplier.component';
import { CreateSupplierComponent } from './components/supplier/create-supplier/create-supplier.component';
import { UpdateSupplierComponent } from './components/supplier/update-supplier/update-supplier.component';

import { ShowProductDetailComponent } from './components/productDetail/show-product-detail/show-product-detail.component';
import { CreateProductDetailComponent } from './components/productDetail/create-product-detail/create-product-detail.component';
import { UpdateProductDetailComponent } from './components/productDetail/update-product-detail/update-product-detail.component';

import { ShowProductTypeComponent } from './components/productType/show-product-type/show-product-type.component';
import { CreateProductTypeComponent } from './components/productType/create-product-type/create-product-type.component';
import { UpdateProductTypeComponent } from './components/productType/update-product-type/update-product-type.component';

import { ShowProductComponent } from './components/product/show-product/show-product.component';
import { CreateProductComponent } from './components/product/create-product/create-product.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },

  {
    path: "employees",
    component: ShowEmployeeComponent
  },
  {
    path: "employees/new",
    component: CreateEmployeeComponent
  },
  {
    path: "employees/edit/:id",
    component: UpdateEmployeeComponent
  },
  
  {
    path: "suppliers",
    component: ShowSupplierComponent
  },
  {
    path: "suppliers/new",
    component: CreateSupplierComponent
  },
  {
    path: "suppliers/edit/:id",
    component: UpdateSupplierComponent
  },

  {
    path: "categories",
    component: ShowCategoryComponent
  },
  {
    path: "categories/new",
    component: CreateCategoryComponent
  },
  {
    path: "categories/edit/:id",
    component: UpdateCategoryComponent
  },

  {
    path: "product_details",
    component: ShowProductDetailComponent
  },
  {
    path: "product_details/new",
    component: CreateProductDetailComponent
  },
  {
    path: "product_details/edit/:id",
    component: UpdateProductDetailComponent
  },

  {
    path: "product_types",
    component: ShowProductTypeComponent
  },
  {
    path: "product_types/new",
    component: CreateProductTypeComponent
  },
  {
    path: "product_types/edit/:id",
    component: UpdateProductTypeComponent
  },

  {
    path: "products",
    component: ShowProductComponent
  },
  {
    path: "products/new",
    component: CreateProductComponent
  },
  {
    path: "products/edit/:id",
    component: UpdateProductComponent
  }

];

