import { Request, Response, Application, Router } from "express";
import { ProductController } from '../controllers/product.controller';

export class ProductRoutes {
  public productController: ProductController = new ProductController();

  public routes(app: Application): void {
    app.route("/products/test").get(this.productController.test);
    app.route("/products").get(this.productController.getAllProducts);
    app.route("/product/:id").get(this.productController.getOneProduct);
    app.route("/product").post(this.productController.createProduct);
    app.route("/product/:id").put(this.productController.updateProduct);
    app.route("/product/:id").delete(this.productController.deleteProduct);
    app.route("/product/:id/hide").put(this.productController.hideProduct);
  }
}
