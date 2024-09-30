import { Request, Response, Application, Router } from "express";
import { DetalleProductoController } from '../controllers/detalleProducto.controller';

export class DetalleProductoRoutes {
  public detalleProductoController: DetalleProductoController = new DetalleProductoController();

  public routes(app: Application): void {
    app.route("/detalle_productos/test").get(this.detalleProductoController.test);
    app.route("/detalle_productos").get(this.detalleProductoController.getAllDetalleProducto);
    app.route("/detalle_producto/:id").get(this.detalleProductoController.getOneDetalleProducto);
    app.route("/detalle_producto").post(this.detalleProductoController.createDetalleProducto);
    app.route("/detalle_producto/:id").put(this.detalleProductoController.updateDetalleProducto);
    app.route("/detalle_producto/:id").delete(this.detalleProductoController.deleteDetalleProducto);
  }
}