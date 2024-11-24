import { Request, Response, Application, Router } from "express";

import { SupplierController } from '../controllers/supplier.controller';

export class SupplierRoutes {
  public supplierController: SupplierController = new SupplierController();

  public routes(app: Application): void {
    app.route("/suppliers/test").get(this.supplierController.test);
    app.route("/suppliers").get(this.supplierController.getAllSupplier);
    app.route("/supplier/:id").get(this.supplierController.getOneSupplier);
    app.route("/supplier").post(this.supplierController.createSupplier);
    app.route("/supplier/:id").put(this.supplierController.updateSupplier);
    app.route("/supplier/:id").delete(this.supplierController.deleteSupplier);
  }
}
