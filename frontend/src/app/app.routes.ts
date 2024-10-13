import { Routes } from '@angular/router';
import { MostrarEmpleadoComponent } from './components/empleado/mostrar-empleado/mostrar-empleado.component';
import { CrearEmpleadoComponent } from './components/empleado/crear-empleado/crear-empleado.component';
import { ActualizarEmpleadoComponent } from './components/empleado/actualizar-empleado/actualizar-empleado.component';

import { MostrarCategoriaComponent } from './components/categoria/mostrar-categoria/mostrar-categoria.component';
import { CrearCategoriaComponent } from './components/categoria/crear-categoria/crear-categoria.component';
import { ActualizarCategoriaComponent } from './components/categoria/actualizar-categoria/actualizar-categoria.component';

import { MostrarTipoProductoComponent } from './components/tipo_Producto/mostrar-tipo-producto/mostrar-tipo-producto.component';
import { CrearTipoProductoComponent } from './components/tipo_Producto/crear-tipo-producto/crear-tipo-producto.component';
import { ActualizarTipoProductoComponent } from './components/tipo_Producto/actualizar-tipo-producto/actualizar-tipo-producto.component';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: '', 
        pathMatch: 'full' 
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
];