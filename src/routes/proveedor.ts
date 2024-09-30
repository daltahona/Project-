import { Request, Response, Application, Router } from "express";

import { ProveedorController } from '../controllers/proveedor.controller';

export class ProveedorRoutes {
  public proveedorController: ProveedorController = new ProveedorController();

  public routes(app: Application): void {
    app.route("/proveedores/test").get(this.proveedorController.test)
    app.route("/proveedores").get(this.proveedorController.getAllProveedor)
    app.route("/proveedor/:id").get(this.proveedorController.getOneProveedor)
    app.route("/proveedor").post(this.proveedorController.createProveedor)
    app.route("/proveedor/:id").put(this.proveedorController.updateProveedor)
    app.route("/proveedor/:id").delete(this.proveedorController.deleteProveedor)
  }
}