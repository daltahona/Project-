import { Routes } from '@angular/router';
import { MostrarProveedorComponent } from './components/proveedor/mostrar-proveedor/mostrar-proveedor.component';
import { CrearProveedorComponent } from './components/proveedor/crear-proveedor/crear-proveedor.component';
import { ActualizarProveedorComponent } from './components/proveedor/actualizar-proveedor/actualizar-proveedor.component';

import { MostrarEmpleadoComponent } from './components/empleado/mostrar-empleado/mostrar-empleado.component';
import { CrearEmpleadoComponent } from './components/empleado/crear-empleado/crear-empleado.component';
import { ActualizarEmpleadoComponent } from './components/empleado/actualizar-empleado/actualizar-empleado.component';

import { MostrarCategoriaComponent } from './components/categoria/mostrar-categoria/mostrar-categoria.component';
import { CrearCategoriaComponent } from './components/categoria/crear-categoria/crear-categoria.component';
import { ActualizarCategoriaComponent } from './components/categoria/actualizar-categoria/actualizar-categoria.component';

import { MostrarTipoProductoComponent } from './components/tipo_Producto/mostrar-tipo-producto/mostrar-tipo-producto.component';
import { CrearTipoProductoComponent } from './components/tipo_Producto/crear-tipo-producto/crear-tipo-producto.component';
import { ActualizarTipoProductoComponent } from './components/tipo_Producto/actualizar-tipo-producto/actualizar-tipo-producto.component';

import { MostrarDetalleProductoComponent } from './components/detalleProducto/mostrar-detalle-producto/mostrar-detalle-producto.component';
import { CrearDetalleProductoComponent } from './components/detalleProducto/crear-detalle-producto/crear-detalle-producto.component';
import { ActualizarDetalleProductoComponent } from './components/detalleProducto/actualizar-detalle-producto/actualizar-detalle-producto.component';

import { MostrarProductoComponent } from './components/producto/mostrar-producto/mostrar-producto.component';
import { CrearProductoComponent } from './components/producto/crear-producto/crear-producto.component';
import { ActualizarProductoComponent } from './components/producto/actualizar-producto/actualizar-producto.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: "proveedores",
    component: MostrarProveedorComponent
  },
  {
    path: "proveedores/nuevo",
    component: CrearProveedorComponent
  },
  {
    path: "proveedores/edit/:id",
    component: ActualizarProveedorComponent
  },
  {
    path: "empleados",
    component: MostrarEmpleadoComponent
  },
  {
    path: "empleados/nuevo",
    component: CrearEmpleadoComponent
  },
  {
    path: "empleados/edit/:id",
    component: ActualizarEmpleadoComponent
  },
  {
    path: "categorias",
    component: MostrarCategoriaComponent
  },
  {
    path: "categorias/nuevo",
    component: CrearCategoriaComponent
  },
  {
    path: "categorias/edit/:id",
    component: ActualizarCategoriaComponent
  },
  {
    path: "tipo_Productos",
    component: MostrarTipoProductoComponent
  },
  {
    path: "tipo_Productos/nuevo",
    component: CrearTipoProductoComponent
  },
  {
    path: "tipo_Productos/edit/:id",
    component: ActualizarTipoProductoComponent
  },
  {
    path: "detalle_productos",
    component: MostrarDetalleProductoComponent
  },
  {
    path: "detalle_productos/nuevo",
    component: CrearDetalleProductoComponent
  },
  {
    path: "detalle_productos/edit/:id",
    component: ActualizarDetalleProductoComponent
  },
  {
    path: "productos",
    component: MostrarProductoComponent
  },
  {
    path: "productos/nuevo",
    component: CrearProductoComponent
  },
  {
    path: "productos/edit/:id",
    component: ActualizarProductoComponent
  },
];