import { Request, Response, Application, Router } from "express";
import { TipoProductoController } from '../controllers/tipoProducto.controller';

export class TipoProductoRoutes {
  public tipoProductoController: TipoProductoController = new TipoProductoController();

  public routes(app: Application): void {
    app.route("/tipo_productos/test").get(this.tipoProductoController.test);
    app.route("/tipo_productos").get(this.tipoProductoController.getAllTipoProducto);
    app.route("/tipo_producto/:id").get(this.tipoProductoController.getOneTipoProducto);
    app.route("/tipo_producto").post(this.tipoProductoController.createTipoProducto);
    app.route("/tipo_producto/:id").put(this.tipoProductoController.updateTipoProducto);
    app.route("/tipo_producto/:id").delete(this.tipoProductoController.deleteTipoProducto);
  }
}