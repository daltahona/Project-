import { Request, Response, Application, Router } from "express";
import { ProductTypeController } from '../controllers/productType.controller';

export class ProductTypeRoutes {
  public productTypeController: ProductTypeController = new ProductTypeController();

  public routes(app: Application): void {
    app.route("/product_types/test").get(this.productTypeController.test);
    app.route("/product_types").get(this.productTypeController.getAllProductType);
    app.route("/product_type/:id").get(this.productTypeController.getOneProductType);
    app.route("/product_type").post(this.productTypeController.createProductType);
    app.route("/product_type/:id").put(this.productTypeController.updateProductType);
    app.route("/product_type/:id").delete(this.productTypeController.deleteProductType);
  }
}
