import { EmpleadoRoutes } from "./empleado";
import { ProveedorRoutes } from "./proveedor";
import { DetalleProductoRoutes } from "./detalleProducto";
import { CategoriaRoutes } from "./categoria";
import { TipoProductoRoutes } from "./tipoProducto";
import { ProductoRoutes } from "./producto";

export class Routes {
public empleadoRoutes: EmpleadoRoutes = new EmpleadoRoutes();
public proveedorRoutes: ProveedorRoutes = new ProveedorRoutes();
public detalleProductoRoutes: DetalleProductoRoutes = new DetalleProductoRoutes();
public categoriaRoutes: CategoriaRoutes = new CategoriaRoutes();
public tipoProductoRoutes: TipoProductoRoutes = new TipoProductoRoutes();
public productoRoutes: ProductoRoutes = new ProductoRoutes();
}