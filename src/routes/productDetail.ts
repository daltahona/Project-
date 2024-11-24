import { Request, Response, Application, Router } from "express";
import { ProductDetailController } from '../controllers/productDetail.controller';

export class ProductDetailRoutes {
  public productDetailController: ProductDetailController = new ProductDetailController();

  public routes(app: Application): void {
    app.route("/product_details/test").get(this.productDetailController.test);
    app.route("/product_details").get(this.productDetailController.getAllProductDetail);
    app.route("/product_detail/:id").get(this.productDetailController.getOneProductDetail);
    app.route("/product_detail").post(this.productDetailController.createProductDetail);
    app.route("/product_detail/:id").put(this.productDetailController.updateProductDetail);
    app.route("/product_detail/:id").delete(this.productDetailController.deleteProductDetail);
  }
}
