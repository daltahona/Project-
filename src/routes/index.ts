import { EmployeeRoutes } from "./employee";
import { SupplierRoutes } from "./supplier";
import { ProductDetailRoutes } from "./productDetail";
import { CategoryRoutes } from "./category";
import { ProductTypeRoutes } from "./productType";
import { ProductRoutes } from "./product";

export class Routes {
    public employeeRoutes: EmployeeRoutes = new EmployeeRoutes();
    public supplierRoutes: SupplierRoutes = new SupplierRoutes();
    public productDetailRoutes: ProductDetailRoutes = new ProductDetailRoutes();
    public categoryRoutes: CategoryRoutes = new CategoryRoutes();
    public productTypeRoutes: ProductTypeRoutes = new ProductTypeRoutes();
    public productRoutes: ProductRoutes = new ProductRoutes();
}
