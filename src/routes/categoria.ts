import { Request, Response, Application, Router } from "express";

import { CategoriaController } from '../controllers/categoria.controller';

export class CategoriaRoutes {
  public categoriaController: CategoriaController = new CategoriaController();

  public routes(app: Application): void {
    app.route("/categorias/test").get(this.categoriaController.test)
    app.route("/categorias").get(this.categoriaController.getAllCategoria)
    app.route("/categoria/:id").get(this.categoriaController.getOneCategoria)
    app.route("/categoria").post(this.categoriaController.createCategoria)
    app.route("/categoria/:id").put(this.categoriaController.updateCategoria)
    app.route("/categoria/:id").delete(this.categoriaController.deleteCategoria)
  }
}